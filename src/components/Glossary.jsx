import React, { useState, useEffect } from 'react'
import { glossary } from '../Data'
import DownArrowIcon from '../svgs/down-arrow.svg'
import UpArrowIcon from '../svgs/up-arrow.svg'

// Component for displaying list of terms with definitions and sources
const Glossary = ({ onBack }) => {
    // Local state for filters and active term
    const [expandedTerms, setExpandedTerms] = useState([])
    const [filterByTheme, setFilterByTheme] = useState('')
    const [filterByLetter, setFilterByLetter] = useState('')

    // Toggles expansion of a glossary term
    const handleTermClick = (term) => {
        setExpandedTerms(prev =>
          prev.includes(term)
            ? prev.filter(t => t !== term)
            : [...prev, term]
        )
    }

    // Toggles letter filter
    const handleLetterClick = (letter) => {
        setFilterByLetter(prevLetter => (prevLetter === letter ? '' : letter))
    }

    // Updates theme filter based on dropdown selection
    const handleThemeFilterChange = (event) => {
        setFilterByTheme(event.target.value)
    }

    // Derive filtered glossary entries based on theme and letter
    const filteredGlossary = glossary.filter((item) => {
        const firstChar = item.term[0].toUpperCase()
        const matchesTheme = filterByTheme ? item.theme === filterByTheme : true
        const matchesLetter = filterByLetter
        ? filterByLetter === '0-9'
            ? /^[0-9]/.test(firstChar)
            : firstChar === filterByLetter
        : true
        return matchesTheme && matchesLetter
    })

    const themes = [...new Set(glossary.map(item => item.theme))]
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    // Scroll to the top of the page
    useEffect(() => {
        window.scrollTo({ top: 0})
    }, [])
    
    return (
        <>
            <div className='header-container'>
                {/* Navigation header */}
                <div className='nav-header'>
                    <div className='nav-left'>
                        <button className='nav' onClick={onBack}>← Back</button>
                    </div>
                    <div className='nav-center'>
                        <h1>Glossary</h1>
                    </div>
                    <div className='nav-right'>
                        <div>
                            <label htmlFor='themeFilter'>Filter:</label>
                            <select id='themeFilter' value={filterByTheme} onChange={handleThemeFilterChange}>
                                <option value=''>All</option>
                                {themes.map((theme, index) => (
                                <option key={index} value={theme}>{theme}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Letter Filter */}
                <div className='letter-filter'>
                    <button
                    onClick={() => handleLetterClick('0-9')}
                    className={`letter-button ${filterByLetter === '0-9' ? 'active' : ''}`}
                    >
                    #
                    </button>

                    {alphabet.map(letter => (
                    <button
                        key={letter}
                        onClick={() => handleLetterClick(letter)}
                        className={`letter-button ${filterByLetter === letter ? 'active' : ''}`}
                    >
                        {letter}
                    </button>
                    ))}
                </div>
            </div>

            {/* Glossary List */}
            <div className='container'>
                {filteredGlossary.map((item,index) => (
                <div key={index} className='glossary-term'>
                    <div
                    className='glossary-header'
                    onClick={() => handleTermClick(item.term)}
                    >
                    <h3>{item.term}</h3>
                    <img
                        src={expandedTerms.includes(item.term)? UpArrowIcon: DownArrowIcon}
                        className='icon'
                        alt={expandedTerms.includes(item.term)? 'Collapse':'Expand'}
                    />
                    </div>
                    {expandedTerms.includes(item.term) && (
                    <div className='term-details' style={{ marginTop:'0.5rem' }}>
                        <h4>Definition</h4>
                        {item.definition.split('\n').map((line,i)=>(<p key={i}>{line}</p>))}
                        <h4>Reference</h4>
                        {item.references.map((ref,i)=>(
                        <p key={i}><a href={ref.url} target='_blank' rel='noopener noreferrer'>{ref.label}</a></p>
                        ))}
                    </div>
                    )}
                </div>
                ))}
            </div>
        </>
    )
}
export default Glossary