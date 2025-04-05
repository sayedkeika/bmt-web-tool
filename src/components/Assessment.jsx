import React from 'react'
import '../styles/AssessmentLayout.css';

// UI component for answering criteria grouped by principle
export default function Assessment({
  category,
  principle,
  allPrinciples,
  answers,
  setAnswers,
  onBackToOverview,
  onPrev,
  onNext,
  onSubmit
}) {

  // Set the selected answer for a criterion
  const handleAnswer = (criterionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [criterionId]: {
        ...prev[criterionId],
        response: value
      }
    }))
  }

  // Set justification or feedback for a criterion
  const handleInputChange = (criterionId, field, value) => {
    setAnswers(prev => ({
      ...prev,
      [criterionId]: {
        ...prev[criterionId],
        [field]: value
      }
    }))
  }

  // Determine previous and next principles for navigation
  const currentIndex = allPrinciples.findIndex(p => p.id === principle.id)
  const prevPrinciple = allPrinciples[currentIndex - 1]
  const nextPrinciple = allPrinciples[currentIndex + 1]

  // Check if all criteria across all principles are answered
  const allCriteria = allPrinciples.flatMap(p => p.criteria)
  const allAnswered = allCriteria.every(c => answers[c.id]?.response)

  return (
    <>
      {/* Header with category label and navigation buttons */}
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <button onClick={onBackToOverview}>← Back to Overview</button>
          <h2 style={{ textAlign: 'center', flex: 1 }}>{category.category}</h2>
          <button
            onClick={onSubmit}
            disabled={!allAnswered}
            title={!allAnswered ? 'Please complete all criteria before submitting.' : ''}
          >
            Submit Now →
          </button>
        </div>

        {/* Render principle progress and navigation */}
        <div className="progress-header">
          {/* Navigation between principles */}
          <div className="progress-labels">
            {prevPrinciple && <span>{prevPrinciple.title}</span>}
            <span>›</span>
            <span><strong>{principle.title}</strong></span>
            <span>›</span>
            {nextPrinciple && <span>{nextPrinciple.title}</span>}
          </div>

          {/* Progress grid showing criteria status per principle */}
          <div className="progress-grid">
            {allPrinciples.map(p => (
              <div key={p.id} className="principle-progress">
                {p.criteria.map(c => {
                  const isAnswered = !!answers[c.id]?.response
                  const isCurrent = p.id === principle.id
                  return (
                    <div
                      key={c.id}
                      title={c.text}
                      onClick={() => onNext(p.id)}
                      className={`criteria-box ${isAnswered ? 'answered' : 'unanswered'} ${isCurrent ? 'current' : ''}`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content section with criteria blocks */}
      <div className="container">
        {/* Navigation buttons for moving between principles */}
        <div className="navigation-buttons" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            {prevPrinciple && (
              <button onClick={() => onPrev(prevPrinciple.id)}>← Previous</button>
            )}
          </div>
          <div>
            {nextPrinciple && (
              <button onClick={() => onNext(nextPrinciple.id)}>Next →</button>
            )}
          </div>
        </div>

        {/* Render each criterion with options and input fields */}
        {principle.criteria.map(criterion => (
          <div key={criterion.id} className="criterion-block">
            <p><strong>{criterion.text}</strong></p>
            <div className="requirements">
              {criterion.requirements.map((req, i) => (
                <p key={i}>{req}</p>
              ))}
            </div>
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
                onChange={(e) => handleInputChange(criterion.id, 'justification', e.target.value)}
                style={{ width: '100%', marginBottom: '0.5rem' }}
              />
              <input
                type="text"
                placeholder="Feedback"
                value={answers[criterion.id]?.feedback || ''}
                onChange={(e) => handleInputChange(criterion.id, 'feedback', e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
