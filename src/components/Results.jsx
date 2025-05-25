import React, { useRef, useEffect, useState} from 'react'
import { assessments } from '../Data'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import SystemCharts from './SystemCharts'
import ContentCharts from './ContentCharts'
import OutcomeCharts from './OutcomeCharts'
import DownloadIcon from '../svgs/data-download.svg'
import PopupDialog from './PopupDialog'

const TYPE_LABELS = {
  system: 'System-Level Assessment',
  content: 'Content-Level Assessment',
  outcome: 'Outcome-Level Assessment'
}

// Component for showing charts and allowing export of results
export default function Results({
  schemeName,
  selectedTypes,
  answers,
  onBackToStart,
  filteredSystemCategories,
  filteredContentCategories,
  filteredOutcomeCategories,
  onBackToAssessment
}) {
  const [showConfirm, setShowConfirm] = useState(false)
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
      const filename = schemeName?.trim() || 'assessment-results'
      pdf.save(`${filename}.pdf`)
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
    const filename = schemeName?.trim() || 'assessment-responses'
    link.setAttribute('download', `${filename}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Scroll to the top of the page
  useEffect(() => {
    window.scrollTo({ top: 0})
  }, [])
  
  // Confirm or cancel popup
  const handleRestartClick = () => setShowConfirm(true)
  const confirmRestart = () => {
    setShowConfirm(false)
    onBackToStart()
  }
  const cancelRestart = () => setShowConfirm(false)

  return (
    <>
      {/* Confirmation Dialog */}
      {showConfirm && (
        <PopupDialog
          message='Are you sure you want to start a new assessment? All progress will be lost.'
          onCancel={cancelRestart}
          onConfirm={confirmRestart}
        />
      )}

      {/* Top navigation */}
      <div className='header-container'>
        <div className='nav-header'>
          <div className='nav-left'>
            <button className='nav' onClick={onBackToAssessment}>← Back to Assessment</button>
            <button
              className='nav floating-button download-pdf'
              onClick={handleDownloadPDF}>
              <img src={DownloadIcon} className='icon'/>
              <span className='label'>Results as PDF</span>
            </button>
            <button
              className='nav floating-button download-csv'
              onClick={handleDownloadCSV}>
              <img src={DownloadIcon} className='icon'/>
              <span className='label'>Responses as CSV</span>
            </button>
          </div>
          <div className='nav-center'>
            <h1 style={{ marginTop: '2rem', marginBottom: '2rem'}} >Results</h1>
          </div>
          <div className='nav-right'>
            <button className='nav' onClick={handleRestartClick}>Start New Assessment →</button>
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

        {selectedTypes.includes('outcome') && (
          <section className='dashboard-section'>
            <OutcomeCharts
              answers={answers}
              categories={filteredOutcomeCategories}
            />
          </section>
        )}
      </div>
    </>     
  )
}