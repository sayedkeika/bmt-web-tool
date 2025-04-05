import React, { useState, useRef, useMemo } from 'react'
import { assessments } from '../Data'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import Charts from './Charts'

// Map assessment types
const TYPE_LABELS = {
  system: 'System-Level Assessment',
  content: 'Content-Level Assessment',
  outcome: 'Outcome-Level Assessment'
}

// UI component for results showing charts and allowing PDF/CSV export
export default function Results({ selectedTypes, answers, onRestart, onBackToOverview }) {
  const resultsRef = useRef()

  // Export full results section as a multi-page PDF
  const handleDownloadPDF = () => {
    const input = resultsRef.current
    const originalOverflow = input.style.overflow
    const originalHeight = input.style.height

    // Ensure all content is visible for canvas rendering
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

  // Export answers as CSV
  const handleDownloadCSV = () => {
    const headers = ['Assessment Type', 'Category', 'Principle', 'Criterion', 'Response', 'Justification', 'Feedback']
    const rows = []

    // Iterate over each selected assessment type and gather data for scoring and visualization
    selectedTypes.forEach(type => {
      const categories = assessments[type] || []
      categories.forEach(category => {
        category.principles.forEach(principle => {
          principle.criteria.forEach(criterion => {
            const a = answers[criterion.id] || {}
            rows.push([
              TYPE_LABELS[type],
              category.category,
              principle.title,
              criterion.text,
              a.response || '',
              a.justification || '',
              a.feedback || ''
            ])
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

  // Calculate scoring and chart structures
  const {
    chartsByType,
    responsesByType,
    allPrinciplesChart,
    barChartByType
  } = useMemo(() => {
    const criteriaMap = {}
    const allCriteriaByType = {}
    const chartsByType = {}
    const responsesByType = {}
    const allPrinciplesChart = {}
    const barChartByType = {}

    let totalCriteria = 0
    let totalAnswered = 0
    let totalScore = 0
    let maxScore = 0

    selectedTypes.forEach(type => {
      const categories = assessments[type] || []
      const chartCategories = {}
      const barChartData = {}
      const responseStructure = {}

      const criteria = categories.flatMap(cat =>
        cat.principles.flatMap(principle => principle.criteria.map(c => ({ id: c.id, responseOptions: c.responseOptions })))
      )
      allCriteriaByType[type] = criteria
      criteria.forEach(c => criteriaMap[c.id] = c)

      totalCriteria += criteria.length

      categories.forEach(cat => {
        let categoryScoreTotal = 0
        let categoryMaxTotal = 0
        
        // Filter criteria that have been answered and have a defined score value
        cat.principles.forEach(principle => {
          const answeredCriteria = principle.criteria.filter(c => {
            const answer = answers[c.id]
            const matched = answer?.response && c.responseOptions.find(o => o.label === answer.response)
            return matched?.score !== undefined
          })
          
          // Calculate percentage scores for each answered criteria
          if (answeredCriteria.length > 0) {
            const percentages = answeredCriteria.map(c => {
              const matched = c.responseOptions.find(o => o.label === answers[c.id]?.response)
              const score = matched?.score ?? 0
              const maxScore = Math.max(...c.responseOptions.map(o => o.score ?? 0))
              return (score / maxScore) * 100
            })

            const principlePercentage = percentages.reduce((sum, p) => sum + p, 0) / percentages.length

            categoryScoreTotal += principlePercentage
            categoryMaxTotal += 100

            if (!chartCategories[cat.category]) chartCategories[cat.category] = []
            chartCategories[cat.category].push({ principle: principle.title, score: principlePercentage })

            if (!allPrinciplesChart[type]) allPrinciplesChart[type] = []
            allPrinciplesChart[type].push({ principle: principle.title, score: principlePercentage })

            totalScore += principlePercentage
            maxScore += 100
          }

          const principleTitle = principle.title
          const criteria = principle.criteria.map(c => {
            const answer = answers[c.id]
            const matched = answer?.response && c.responseOptions.find(o => o.label === answer.response)
            const score = matched?.score ?? null
            const maxScore = Math.max(...c.responseOptions.map(o => o.score ?? 0))
            if (answer) totalAnswered++
            return { id: c.id, text: c.text, ...answer, score, maxScore, isUnanswered: !answer }
          })
          
          // Ensure the category exists in the response structure before assigning its principles
          if (!responseStructure[cat.category]) responseStructure[cat.category] = {}
          responseStructure[cat.category][principleTitle] = criteria
        })

        if (categoryMaxTotal > 0) {
          barChartData[cat.category] = {
            category: cat.category,
            score: (categoryScoreTotal / categoryMaxTotal) * 100
          }
        }
      })

      chartsByType[type] = chartCategories
      // Convert bar chart data to array for rendering
      barChartByType[type] = Object.values(barChartData)
      responsesByType[type] = responseStructure
    })

    // Return all structures used to render charts
    return {
      totalCriteria,
      totalAnswered,
      totalUnanswered: totalCriteria - totalAnswered,
      totalScore,
      maxScore,
      chartsByType,
      responsesByType,
      allPrinciplesChart,
      barChartByType
    }
  }, [selectedTypes, answers])

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
        <Charts
          selectedTypes={selectedTypes}
          TYPE_LABELS={TYPE_LABELS}
          allPrinciplesChart={allPrinciplesChart}
          barChartByType={barChartByType}
          chartsByType={chartsByType}
        />
      </div>
    </div>
  )
}