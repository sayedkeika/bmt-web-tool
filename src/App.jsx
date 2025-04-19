import React, { useState } from 'react'
import { assessments } from './Data'
import Start from './components/Start'
import Overview from './components/Overview'
import Assessment from './components/Assessment'
import Results from './components/Results'
import Glossary from './components/Glossary'

export default function App() {
  const [selectedTypes, setSelectedTypes] = useState([])
  const [answers, setAnswers] = useState({})
  const [currentPrincipleId, setCurrentPrincipleId] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [showGlossary, setShowGlossary] = useState(false)

  const handleStart = (types) => {
    setSelectedTypes(types)
  }

  const handleSelectPrinciple = (id) => {
    setCurrentPrincipleId(id)
  }

  const handleBackToOverview = () => {
    setCurrentPrincipleId(null)
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const handleRestart = () => {
    setAnswers({})
    setSelectedTypes([])
    setSubmitted(false)
    setCurrentPrincipleId(null)
  }

  const selectedCategories = selectedTypes.flatMap(type => assessments[type] || [])
  const allPrinciples = selectedCategories.flatMap(cat => cat.principles)
  const currentPrinciple = allPrinciples.find(p => p.id === currentPrincipleId)
  const currentCategory = selectedCategories.find(cat => cat.principles.some(p => p.id === currentPrincipleId))

  if (showGlossary) {
    return (
      <Glossary onBack={() => setShowGlossary(false)} />
    )
  }

  if (!selectedTypes.length) {
    return <Start onStart={handleStart} />
  }

  if (submitted) {
    return (
      <Results
        selectedTypes={selectedTypes}
        answers={answers}
        onRestart={handleRestart}
        onBackToOverview={() => {
          setSubmitted(false)
          setCurrentPrincipleId(null)
        }}
      />
    )
  }

  if (currentPrincipleId) {
    return (
      <Assessment
        category={currentCategory}
        principle={currentPrinciple}
        allPrinciples={allPrinciples}
        answers={answers}
        setAnswers={setAnswers}
        onBackToOverview={handleBackToOverview}
        onPrev={setCurrentPrincipleId}
        onNext={setCurrentPrincipleId}
        onSubmit={handleSubmit}
        onOpenGlossary={() => setShowGlossary(true)}
      />
    )
  }

  return (
    <Overview
      selectedTypes={selectedTypes}
      assessmentMap={assessments}
      answers={answers}
      onSelectPrinciple={handleSelectPrinciple}
      onRestart={handleRestart}
      onSubmit={handleSubmit}
      onShowGlossary={() => setShowGlossary(true)}
    />
  )
}
