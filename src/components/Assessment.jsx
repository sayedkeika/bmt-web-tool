import React, { useRef, useEffect } from 'react'
import BookIcon from '../svgs/book.svg'

// Component for rendering the questionnaire and recording user responses
export default function Assessment({
  category,
  principle,
  allPrinciples,
  answers,
  setAnswers,
  onBackToOverview,
  onPrev,
  onNext,
  onSubmit,
  onOpenGlossary
}) {
  // Save a response value for a criterion or requirement
  const handleAnswer = (criterionId, value) => {
    setAnswers(prev => {
      const current = prev[criterionId]?.response
      const next = { ...prev }

      if (current === value) {
        // deselect
        delete next[criterionId]
      } else {
        // select
        next[criterionId] = {
          ...prev[criterionId],
          response: value
        }
      }

      return next
    })
  }

  // Save justification, feedback for a criterion
  const handleInputChange = (criterionId, field, value) => {
    setAnswers(prev => ({
      ...prev,
      [criterionId]: {
        ...prev[criterionId],
        [field]: value
      }
    }))
  }

  // Determine navigation indices
  const currentIndex = allPrinciples.findIndex(p => p.id === principle.id)

  // Flatten all criteria and requirements
  const flatCriteriaOf = p =>
    p.criteria.flatMap(c =>
      Array.isArray(c.requirements) ? c.requirements : [c]
    )

  const isPrincipleCompleted = p =>
    flatCriteriaOf(p).every(c => !!answers[c.id]?.response)

  const allCriteria = allPrinciples.flatMap(flatCriteriaOf)
  const allAnswered = allCriteria.every(c => answers[c.id]?.response)

  // Check if this is a content-level principle (has requirements)
  const isContentAssessment = principle.criteria.some(c =>
    Array.isArray(c.requirements)
  )

  // Refs for scrolling the progress header
  const breadcrumbsRef = useRef(null)
  const pillRefs = useRef({})

  // Center the active pill
  useEffect(() => {
    const el = pillRefs.current[principle.id]
    if (el && breadcrumbsRef.current) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }, [principle.id])

  return (
    <>
      {/* Top navigation */}
      <div className="container">
        <div className='nav-header'>
          <div className='nav-left'>
            <button onClick={onBackToOverview}>← Overview</button>
          </div>
          <div className='nav-center'>
            <h1 style={{ textAlign: 'center', flex: 1 }}>{category.category}</h1>
          </div>
          <div className='nav-right'>
            <button
                onClick={onSubmit}
                disabled={!allAnswered}
                title={!allAnswered ? 'Please complete all criteria before submitting.' : ''}
              >
                Submit →
              </button>
          </div>           
        </div>
        

        {/* Breadcrumb‐style stepper and progress header */}
        <div className="progress-header">
          <div className="stepper-breadcrumbs" ref={breadcrumbsRef}>
            {allPrinciples.map((p, idx) => {
              const done = isPrincipleCompleted(p)
              const isCurrent = idx === currentIndex
              const pillClasses = ['stepper-pill', done ? 'done' : 'todo', isCurrent ? 'current' : ''].join(' ')

              return (
                <div
                  key={p.id}
                  className={pillClasses}
                  onClick={() => onNext(p.id)}
                  ref={el => (pillRefs.current[p.id] = el)}
                >
                  <span className="title">{p.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Main questionnaire content */}
      <div className="container">
        <div className='nav-header'>
          <div className='nav-left'>
            {currentIndex > 0 && (
              <button onClick={() => onPrev(allPrinciples[currentIndex - 1].id)}>← Previous</button>
            )}
          </div>
          <div className='nav-center'>
            <button onClick={onOpenGlossary}>Go to Glossary <img src={BookIcon} className="icon"/></button>
          </div>
          <div className='nav-right'>
            {currentIndex < allPrinciples.length - 1 && (
              <button onClick={() => onNext(allPrinciples[currentIndex + 1].id)}>Next →</button>
            )}
          </div>
        </div>

        {isContentAssessment ? (
          principle.criteria.map(criterion => (
            <div key={criterion.id} className="criterion-block">
              <p style={{ fontSize: '1.1rem' }}><strong>{criterion.text}</strong></p>
              <div>{criterion.examples?.map((ex, i) => <p key={i} style={{ fontStyle: 'italic' }}>{ex}</p>)}</div>
              {criterion.requirements.map(req => (
                <div key={req.id}>
                  <p><strong>{req.text}</strong> <em>({req.level})</em></p>
                  <div className="options">
                    {req.responseOptions.map(option => (
                      <button
                        key={option.label}
                        className={answers[req.id]?.response === option.label ? 'selected' : ''}
                        onClick={() => handleAnswer(req.id, option.label)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  <div className="inputs">
                    <input
                      type="text"
                      placeholder="Justification"
                      value={answers[req.id]?.justification || ''}
                      onChange={e => handleInputChange(req.id, 'justification', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Feedback"
                      value={answers[req.id]?.feedback || ''}
                      onChange={e => handleInputChange(req.id, 'feedback', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          principle.criteria.map(criterion => (
            <div key={criterion.id} className="criterion-block">
              <p style={{ fontSize: '1.1rem' }}><strong>{criterion.id}: {criterion.text}</strong></p>
              <div>{criterion.examples?.map((ex, i) => <p key={i} style={{ fontStyle: 'italic' }}>{ex}</p>)}</div>
              <div className="options">
                {criterion.responseOptions.map(option => (
                  <button
                    key={option.label}
                    className={answers[criterion.id]?.response === option.label ? 'selected' : ''}
                    onClick={() => handleAnswer(criterion.id, option.label)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="inputs">
                <input
                  type="text"
                  placeholder="Justification"
                  value={answers[criterion.id]?.justification || ''}
                  onChange={e => handleInputChange(criterion.id, 'justification', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Source Reference"
                  value={answers[criterion.id]?.feedback || ''}
                  onChange={e => handleInputChange(criterion.id, 'feedback', e.target.value)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}