// Assessment Questionnaire
import React from 'react'

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
  const handleAnswer = (criterionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [criterionId]: {
        ...prev[criterionId],
        response: value
      }
    }));
  }

  const handleInputChange = (criterionId, field, value) => {
    setAnswers(prev => ({
      ...prev,
      [criterionId]: {
        ...prev[criterionId],
        [field]: value
      }
    }));
  }

  const currentIndex = allPrinciples.findIndex(p => p.id === principle.id)
  const prevPrinciple = allPrinciples[currentIndex - 1]
  const nextPrinciple = allPrinciples[currentIndex + 1]

  const allCriteria = allPrinciples.flatMap(p =>
    p.criteria.flatMap(c => (Array.isArray(c.requirements) ? c.requirements : [c]))
  )
  const allAnswered = allCriteria.every(c => answers[c.id]?.response)

  const isContentAssessment = principle.criteria.some(c => Array.isArray(c.requirements))

  return (
    <>
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

        <div className="progress-header">
          <div className="progress-labels">
            {prevPrinciple && <span>{prevPrinciple.title}</span>}
            <span>›</span>
            <span><strong>{principle.title}</strong></span>
            <span>›</span>
            {nextPrinciple && <span>{nextPrinciple.title}</span>}
          </div>

          <div className="progress-grid">
            {allPrinciples.map(p => (
              <div key={p.id} className="principle-progress">
                {p.criteria.flatMap(c => Array.isArray(c.requirements) ? c.requirements : [c]).map(c => {
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

      <div className="container">
        <div className="navigation-buttons" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            {prevPrinciple && (
              <button onClick={() => onPrev(prevPrinciple.id)}>← Previous</button>
            )}
          </div>

          <button onClick={onOpenGlossary}>Go to Glossary</button>

          <div>
            {nextPrinciple && (
              <button onClick={() => onNext(nextPrinciple.id)}>Next →</button>
            )}
          </div>
        </div>

        {isContentAssessment ? (
          principle.criteria.map(criterion => (
            <div key={criterion.id} className="criterion-block">
              <p style={{ fontSize: '1.1rem' }}><strong>{criterion.text}</strong></p>
              <div className="examples">
                {criterion.examples?.map((ex, i) => <p key={i} style={{ fontStyle: 'italic' }}>{ex}</p>)}
              </div>
              {criterion.requirements.map(req => (
                <div key={req.id} className="sub-criterion-block">
                  <p><strong>{req.text}</strong>  <em>({req.level})</em></p>
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
                      onChange={(e) => handleInputChange(req.id, 'justification', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Feedback"
                      value={answers[req.id]?.feedback || ''}
                      onChange={(e) => handleInputChange(req.id, 'feedback', e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          principle.criteria.map(criterion => (
            <div key={criterion.id} className="criterion-block">
              <p style={{ fontSize: '1.1rem' }}><strong>{criterion.text}</strong></p>
              <div className="examples">
                {criterion.examples?.map((ex, i) => <p key={i} style={{ fontStyle: 'italic' }}>{ex}</p>)}
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
                  className="full-width"
                  type="text"
                  placeholder="Justification"
                  value={answers[criterion.id]?.justification || ''}
                  onChange={(e) => handleInputChange(criterion.id, 'justification', e.target.value)}
                />
                <input
                  className="full-width"
                  type="text"
                  placeholder="Feedback"
                  value={answers[criterion.id]?.feedback || ''}
                  onChange={(e) => handleInputChange(criterion.id, 'feedback', e.target.value)}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}
