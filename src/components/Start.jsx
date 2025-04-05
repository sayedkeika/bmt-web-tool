import React, { useState } from 'react'

// Define assessment types for selection
const TYPES = [
  { key: 'system', label: 'System-Level Assessment' },
  { key: 'content', label: 'Content-Level Assessment' },
  { key: 'outcome', label: 'Outcome-Level Assessment' }
]

// UI component for selecting and starting assessment types
export default function Start({ onStart }) {
  const [selected, setSelected] = useState([])

  // Toggle selection state
  const toggleSelection = (key) => { setSelected(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key])}

  //Trigger start
  const handleStart = () => {
    if (selected.length > 0) {
      onStart(selected)
    }
  }

  return (
    <div className="container">
      <h1>Select Assessment Types</h1>
      <div className="types">
        {/* Render buttons */}
        {TYPES.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => toggleSelection(key)}
            className={selected.includes(key) ? 'selected' : ''}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Start enabled if at least one type is selected */}
      <button onClick={handleStart} disabled={!selected.length}>Start Assessment</button>
    </div>
  )
}
