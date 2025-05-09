import React from 'react'
import BookIcon from '../svgs/book.svg'

export default function GlossaryToggle({ onClick }) {
  return (
    <button
      className='nav glossary-toggle'
      onClick={onClick}
      title='Go to glossary'
    >
      <img src={BookIcon} alt='Open Glossary' style={{ filter: 'brightness(0) invert(1)' }}/>
    </button>
  )
}