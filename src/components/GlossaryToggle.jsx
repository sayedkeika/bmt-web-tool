import React from 'react'

export default function GlossaryToggle({ onClick }) {
  return (
    <button
      className='nav floating-button glossary-toggle'
      onClick={onClick}
    >
      <span className='label'>Glossary</span>
    </button>
  )
}