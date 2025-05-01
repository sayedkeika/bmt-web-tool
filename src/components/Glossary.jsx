import React, { useState } from 'react'
import { glossary } from '../Data'

// Component for displaying list of terms with definitions and sources
const Glossary = ({ onBack }) => {
    // Local state for filters and active term
    const [activeTerm, setActiveTerm] = useState(null)
    const [filterByTheme, setFilterByTheme] = useState('')
    const [filterByLetter, setFilterByLetter] = useState('')

    // Toggles expansion of a glossary term
    const handleTermClick = (term) => {
        setActiveTerm(prevTerm => (prevTerm === term ? null : term))
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

    return (
        <div className="container">
            {/* Navigation header */}
            <div className="nav-header">
                <div className='nav-left'>
                    <button onClick={onBack}>← Back</button>
                </div>
                <div className='nav-center'>
                    <h2>Glossary</h2>
                </div>
                <div className='nav-right'>
                    <div>
                        <label htmlFor="themeFilter">Filter:</label>
                        <select id="themeFilter" value={filterByTheme} onChange={handleThemeFilterChange}>
                            <option value="">All</option>
                            {themes.map((theme, index) => (
                            <option key={index} value={theme}>{theme}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Letter Filter */}
            <div style={{ marginBottom: '1rem' }}>
                <button
                onClick={() => handleLetterClick('0-9')}
                className={`letter-button ${filterByLetter === '0-9' ? 'active' : ''}`}
                >
                0-9
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

            {/* Glossary List */}
            <div>
                {filteredGlossary.map((item, index) => (
                <div key={index} style={{ marginBottom: '1rem' }}>
                    <div
                    className="glossary-term"
                    onClick={() => handleTermClick(item)}
                    >
                    <h3>{item.term}</h3>
                    {activeTerm && activeTerm.term === item.term && (
                        <div className="term-details">
                        <p><strong>Definition:</strong></p>
                        {item.definition.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                        ))}
                        <div>
                            <h4>References</h4>
                            {item.references.map((ref, refIndex) => (
                            <p key={refIndex}>
                                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                                {ref.label}
                                </a>
                            </p>
                            ))}
                        </div>
                        </div>
                    )}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
export default Glossary
