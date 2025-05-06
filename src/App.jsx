import React, { useState, useEffect } from 'react'
import { assessments } from './Data'
import Start from './components/Start'
import Assessment from './components/Assessment'
import Results from './components/Results'
import Glossary from './components/Glossary'

// Main component for managing the overall workflow
export default function App() {
  // Filter state
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedContexts, setSelectedContexts] = useState([])
  const [selectedFeedstocks, setSelectedFeedstocks] = useState([])
  const [selectedPhases, setSelectedPhases] = useState([])

  // Answer state
  const [answers, setAnswers] = useState({})
  const [currentPrincipleId, setCurrentPrincipleId] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [showGlossary, setShowGlossary] = useState(false)

  // Initializes the assessment with user selections
  const handleStart = ({ types, contexts, feedstocks, phases }) => {
    setSelectedTypes(types)
    setSelectedContexts(contexts)
    setSelectedFeedstocks(feedstocks)
    setSelectedPhases(phases)
  }

  // Navigation helpers
  const handleBackToStart = () => setCurrentPrincipleId(null)
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
  }

  // Filters system-level categories by overlapping contexts
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
          .filter(p => p.criteria.length > 0)
      }))
      .filter(cat => cat.principles.length > 0)

  // Build a map of filtered categories per assessment type
  const filteredMap = {}
  if (selectedTypes.includes('system')) {
    filteredMap.system = filterSystemCategories(
      assessments.system,
      selectedContexts
    )
  }
  if (selectedTypes.includes('content')) {
    filteredMap.content = filterContentCategories(
      assessments.content,
      selectedFeedstocks,
      selectedPhases
    )
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
    submitted,
    currentPrincipleId,
    allPrinciples
  ])

  if (showGlossary) return <Glossary onBack={() => setShowGlossary(false)} />
  if (!selectedTypes.length) return <Start onStart={handleStart} />

  // After submission, show results
  if (submitted) return (
    <Results
      selectedTypes={selectedTypes}
      answers={answers}
      onRestart={handleRestart}
      onBackToAssessment={handleBackToAssessment}
    />
  )
  // If a principle is selected, show questionnaire
  if (currentPrincipleId && currentCategory && currentPrinciple) {
    return (
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
          phases: selectedPhases
        }}
      />
    )
  }

  return null
}