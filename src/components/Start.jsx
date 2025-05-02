import React, { useState, useMemo } from 'react'
import { assessments } from '../Data'

const TYPES = [
  { key: 'system', label: 'System-Level Assessment' },
  { key: 'content', label: 'Content-Level Assessment' },
]

// Component for selecting assessment types and applying context filters
export default function Start({ onStart }) {
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedContexts, setSelectedContexts] = useState([])
  const [selectedFeedstocks, setSelectedFeedstocks] = useState([])
  const [selectedPhases, setSelectedPhases] = useState([])

  // Derive filter options from the data
  const allContexts = useMemo(
    () => Array.from(new Set(
      assessments.system.flatMap(cat => cat.principles)
        .flatMap(p => p.criteria)
        .flatMap(c => c.type)
    )), []
  )
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

  // Toggle an item in an array
  const toggle = (item, arr, setter) =>
    setter(arr.includes(item) ? arr.filter(x => x !== item) : [...arr, item])

  // Validate if user can start the assessment
  const isValidSelection = () => {
    const hasType = selectedTypes.length > 0
    const hasContext = !selectedTypes.includes('system') || selectedContexts.length > 0
    const hasContent =
      !selectedTypes.includes('content') ||
      (selectedFeedstocks.length > 0 && selectedPhases.length > 0)
    return hasType && hasContext && hasContent
  }

  // Trigger the assessment start once valid selections are made
  const handleStart = () => {
    if (isValidSelection()) {
      onStart({
        types: selectedTypes,
        contexts: selectedContexts,
        feedstocks: selectedFeedstocks,
        phases: selectedPhases,
      })
    }
  }

  return (
    <div className="container">
      <h1>BIOBASEDCERT Monotoring Tool</h1>
      <h3>Please select atleast one level of assessment you wish to conduct</h3>
      {/* Assessment selection buttons */}
      <div>
        {TYPES.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => toggle(key, selectedTypes, setSelectedTypes)}
            className={selectedTypes.includes(key) ? 'selected' : ''}
          >{label}</button>
        ))}
      </div>
      
      {/* System-level filters */}
      {selectedTypes.includes('system') && (
        <div>
          <h3>Please select atleast one applicable type</h3>
          {allContexts.map(ctx => (
            <button
              key={ctx}
              onClick={() => toggle(ctx, selectedContexts, setSelectedContexts)}
              className={selectedContexts.includes(ctx) ? 'selected' : ''}
            >
              {ctx}
            </button>
          ))}
        </div>
      )}

      {/* Content-level filters */}
      {selectedTypes.includes('content') && (
        <div>
          <h3>Please select atleast one applicable feedstock</h3>
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

          <h3>Please select atleast one applicable value chain actor</h3>
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
        </div>
      )}

      {/* Start button */}
      <button style={{ marginTop: '2rem' }}
        onClick={handleStart}
        disabled={!isValidSelection()}
        title={
          !isValidSelection()
            ? 'Please select at least one assessment type and the required applicability options.': ''}
      >Start Assessment →</button>
    </div>
  )
}