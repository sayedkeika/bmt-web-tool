import React, { useRef } from 'react'
import { assessments } from '../Data'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import SystemCharts from './SystemCharts'
import ContentCharts from './ContentCharts'

const TYPE_LABELS = {
  system: 'System-Level Assessment',
  content: 'Content-Level Assessment',
  outcome: 'Outcome-Level Assessment'
}

// Component for showing charts and allowing export of results
export default function Results({ selectedTypes, answers, onRestart, onBackToOverview }) {
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

  return (
    <div className="container">
      {/* Navigation header with controls for export and restart */}
      <div className="nav-header">
        <button onClick={onBackToOverview}>← Back to Overview</button>
        <button onClick={handleDownloadPDF}>Download Results as PDF</button>
        <button onClick={handleDownloadCSV}>Download Results as CSV</button>
        <button onClick={onRestart}>Start New Assessment →</button>
      </div>

      {/* Wrap results in a ref for PDF capture */}
      <div ref={resultsRef}>
        <h1>Results</h1>
        
        {/* Conditionally render system-level and content-level charts */}
        {selectedTypes.includes('system') && (
          <SystemCharts answers={answers} />
        )}

        {selectedTypes.includes('content') && (
          <ContentCharts answers={answers} />
        )}
      </div>
    </div>
  )
}
