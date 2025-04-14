// Result Summary connecting all Levels
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

export default function Results({ selectedTypes, answers, onRestart, onBackToOverview }) {
  const resultsRef = useRef()

  const handleDownloadPDF = () => {
    const input = resultsRef.current
    const originalOverflow = input.style.overflow
    const originalHeight = input.style.height

    input.style.overflow = 'visible'
    input.style.height = 'auto'

    html2canvas(input, { scale: 2, useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()

      const imgWidth = pageWidth
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      let heightLeft = imgHeight
      let position = 0

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft > 0) {
        position -= pageHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save('assessment-results.pdf')
      input.style.overflow = originalOverflow
      input.style.height = originalHeight
    })
  }

  const handleDownloadCSV = () => {
    const headers = ['Assessment Type', 'Category', 'Principle', 'Criterion', 'Response', 'Justification', 'Feedback']
    const rows = []

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

    const csvContent = [headers, ...rows]
      .map(row => row.map(val => `"${val.replace(/"/g, '""')}"`).join(','))
      .join('\n')

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
      <div className="nav-header">
        <button onClick={onBackToOverview}>← Back to Overview</button>
        <button onClick={handleDownloadPDF}>Download Results as PDF</button>
        <button onClick={handleDownloadCSV}>Download Results as CSV</button>
        <button onClick={onRestart}>Start New Assessment →</button>
      </div>

      <div ref={resultsRef}>
        <h1>Results</h1>

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
