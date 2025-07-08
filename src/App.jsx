import React, { useState, useEffect } from 'react'
import { assessments } from './Data'
import Start from './components/Start'
import Assessment from './components/Assessment'
import Results from './components/Results'
import Glossary from './components/Glossary'
import ScrollToTop from './components/ScrollToTop'
import GlossaryToggle from './components/GlossaryToggle'
import Backstop from './components/Backstop'
import PopupDialog from './components/PopupDialog'

// Main component for managing the overall workflow
export default function App() {
  // Filter state
  const [schemeName, setSchemeName] = useState('')
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedContexts, setSelectedContexts] = useState([])
  const [selectedFeedstocks, setSelectedFeedstocks] = useState([])
  const [selectedPhases, setSelectedPhases] = useState([])
  const [selectedContentCats, setSelectedContentCats] = useState([])
  const [selectedOutcomeTypes, setSelectedOutcomeTypes] = useState([])
  const [excludedContentPrinciples, setExcludedContentPrinciples] = useState([])

  // Answer state
  const [answers, setAnswers] = useState({})
  const [contentAllowed, setContentAllowed] = useState(null)
  const [currentPrincipleId, setCurrentPrincipleId] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [showGlossary, setShowGlossary] = useState(false)

  const [backstopDialogMessage, setBackstopDialogMessage] = useState(null);
  const [showBackstopDialog,   setShowBackstopDialog]   = useState(false);

  // Initializes the assessment with user selections
  const handleStart = ({ schemeName, types, applicability, feedstocks, phases, contentCategories, excludedPrinciples  }) => {
    setSchemeName(schemeName)
    setSelectedTypes(types)
    setSelectedContexts(applicability)
    setSelectedFeedstocks(feedstocks)
    setSelectedPhases(phases)
    setSelectedContentCats(contentCategories)
    setSelectedOutcomeTypes(applicability)
    setExcludedContentPrinciples(excludedPrinciples)
    if (types.includes('content')) {
      setContentAllowed(null)
    } else {
      setContentAllowed(true)
    }
  }

  // Navigation helpers
  const handleBackToAssessment = () => setSubmitted(false)
  const handleSubmit = () => setSubmitted(true)
  const handleRestart = () => {
    setAnswers({})
    setSelectedTypes([])
    setSelectedContexts([])
    setSelectedFeedstocks([])
    setSelectedPhases([])
    setSubmitted(false)
    setCurrentPrincipleId(null)
    setSelectedContentCats([])
    setSelectedOutcomeTypes([])
    setContentAllowed(null)
  }

  // Remove content assessment if backstop criteria not met
  const handleBackstopAnswer = (ok) => {
    if (!ok) {
      // decide which message to show
      if (selectedTypes.length > 1) {
        setBackstopDialogMessage(
          'Complying with this backstop criterion is required to start the content level assessment. ' +
          'Since multiple levels are selected, the assessment will proceed without content level.'
        )
      } else {
        setBackstopDialogMessage(
          'Complying with this backstop criterion is required to start the content level assessment. ' +
          'You will be returned to the start page.'
        )
      }
      setShowBackstopDialog(true);
    } else {
      setContentAllowed(true);
    }
  }

  // Filters system-level categories by type applicability
  const filterSystemCategories = (cats, contexts) =>
    cats
      .map(cat => ({
        ...cat,
        principles: cat.principles
          .map(p => ({
            ...p,
            criteria: p.criteria.filter(c =>
              c.type.some(t => contexts.includes(t))
            )
          }))
          .filter(p => p.criteria.length > 0)
      }))
      .filter(cat => cat.principles.length > 0)

  // Filters content-level categories by feedstock and phase applicability
  const filterContentCategories = (cats, feedstocks, phases) =>
    cats
      .map(cat => ({
        ...cat,
        principles: cat.principles
          .map(p => ({
            ...p,
            criteria: p.criteria
              .map(c => ({
                ...c,
                requirements: c.requirements.filter(r =>
                  feedstocks.some(f => r.applicableFeedstocks.includes(f)) &&
                  phases.some(ph => r.applicablePhases.includes(ph))
                )
              }))
              .filter(c => c.requirements.length > 0)
          }))
          .filter(p => p.criteria.length > 0 && !excludedContentPrinciples.includes(p.id))
      }))
      .filter(cat => cat.principles.length > 0)
    
    // Filters outcome-level categories by type applicability
    const filterOutcomeCategories = (cats, outcomeTypes) =>
    cats
      .map(cat => ({
        ...cat,
        principles: cat.principles
          .map(p => ({
            ...p,
            criteria: p.criteria
              .map(c => ({
                ...c,
                requirements: c.requirements.filter(r =>
                  r.type.some(t => outcomeTypes.includes(t))
                )
              }))
              .filter(c => c.requirements.length > 0)
          }))
          .filter(p => p.criteria.length > 0)
      }))
      .filter(cat => cat.principles.length > 0)
    
  // Build a map of filtered categories per assessment type
  const filteredMap = {}
  if (selectedTypes.includes('system')) {
    filteredMap.system = filterSystemCategories(assessments.system, selectedContexts)
  }

  if (selectedTypes.includes('content')) {
    const base = assessments.content.filter(cat => selectedContentCats.includes(cat.category))
    filteredMap.content = filterContentCategories(base, selectedFeedstocks, selectedPhases)
  }

  if (selectedTypes.includes('outcome')) {
    filteredMap.outcome = filterOutcomeCategories(assessments.outcome, selectedOutcomeTypes)
  }

  // Flatten filtered categories to derive all principles
  const selectedCategories = selectedTypes.flatMap(type => filteredMap[type] || [])
  const allPrinciples = selectedCategories.flatMap(cat => cat.principles)
  const currentPrinciple = allPrinciples.find(p => p.id === currentPrincipleId)
  const currentCategory = selectedCategories.find(cat => cat.principles.some(p => p.id === currentPrincipleId))
  const currentType = selectedTypes.find(type => filteredMap[type]?.some(cat => cat.id === currentCategory?.id))
  
  // Auto-jump into the first principle when selections change
  useEffect(() => {
    if (
      selectedTypes.length > 0 &&
      !submitted &&
      currentPrincipleId === null &&
      allPrinciples.length > 0
    ) {
      setCurrentPrincipleId(allPrinciples[0].id)
    }
  }, [
    selectedTypes,
    selectedContexts,
    selectedFeedstocks,
    selectedPhases,
    selectedContentCats,
    selectedOutcomeTypes,
    submitted,
    currentPrincipleId,
    allPrinciples
  ])

  if (showGlossary) return (
    <>
      <Glossary onBack={() => setShowGlossary(false)} />
      <ScrollToTop />
    </>
  )

  if (!selectedTypes.length) return (
    <>
      <Start onStart={handleStart} />
      <GlossaryToggle onClick={() => setShowGlossary(true)} />
      <ScrollToTop />
    </>
  )

  if (selectedTypes.includes('content') && contentAllowed === null) {
    return (
      <>
        <Backstop onAnswer={handleBackstopAnswer} onBackToStart={handleRestart} />
        {showBackstopDialog && (
          <PopupDialog
            message={backstopDialogMessage}
            onConfirm={() => {
              setShowBackstopDialog(false)
              setSelectedTypes(ts => ts.filter(t => t !== 'content'))
              setContentAllowed(true)
              setCurrentPrincipleId(null)
            }}
          />
        )}
        <GlossaryToggle onClick={() => setShowGlossary(true)} />
        <ScrollToTop />
      </>
    )
  }

  // After submission, show results
  if (submitted) return (
    <>
      <Results
        schemeName={schemeName}
        selectedTypes={selectedTypes}
        answers={answers}
        filteredContentCategories={filteredMap.content}
        filteredSystemCategories={filteredMap.system}
        filteredOutcomeCategories={filteredMap.outcome}
        onBackToStart={handleRestart}
        onBackToAssessment={handleBackToAssessment}
      />
      <GlossaryToggle onClick={() => setShowGlossary(true)} />
      <ScrollToTop />
    </>
  )
  // If a principle is selected, show questionnaire
  if (currentPrincipleId && currentCategory && currentPrinciple) {
    return (
      <>
        <Assessment
          type={currentType}
          selectedTypes={selectedTypes}
          assessmentMap={filteredMap}
          category={currentCategory}
          principle={currentPrinciple}
          allPrinciples={allPrinciples}
          answers={answers}
          setAnswers={setAnswers}
          onBackToStart={handleRestart}
          onPrev={setCurrentPrincipleId}
          onNext={setCurrentPrincipleId}
          onSubmit={handleSubmit}
          onOpenGlossary={() => setShowGlossary(true)}
          filters={{
            contexts: selectedContexts,
            feedstocks: selectedFeedstocks,
            phases: selectedPhases,
            outcomeTypes: selectedOutcomeTypes
          }}
        />
        <GlossaryToggle onClick={() => setShowGlossary(true)} />
        <ScrollToTop />
      </>
    )
  }

  return null
}