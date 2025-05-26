import React, { useState, useMemo } from 'react'
import { assessments } from '../Data'
import PopupDialog from './PopupDialog'

const TYPES = [
  { key: 'system', label: 'System-Level' },
  { key: 'content', label: 'Content-Level' },
  { key: 'outcome', label: 'Outcome-Level' }
]

// Component for selecting assessment types and applying context filters
export default function Start({ onStart }) {
  const [schemeName, setSchemeName] = useState('')
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedFeedstocks, setSelectedFeedstocks] = useState([])
  const [selectedPhases, setSelectedPhases] = useState([])
  const [selectedContentCats, setSelectedContentCats] = useState([])
  const [selectedApplicability, setSelectedApplicability] = useState([])
  const [showStartWarning, setShowStartWarning] = useState(false)

  // Derive filter options from the data
  const allApplicability = useMemo(() => {
    const fromSystem  = assessments.system
      .flatMap(cat => cat.principles)
      .flatMap(p   => p.criteria)
      .flatMap(c   => c.type)

    const fromOutcome = assessments.outcome
      .flatMap(cat => cat.principles)
      .flatMap(p   => p.criteria)
      .flatMap(c   => c.requirements)
      .flatMap(r   => r.type)

    return Array.from(new Set([...fromSystem, ...fromOutcome]))
  }, [])
  const allFeedstocks = useMemo(
    () => Array.from(new Set(
      assessments.content.flatMap(cat => cat.principles)
        .flatMap(p => p.criteria)
        .flatMap(c => c.requirements)
        .flatMap(r => r.applicableFeedstocks)
    )), []
  )
  const allPhases = useMemo(
    () => Array.from(new Set(
      assessments.content.flatMap(cat => cat.principles)
        .flatMap(p => p.criteria)
        .flatMap(c => c.requirements)
        .flatMap(r => r.applicablePhases)
    )), []
  )
  const allContentCats = useMemo(
    () => assessments.content
        .filter(cat => cat.category !== 'Minimum Backstop')
        .map(cat => cat.category),
    []
  )

  // Toggle an item in an array
  const toggle = (item, arr, setter) =>
    setter(arr.includes(item) ? arr.filter(x => x !== item) : [...arr, item])

  // Validity flags
  const hasName = schemeName.trim().length > 0
  const hasType = selectedTypes.length > 0
  const hasApplicability = !selectedTypes.includes('system') && !selectedTypes.includes('outcome') ? true : selectedApplicability.length > 0
  const hasContentCats = !selectedTypes.includes('content') || selectedContentCats.length > 0
  const hasContent = !selectedTypes.includes('content') || (selectedFeedstocks.length > 0 && selectedPhases.length > 0)

  // Validate if user can start the assessment
  const isValidSelection = () => hasName && hasType && hasApplicability && hasContentCats && hasContent
 
  const startWarningMessage = () => {
    if (!hasName) return 'Please enter a name.'
    if (!hasType) return 'Please select at least one assessment level.'
    return 'Please complete all required selections.'
  }

  const handleStartClick = () => {
    if (!isValidSelection()) {
      setShowStartWarning(true)
    } else {
      handleStart()
    }
  }
  // Trigger the assessment start once valid selections are made
  const handleStart = () => {
    if (isValidSelection()) {
      onStart({
        schemeName,
        types: selectedTypes,
        applicability: selectedApplicability,
        feedstocks: selectedFeedstocks,
        phases: selectedPhases,
        contentCategories: selectedContentCats
      })
    }
  }

  return (
    <>
      {/* Start Popup */}
      {showStartWarning && (
        <PopupDialog
          message={startWarningMessage()}
          onConfirm={() => setShowStartWarning(false)}
        />
      )}

      <div className='header-container'>
        <div className='nav-header'>
          <div className='nav-left'></div>
          <div className='nav-center'>
              <h1 style={{ marginTop: '2rem', marginBottom: '2rem'}} >BIOBASEDCERT Monotoring Tool</h1>
          </div>
          <div className='nav-right'></div>
        </div>
      </div>

      {/* Assessment selection */}
      <div className='container'>
        <h5>Please enter the name of scheme or label</h5>
        <div className='inputs'>
          <input
            type='text'
            value={schemeName}
            onChange={e => setSchemeName(e.target.value)}
            placeholder='Name'
          />
        </div>
          <h5>Please select atleast one level of assessment you wish to conduct</h5>
        <div>
          {TYPES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => toggle(key, selectedTypes, setSelectedTypes)}
              className={selectedTypes.includes(key) ? 'selected' : ''}
            >{label}</button>
          ))}
        </div>
      
        {/* System-level & Outcome-level filters */}
        {(selectedTypes.includes('system') || selectedTypes.includes('outcome')) && (
          <div>
            <h5>Please select an applicable type</h5>
            {allApplicability.map(opt => (
              <button
                key={opt}
                onClick={() =>
                  setSelectedApplicability(prev =>
                    prev[0] === opt ? [] : [opt]
                  )
                }
                className={
                  selectedApplicability[0] === opt ? 'selected' : ''
                }
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {/* Content-level filters */}
        {selectedTypes.includes('content') && (
          <div>
            <h5>Please select atleast one applicable feedstock</h5>
            <div>
              {allFeedstocks.map(f => (
                <button
                  key={f}
                  onClick={() => toggle(f, selectedFeedstocks, setSelectedFeedstocks)}
                  className={selectedFeedstocks.includes(f) ? 'selected' : ''}
                >
                  {f}
                </button>
              ))}
            </div>

            <h5>Please select atleast one applicable value chain actor</h5>
            <div>
              {allPhases.map(p => (
                <button
                  key={p}
                  onClick={() => toggle(p, selectedPhases, setSelectedPhases)}
                  className={selectedPhases.includes(p) ? 'selected' : ''}
                >
                  {p}
                </button>
              ))}
            </div>

            <h5>Which content-level categories would you like to assess?</h5>
            <div>
              {allContentCats.map(cat => (
                <button
                  key={cat}
                  onClick={() => toggle(cat, selectedContentCats, setSelectedContentCats)}
                  className={selectedContentCats.includes(cat) ? 'selected' : ''}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          className='nav'
          style={{ marginTop: '2rem' }}
          onClick={handleStartClick}
        >Start Assessment
        </button>
      </div>
    </>
  )
}