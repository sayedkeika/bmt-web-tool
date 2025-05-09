import React, { useState, useEffect } from 'react'
import UpArrowIcon from '../svgs/up-arrow2.svg'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      className='nav scroll-to-top'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      title='Scroll to the top of the page'
    >
      <img src={UpArrowIcon} alt='Scroll to top' style={{ filter: 'brightness(0) invert(1)' }}/>
    </button>
  )
}