import React, { useState, useMemo } from 'react'
import { assessments } from '../Data'

const TYPES = [
  { key: 'system', label: 'System-Level Assessment' },
  { key: 'content', label: 'Content-Level Assessment' },
  //{ key: 'outcome', label: 'Outcome-Level Assessment' }
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

  // Trigger the assessment start once valid selections are made
  const handleStart = () => {
    if (
      selectedTypes.length > 0 &&
      (!selectedTypes.includes('system') || selectedContexts.length > 0) &&
      (!selectedTypes.includes('content') || (selectedFeedstocks.length > 0 && selectedPhases.length > 0))
    ) {
      onStart({
        types: selectedTypes,
        contexts: selectedContexts,
        feedstocks: selectedFeedstocks,
        phases: selectedPhases
      })
    }
  }

  return (
    <div className="container">
      <h1>Select Assessment Types</h1>
      {/* Assessment selection buttons */}
      <div className="types">
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
        <div className="sub-select">
          <h3>CSL Type</h3>
          {allContexts.map(ctx => (
            <label key={ctx}>  
              <input
                type="checkbox"
                checked={selectedContexts.includes(ctx)}
                onChange={() => toggle(ctx, selectedContexts, setSelectedContexts)}
              /> {ctx}
            </label>
          ))}
        </div>
      )}

      {/* Content-level filters */}
      {selectedTypes.includes('content') && (
        <div className="sub-select">
          <h3>Applicable Feedstocks</h3>
          {allFeedstocks.map(f => (
            <label key={f}>
              <input
                type="checkbox"
                checked={selectedFeedstocks.includes(f)}
                onChange={() => toggle(f, selectedFeedstocks, setSelectedFeedstocks)}
              /> {f}
            </label>
          ))}
          <h3>Applicable Value Chain Actors</h3>
          {allPhases.map(p => (
            <label key={p}>
              <input
                type="checkbox"
                checked={selectedPhases.includes(p)}
                onChange={() => toggle(p, selectedPhases, setSelectedPhases)}
              /> {p}
            </label>
          ))}
        </div>
      )}

      {/* Start button */}
      <button
        onClick={handleStart}
        disabled={
          !(selectedTypes.length > 0 &&
            (!selectedTypes.includes('system') || selectedContexts.length > 0) &&
            (!selectedTypes.includes('content') || (selectedFeedstocks.length > 0 && selectedPhases.length > 0)))
        }
      >Start Assessment</button>
    </div>
  )
}