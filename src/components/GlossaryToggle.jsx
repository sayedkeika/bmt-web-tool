import React from 'react'
import BookIcon from '../svgs/book.svg'

export default function GlossaryToggle({ onClick }) {
  return (
    <button
      className='nav floating-button glossary-toggle'
      onClick={onClick}
    >
      <img src={BookIcon} className='icon'/>
      <span className='label'>Glossary</span>
    </button>
  )
}