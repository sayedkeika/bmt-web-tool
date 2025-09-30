import React, { useEffect, useState } from 'react'
import Start from './components/Start'
import Assessment from './components/Assessment'
import Results from './components/Results'
import Glossary from './components/Glossary'
import ScrollToTop from './components/ScrollToTop'
import GlossaryToggle from './components/GlossaryToggle'
import Backstop from './components/Backstop'
import PopupDialog from './components/PopupDialog'
import { useSubmissionManager } from './hooks/useSubmissionManager'
import { useAuth } from './hooks/useAuth'
import AuthPage from './components/AuthPage'
import MySubmissions from './components/MySubmissions'
import TopBar from './components/TopBar'
import IntroPage from './components/IntroPage'
import Star4bbsLogo from './images/Star4bbsLogo.png'
import SustcertLogo from './images/SustcertLogo.png'
import HarmonitorLogo from './images/HarmonitorLogo.png'

export default function App() {
  const { user, isAuthenticated, loading, logout } = useAuth()
  const [showLogin, setShowLogin] = useState(true)
  const [showMySubmissions, setShowMySubmissions] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState([])

  const {
    survey,
    submission,
    answers,
    setAnswers,
    startNewSubmission,
    loadSubmission,
    saveProgress,
    allSubmissions,
    fetchSubmissions,
    deleteSubmission,
    metadata
  } = useSubmissionManager()

  const [currentPrincipleId, setCurrentPrincipleId] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [showGlossary, setShowGlossary] = useState(false)
  const [contentAllowed, setContentAllowed] = useState(null)
  const [showBackstopDialog, setShowBackstopDialog] = useState(false)
  const [backstopDialogMessage, setBackstopDialogMessage] = useState(null)

  let levels = survey?.levels || []
  if (contentAllowed === false) {
    levels = levels.filter(l => l.name !== 'content')
  }

  const allPrinciples = levels.flatMap(l =>
    l.categories.flatMap(cat =>
      cat.principles.map(p => ({ ...p, level: l.name, category: cat }))
    )
  )
  const currentPrinciple = allPrinciples.find(p => p.id === currentPrincipleId)

  useEffect(() => {
    if (!currentPrincipleId && allPrinciples.length > 0 && !submitted) {
      setCurrentPrincipleId(allPrincipleId => allPrinciples[0]?.id || null)
    }
  }, [allPrinciples, currentPrincipleId, submitted])

  useEffect(() => {
    if (showMySubmissions && isAuthenticated) {
      fetchSubmissions()
    }
  }, [showMySubmissions, isAuthenticated])

  useEffect(() => {
  if (submission && metadata) {
    if (Array.isArray(metadata.types)) {
      setSelectedTypes(metadata.types)
    }

    if (typeof metadata.contentAllowed !== 'undefined') {
      setContentAllowed(metadata.contentAllowed)
    }
  }
}, [submission, metadata])

  const handleSaveProgress = async () => {
    await saveProgress(false, contentAllowed)
    alert("Progress saved.")
  }

  const handleSubmit = async () => {
    await saveProgress(true, contentAllowed)
    setSubmitted(true)
  }

  const handleRestart = () => {
    window.location.reload()
  }

  const handleBackstopAnswer = (ok) => {
    if (!ok) {
      if (selectedTypes.length === 1 && selectedTypes.includes('content')) {
        setBackstopDialogMessage(
          'Complying with this backstop criterion is required to start the content level assessment. You will be returned to the start page.'
        )
      } else {
        setBackstopDialogMessage(
          'Complying with this backstop criterion is required to start the content level assessment. The assessment will proceed without the content level.'
        )
      }
      setShowBackstopDialog(true)
    } else {
      setContentAllowed(true)
    }
  }

  const handleResume = async (submissionId) => {
    await loadSubmission(submissionId)
    setShowMySubmissions(false)
    setSubmitted(false)
    setCurrentPrincipleId(null)
  }

  if (!isAuthenticated) {
    if (showGlossary) {
      return (
        <>
          <TopBar showAccountMenu={false} />
          <Glossary onBack={() => setShowGlossary(false)} />
          <ScrollToTop />
        </>
      )
    }

    return (
      <>
        <TopBar showAccountMenu={false} />
        <IntroPage
          onOpenGlossary={() => setShowGlossary(true)}
          onAuthSuccess={() => window.location.reload()}
        />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <a href='https://star4bbs.eu/' target='_blank' rel='noopener noreferrer'>
            <img style={{ maxWidth: '280px', height: 'auto' }} src={Star4bbsLogo}/>
          </a>
          <a href='https://sustcert4biobased.eu/' target='_blank' rel='noopener noreferrer'>
            <img style={{ maxWidth: '160px', height: 'auto' }} src={SustcertLogo}/>
          </a>
          <a href='https://www.harmonitor.eu/' target='_blank' rel='noopener noreferrer'>
            <img style={{ maxWidth: '250px', height: 'auto' }} src={HarmonitorLogo}/>
          </a>
        </div>
        <ScrollToTop />
      </>
    )
  }

  if (showGlossary) {
    return (
      <>
        <TopBar onShowAssessments={() => {
          setShowMySubmissions(true)
          setShowGlossary(false)
        }} />
        <Glossary onBack={() => setShowGlossary(false)} />
        <ScrollToTop />
      </>
    )
  }

  if (showMySubmissions) {
    return (
      <>
        <TopBar onShowAssessments={() => {
          setShowMySubmissions(true)
        }} />
        <MySubmissions
          submissions={allSubmissions}
          onResume={handleResume}
          onDelete={deleteSubmission}
          onBack={() => {
            setShowMySubmissions(false)
          }}
        />
        <ScrollToTop />
      </>
    )
  }

  if (!survey) return (
  <>
    <TopBar onShowAssessments={() => {
      setShowMySubmissions(true)
      setSubmitted(false)
      setCurrentPrincipleId(null)
    }} />
      <Start
        onStart={(metadata) => {
          setShowMySubmissions(false)
          setSelectedTypes(metadata.types)
          startNewSubmission(metadata)
          if (metadata.types.includes('content')) {
            setContentAllowed(null)
          }
        }}
        onOpenGlossary={() => setShowGlossary(true)}
      />
    <ScrollToTop />
  </>
)

  if (selectedTypes.includes('content') && contentAllowed === null) {
    return (
      <>
        <TopBar onShowAssessments={() => {
          setShowMySubmissions(true)
        }} />
        <Backstop onAnswer={handleBackstopAnswer} onBackToStart={handleRestart} />
        {showBackstopDialog && (
          <PopupDialog
            message={backstopDialogMessage}
            onConfirm={() => {
              setShowBackstopDialog(false)
              if (selectedTypes.length === 1 && selectedTypes.includes('content')) {
                handleRestart()
              } else {
                setContentAllowed(false)
                setCurrentPrincipleId(null)
              }
            }}
          />
        )}
        <ScrollToTop />
      </>
    )
  }

  if (submitted) {
    const grouped = Object.fromEntries(levels.map(l => [l.name, l.categories]))
    return (
      <>
        <TopBar onShowAssessments={() => {
          setShowMySubmissions(true)
        }} />
        <Results
          schemeName={submission?.survey?.name || ''}
          selectedTypes={selectedTypes}
          answers={answers}
          filteredSystemCategories={grouped.system}
          filteredContentCategories={grouped.content}
          filteredOutcomeCategories={grouped.outcome}
          onBackToStart={handleRestart}
          onBackToAssessment={() => setSubmitted(false)}
          onOpenGlossary={() => setShowGlossary(true)}
        />
        <ScrollToTop />
      </>
    )
  }

  if (currentPrinciple) {
    const allPrinciplesForType = allPrinciples

    return (
      <>
        <TopBar onShowAssessments={() => {
          setShowMySubmissions(true)
        }} />
        <Assessment
          type={currentPrinciple.level}
          selectedTypes={selectedTypes}
          assessmentMap={null}
          category={currentPrinciple.category}
          principle={currentPrinciple}
          allPrinciples={allPrinciplesForType}
          answers={answers}
          setAnswers={setAnswers}
          onBackToStart={handleRestart}
          onPrev={setCurrentPrincipleId}
          onNext={setCurrentPrincipleId}
          onSubmit={handleSubmit}
          onSave={handleSaveProgress}
          onOpenGlossary={() => setShowGlossary(true)}
          filters={{}}
        />
        <ScrollToTop />
      </>
    )
  }

  return null
}