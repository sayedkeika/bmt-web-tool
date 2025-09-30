import React, { useRef, useEffect, useState } from 'react'
import { makeAnswerKey } from '../utils/answerMapping'
import LeftArrowIcon from '../svgs/left-arrow.svg'
import RightArrowIcon from '../svgs/right-arrow.svg'
import InfoIcon from '../svgs/c-info.svg'
import GlossaryIcon from '../svgs/book.svg'
import SaveIcon from '../svgs/floppy-disk.svg'
import PopupDialog from './PopupDialog'
import ActionRail from './ActionRail'

const TYPE_LABELS = {
  system: 'System Level',
  content: 'Content Level',
  outcome: 'Outcome Level'
}

// Principles that should show the social/ILO note
const SOCIAL_NOTE_TITLES = new Set([
  'Labour and Human Rights',
  'Healthy and Safe Working Conditions',
  'Wellbeing of the Local Community'
])


// Component for rendering the questionnaire and recording user responses
export default function Assessment({
  type,
  category,
  principle,
  allPrinciples,
  answers,
  setAnswers,
  onBackToStart,
  onPrev,
  onNext,
  onSubmit,
  onSave,
  onOpenGlossary
}) {
  const [showConfirm, setShowConfirm] = useState(false)
  const [showSubmitWarning, setShowSubmitWarning] = useState(false)
  const [submitWarningMsg, setSubmitWarningMsg] = useState('Please complete the assessment before submitting.')

  // Confirm or cancel popup
  const handleRestartClick = () => setShowConfirm(true)
  const confirmRestart = () => {
    setShowConfirm(false)
    onBackToStart()
  }
  const cancelRestart = () => setShowConfirm(false)

  const handleSubmitClick = () => {
    if (!allAnswered || !allInputsFilled) {
      setSubmitWarningMsg(
        'Please complete all response options and fill in both "Justification" and "Source Reference" for every item before submitting.'
      )
      setShowSubmitWarning(true)
    } else {
      onSubmit()
    }
  }
  const closeSubmitWarning = () => setShowSubmitWarning(false)

  // Mark Not Applicable responses and tag them
  const isNA = (label) => typeof label === 'string' && /not.?applicable/i.test(label)

  // Save a response value for a criterion or requirement
  const handleAnswer = (id, option, parentCriterionId = null) => {
    const key = makeAnswerKey(parentCriterionId || id, parentCriterionId ? id : null)

    setAnswers(prev => {
      const current = prev[key]?.response
      const next = { ...prev }

      const selectingSame = current === option.label

      if (selectingSame) {
        next[key] = {
          ...prev[key],
          response: null,
          score: null,
          is_na: false,
        }
      } else {
        next[key] = {
          ...prev[key],
          response: option.label,
          score: option.score ?? null,
          criterion_id: parentCriterionId || id,
          requirement_id: parentCriterionId ? id : null,
          is_na: isNA(option.label),
        }
      }

      return next
    })
  }

  // Save justification, feedback for a criterion
  const handleInputChange = (criterionId, requirementId, field, value) => {
    const key = makeAnswerKey(criterionId, requirementId)

    setAnswers(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value
      }
    }))
  }

  // Determine navigation indices
  const currentIndex = allPrinciples.findIndex(p => p.id === principle.id)

  // Flatten all criteria and requirements
  const flatCriteriaOf = p =>
    p.criteria.flatMap(c =>
      Array.isArray(c.requirements) && c.requirements.length > 0
        ? c.requirements.map(r => ({ ...r, criterion_id: c.id, requirement_id: r.id }))
        : [{ ...c, criterion_id: c.id, requirement_id: null }]
    )
  
  const isEntryComplete = (criterionId, requirementId = null) => {
    const key = makeAnswerKey(criterionId, requirementId)
    const a = answers[key]
    const hasResponse = !!a?.response
    const just = (a?.justification ?? '').toString().trim()
    const ref  = (a?.feedback ?? '').toString().trim()
    return hasResponse && just.length > 0 && ref.length > 0
  }

  const isPrincipleCompleted = p =>
    p.criteria.every(c => {
      if (Array.isArray(c.requirements) && c.requirements.length > 0) {
        return c.requirements.every(r => isEntryComplete(c.id, r.id))
      } else {
        return isEntryComplete(c.id, null)
      }
    })

  

  const allCriteria = allPrinciples.flatMap(flatCriteriaOf)
  const allAnswered = allCriteria.every(c => {
    const key = makeAnswerKey(c.criterion_id || c.id, c.requirement_id ?? null)
    return !!answers[key]?.response
  })

  const allInputsFilled = allCriteria.every(c => {
    const key = makeAnswerKey(c.criterion_id || c.id, c.requirement_id ?? null)
    const a = answers[key]
    const just = (a?.justification ?? '').toString().trim()
    const ref  = (a?.feedback ?? '').toString().trim()
    return just.length > 0 && ref.length > 0
  })

  // Build the label/title for a long text by merging description
  const getRequirementLabel = (req, type) => {
    const base = req?.text || ''
    const extra = type === 'content' && req?.description ? ` ${req.description}` : ''
    if (type === 'outcome') return `${req?.code ? req.code + ': ' : ''}${base}${extra}`
    return `${base}${extra}`
  }

  // Check if this is a content or outcome (has requirements)
  const isRichAssessment = principle.criteria.some(
    c => Array.isArray(c.requirements) && c.requirements.length > 0
  )

  // Refs for scrolling the progress header
  const breadcrumbsRef = useRef(null)
  const pillRefs = useRef({})

  // Scroll pill navigation
  const scrollStep = 500
  const scrollLeft = () => {
    if (!breadcrumbsRef.current) return
    breadcrumbsRef.current.scrollBy({ left: -scrollStep, behavior: 'smooth' })
  }
  const scrollRight = () => {
    if (!breadcrumbsRef.current) return
    breadcrumbsRef.current.scrollBy({ left:  scrollStep, behavior: 'smooth' })
  }


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

  // Tooltip formatter
  const formatList = arr => arr?.length ? arr.join(', ') : 'None'

  // Scroll to the top of the page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [principle.id])

  const formatListCSV = (val) => {
    if (!val) return 'None'

    if (Array.isArray(val)) {
      return val.map(s => s.trim()).filter(Boolean).join(', ') || 'None'
    }

    if (typeof val === 'string') {
      return val.split(',').map(s => s.trim()).filter(Boolean).join(', ') || 'None'
    }

    return 'None'
  }
  
  return (
    <>
      {/* Restart Popup */}
      {showConfirm && (
        <PopupDialog
          message='Are you sure you want to start a new assessment? Make sure you save your progress before leaving'
          onCancel={cancelRestart}
          onConfirm={confirmRestart}
        />
      )}

      {/* Submit Popup */}
      {showSubmitWarning && (
        <PopupDialog
          message={submitWarningMsg}
          onConfirm={closeSubmitWarning}
        />
      )}

      {/* Top navigation */}
      <div className='header-container'>
        <div className='nav-header'>
          <div className='nav-left'>
            <button className='nav' onClick={handleRestartClick} title='Start a new assessment'>New Assessment</button>
          </div>
          <div className='nav-center'>
            <h4 style={{ fontSize: '1.1rem' }}>{TYPE_LABELS[type]}</h4>
            <h3>{category.label}</h3>
          </div>
          <div className='nav-right'>
            <button
                className='nav'
                onClick={handleSubmitClick}
              >Submit
            </button>
          </div>           
        </div>

        {/* Breadcrumb‐style stepper and progress progress bar */}
        <div className='progress-header'>
          <img
            className='scroll-button left'
            src={LeftArrowIcon}
            alt='◄'
            onClick={scrollLeft}
          />

          <div className='stepper-breadcrumbs' ref={breadcrumbsRef}>
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
                  <span>{p.title}</span>
                </div>
              )
            })}
          </div>

          <img
            className='scroll-button right'
            src={RightArrowIcon}
            alt='►'
            onClick={scrollRight}
          />

        </div>

        {/* Progress bar */}
        <div className='progress-wrapper'>
          {(() => {
            const total = allCriteria.length
            const done = allCriteria.filter(c =>
              isEntryComplete(c.criterion_id || c.id, c.requirement_id ?? null)
            ).length
            const pct = total ? Math.round((done / total) * 100) : 0
            return (
              <>
                <div className='progress-container'>
                  <div className='progress-fill' style={{ width: `${pct}%` }} />
                </div>
                <span className='progress-label'>{pct}%</span>
              </>
            )
          })()}
        </div>
      </div>

      {/* Main questionnaire content */}
      <div className="page-row" style={{ '--rail-sticky-top': '290px' }}>
        <div className='container'>
          {/* Social/ILO alignment note for specific principles */}
          {SOCIAL_NOTE_TITLES.has(String(principle?.title || '').trim()) && (
            <div className='info-note'>
              <strong>Note:</strong> in the social category, some requirements end with a code (e.g., C155, C184).
              These codes indicate that the requirement is aligned with the corresponding ILO convention.
              If the scheme/ecolabel you are assessing requires compliance with the referred ILO, the requirement
              can be considered covered.
            </div>
          )}
          {/* Content & Outcome */}
          {isRichAssessment ? (
            principle.criteria.map(criterion => (
              <div key={criterion.id} className='criterion-block'>
                <p style={{ fontSize: '1.1rem' }}>
                  <strong>
                    {criterion.code}: {criterion.text}
                  </strong>
                </p>

                {/* Render examples differently */}
                {type === 'content' && (
                  <div>
                    {criterion.examples?.map((ex, i) => (
                      <p key={i} style={{ fontStyle: 'italic' }}>{ex}</p>
                    ))}
                  </div>
                )}

                {criterion.requirements.map(req => (
                  <div key={req.id}>
                    <div className="req-header">
                      <strong>{getRequirementLabel(req, type)}</strong>
                      {type === 'content' && (
                        <span className='tooltip-container'>
                          <img src={InfoIcon} className='info-icon' alt='info' />
                          <div className='tooltip-box'>
                            <div><strong>Requirement level:</strong> {req.level}</div>
                            <div><strong>Applicable feedstocks:</strong> {formatListCSV(req.applicable_feedstocks)}</div>
                            <div><strong>Applicable value chain actors:</strong> {formatListCSV(req.applicable_phases)}</div>
                          </div>
                        </span>
                      )}
                    </div>
                    
                    {type === 'outcome' && (
                      <div>
                        {req.examples?.map((ex, i) => (
                          <p key={i} style={{ fontStyle: 'italic' }}>{ex}</p>
                        ))}
                      </div>
                    )}

                    <div className='options'>
                      {(() => {
                        const key = makeAnswerKey(criterion.id, req.id)
                        let options = req.response_options

                        // Normalize fetched backend scores
                        if (Array.isArray(options) && typeof options[0] === 'string') {
                          options = options.map(val => {
                            const s = parseInt(val)
                            const labelMap =
                              type === 'content'
                                ? { 0: 'No', 1: 'Yes' }
                                : { 0: 'Missing', 1: 'Partly Met', 2: 'Fully Met' }
                            return { label: labelMap[s] ?? String(val), value: val, score: isNaN(s) ? null : s }
                          })
                        }

                        // Fallback
                        if (!options || options.length === 0) {
                          options =
                            type === 'content'
                              ? [
                                  { label: 'No', value: '0', score: 0 },
                                  { label: 'Yes', value: '1', score: 1 },
                                ]
                              : [
                                  { label: 'Missing', value: '0', score: 0 },
                                  { label: 'Partly Met', value: '1', score: 1 },
                                  { label: 'Fully Met', value: '2', score: 2 },
                                ]
                        }

                        // Ensure every option has a numeric score when possible
                        const withScore = (o) => ({
                          ...o,
                          score:
                            typeof o.score === 'number'
                              ? o.score
                              : o.value != null && !isNaN(parseInt(o.value))
                              ? parseInt(o.value)
                              : null,
                        })
                        options = options.map(withScore)

                        // Separate NA so we can always push it last
                        const isNA = (o) => /not.?applicable/i.test(o?.label || '')
                        let naOptions = options.filter(isNA)
                        let nonNaOptions = options.filter(o => !isNA(o))

                        // Sort non-NA by score descending order
                        const scoreVal = (o) => (typeof o.score === 'number' ? o.score : -Infinity)
                        nonNaOptions.sort((a, b) => scoreVal(b) - scoreVal(a))

                        // Add NA if backend didn’t supply it
                        if (type === 'outcome' && naOptions.length === 0) {
                          naOptions = [{ label: 'Not applicable', value: null, score: null }]
                        }

                        // Final ordered options
                        options = [...nonNaOptions, ...naOptions]

                        return options.map(option => (
                          <button
                            key={option.label}
                            className={answers[key]?.response === option.label ? 'selected' : ''}
                            onClick={() => handleAnswer(req.id, option, criterion.id)}
                          >
                            {option.label}
                          </button>
                        ))
                      })()}
                    </div>

                    <div className='inputs'>
                      <input
                        type='text'
                        placeholder='Justification'
                        value={answers[makeAnswerKey(criterion.id, req.id)]?.justification || ''}
                        onChange={e => handleInputChange(criterion.id, req.id, 'justification', e.target.value)}
                      />
                      <input
                        type='text'
                        placeholder='Source Reference'
                        value={answers[makeAnswerKey(criterion.id, req.id)]?.feedback || ''}
                        onChange={e => handleInputChange(criterion.id, req.id, 'feedback', e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            // System
            principle.criteria.map(criterion => {
              const key = makeAnswerKey(criterion.id, null)

              return (
                <div key={criterion.id} className='criterion-block'>
                  <p style={{ fontSize: '1.1rem' }}>
                    <strong>{criterion.code}: {criterion.text}</strong>
                  </p>
                  {criterion.examples?.length > 0 && (
                    <div>
                      {criterion.examples.map((ex, i) => (
                        <p key={i} style={{ fontStyle: 'italic' }}>{ex}</p>
                      ))}
                    </div>
                  )}
                  <div className='options'>
                    {(criterion.response_options ?? []).map(option => (
                      <button
                        key={option.label}
                        className={answers[key]?.score === option.score ? 'selected' : ''}
                        onClick={() => handleAnswer(criterion.id, option)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  <div className='inputs'>
                    <input
                      type='text'
                      placeholder='Justification'
                      value={answers[key]?.justification || ''}
                      onChange={e => handleInputChange(criterion.id, null, 'justification', e.target.value)}
                    />
                    <input
                      type='text'
                      placeholder='Source Reference'
                      value={answers[key]?.feedback || ''}
                      onChange={e => handleInputChange(criterion.id, null, 'feedback', e.target.value)}
                    />
                  </div>
                </div>
              )
            })
          )}

          <div className='nav-header'>
            <div className='nav-left'>
              {currentIndex > 0 && (
                <button className='page-button' onClick={() => onPrev(allPrinciples[currentIndex - 1].id)}>Previous</button>
              )}
            </div>
            <div className='nav-center'></div>
            <div className='nav-right'>
              {currentIndex < allPrinciples.length - 1 ? (
                <button className='page-button' onClick={() => onNext(allPrinciples[currentIndex + 1].id)}>Next</button>
              ) : (
                <button className='nav' onClick={handleSubmitClick}>Submit</button>
              )}
            </div>
          </div>
        </div>
        <ActionRail
          actions={[
            { id: 'glossary', label: 'Glossary', title: 'Go to Glossary', onClick: onOpenGlossary, imgSrc: GlossaryIcon },
            { id: 'save',     label: 'Save',     title: 'Save Progress', onClick: () => onSave(), imgSrc: SaveIcon },
          ]}
        />
      </div>
      
    </>
  )
}