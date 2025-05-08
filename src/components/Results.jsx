import React, { useRef, useEffect } from 'react'
import { assessments } from '../Data'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import SystemCharts from './SystemCharts'
import ContentCharts from './ContentCharts'
import DownloadIcon from '../svgs/data-download.svg'

const TYPE_LABELS = {
  system: 'System-Level Assessment',
  content: 'Content-Level Assessment'
}

// Component for showing charts and allowing export of results
export default function Results({
  selectedTypes,
  answers,
  onRestart,
  filteredSystemCategories,
  filteredContentCategories,
  onBackToAssessment
}) {
  const resultsRef = useRef()
  
  // Generates and downloads a PDF of the current results view
  const handleDownloadPDF = () => {
    const input = resultsRef.current
    const originalOverflow = input.style.overflow
    const originalHeight = input.style.height

    input.style.overflow = 'visible'
    input.style.height = 'auto'

    // Use html2canvas to render the DOM to a canvas
    html2canvas(input, { scale: 2, useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()

      // Calculate image dimensions maintaining aspect ratio
      const imgWidth = pageWidth
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      let heightLeft = imgHeight
      let position = 0

      // Add initial image
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      // Continue adding pages if content exceeds one page
      while (heightLeft > 0) {
        position -= pageHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      // Save and restore original styles
      pdf.save('assessment-results.pdf')
      input.style.overflow = originalOverflow
      input.style.height = originalHeight
    })
  }

  // Generates and downloads a CSV file of the raw responses
  const handleDownloadCSV = () => {
    // Define CSV headers
    const headers = ['Assessment Type', 'Category', 'Principle', 'Criterion', 'Response', 'Justification', 'Feedback']
    const rows = []

    // Iterate through each selected assessment type
    selectedTypes.forEach(type => {
      const categories = assessments[type] || []
      categories.forEach(category => {
        category.principles.forEach(principle => {
          principle.criteria.forEach(criterion => {
            const items = Array.isArray(criterion.requirements) ? criterion.requirements : [criterion]
            items.forEach(item => {
              const a = answers[item.id] || {}
              rows.push([
                TYPE_LABELS[type],
                category.category,
                principle.title,
                item.text,
                a.response || '',
                a.justification || '',
                a.feedback || ''
              ])
            })
          })
        })
      })
    })

    // Build CSV content string
    const csvContent = [headers, ...rows]
      .map(row => row.map(val => `"${val.replace(/"/g, '""')}"`).join(','))
      .join('\n')

    // Create a Blob and link for download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'assessment-results.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Scroll to the top of the page
  useEffect(() => {
    window.scrollTo({ top: 0})
  }, [])
    
  return (
    <>
      {/* Top navigation */}
      <div className='header-container'>
        <div className='nav-header'>
          <div className='nav-left'>
            <button className='nav' onClick={onBackToAssessment}>← Back to Assessment</button>
            <button className='nav' onClick={handleDownloadPDF}>Download Results as PDF <img src={DownloadIcon} className='icon'/></button>
          </div>
          <div className='nav-center'>
            <h2>Results</h2>
          </div>
          <div className='nav-right'>
            <button className='nav' onClick={handleDownloadCSV}>Download Assessment as CSV <img src={DownloadIcon} className='icon'/></button>
            <button className='nav' onClick={onRestart}>Start New Assessment →</button>
          </div>
        </div>
      </div>

      {/* Main results content */}
      <div className='container' ref={resultsRef}>
        {selectedTypes.includes('system') && (
          <section className='dashboard-section'>
            <SystemCharts
              answers={answers}
              categories={filteredSystemCategories}
            />
          </section>
        )}

        {selectedTypes.includes('content') && (
          <section className='dashboard-section'>
            <ContentCharts 
              answers={answers} 
              categories={filteredContentCategories}
            />
          </section>
        )}
      </div>
    </>     
  )
}