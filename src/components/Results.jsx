import React, { useRef, useEffect, useState} from 'react'
import { assessments } from '../Data'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import SystemCharts from './SystemCharts'
import ContentCharts from './ContentCharts'
import OutcomeCharts from './OutcomeCharts'
import PopupDialog from './PopupDialog'
import BioBasedCertLogo from '../images/BioBasedCertLogo.png'

const TYPE_LABELS = {
  system: 'System Level Assessment',
  content: 'Content Level Assessment',
  outcome: 'Outcome Level Assessment'
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
  const handleDownloadPDF = async () => {
    const container = resultsRef.current
    const pdf = new jsPDF('p','mm','a4')
    const fullWidth = pdf.internal.pageSize.getWidth()
    const margin = 15
    const pageWidth = fullWidth - margin * 2
    const pageHeight = pdf.internal.pageSize.getHeight()
    const date = new Date().toLocaleDateString()

    const logoImg = new Image()
    logoImg.src = BioBasedCertLogo
    await new Promise(resolve => { logoImg.onload = resolve })

    const logoHeight = 10
    const logoWidth  = (logoImg.naturalWidth / logoImg.naturalHeight) * logoHeight

    // Helper to render one DOM node to PDF page
    async function renderNode(node, addPage = false) {
      const canvas = await html2canvas(node, { scale:2, useCORS:true })
      const img = canvas.toDataURL('image/png')
      if (addPage) pdf.addPage()

      // Logo
      const logoX = (fullWidth - logoWidth) / 2
      pdf.addImage(BioBasedCertLogo, 'PNG', logoX, 5, logoWidth, logoHeight)

      // Date
      pdf.setFontSize(8)
      pdf.text(`Created: ${date}`, fullWidth - margin, 12, { align:'right' })

      // Body image
      const imgWidth = pageWidth
      const imgHeight = (canvas.height * imgWidth)/canvas.width
      pdf.addImage(img,'PNG', margin, 30, imgWidth, imgHeight)
    }

    const jobs = []

    // Entire wrapper
    if (selectedTypes.includes('system')) {
      const sys = container.querySelector('.result-system')
      if (sys) jobs.push(sys)
    }

    // Each inner section
    if (selectedTypes.includes('content')) {
      const contentRoot = container.querySelector('.result-content')
      if (contentRoot) {
        contentRoot
          .querySelectorAll('.dashboard-section')
          .forEach(sec => jobs.push(sec))
      }
    }

    // Entire wrapper
    if (selectedTypes.includes('outcome')) {
      const out = container.querySelector('.result-outcome')
      if (out) jobs.push(out)
    }

    // Render one-by-one
    for (let i = 0; i < jobs.length; i++) {
      await renderNode(jobs[i], i > 0)
    }

    pdf.save(`${schemeName.trim()||'assessment-results'}.pdf`)
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
            <button className='nav' onClick={onBackToAssessment}>Back to Assessment</button>
          </div>
          <div className='nav-center'>
            <h1 style={{ marginTop: '2rem', marginBottom: '2rem'}} >Results</h1>
          </div>
          <div className='nav-right'>
            <button className='nav' onClick={handleRestartClick}>Start New Assessment</button>
          </div>
        </div>
      </div>

      {/* Main results content */}
      <div className='container' ref={resultsRef}>
        <div>
          <button
              className='nav floating-button download-pdf'
              onClick={handleDownloadPDF}>
              <span className='label'>Download Results</span>
              <span className='label-sub'>as PDF</span>
            </button>
            <button
              className='nav floating-button download-csv'
              onClick={handleDownloadCSV}>
              <span className='label'>Download Responses</span>
              <span className='label-sub'>as CSV</span>
            </button>
        </div>
        {selectedTypes.includes('system') && (
          <section className='dashboard-section result-section result-system'>
            <SystemCharts
              answers={answers}
              categories={filteredSystemCategories}
            />
          </section>
        )}

        {selectedTypes.includes('content') && (
          <section className='dashboard-section result-section result-content'>
            <ContentCharts 
              answers={answers} 
              categories={filteredContentCategories}
            />
          </section>
        )}

        {selectedTypes.includes('outcome') && (
          <section className='dashboard-section result-section result-outcome'>
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