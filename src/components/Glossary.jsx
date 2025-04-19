// Glossary Page
import React, { useState } from 'react'
import { glossary } from '../Data'

const Glossary = ({ onBack }) => {
    const [activeTerm, setActiveTerm] = useState(null)
    const [filterByTheme, setFilterByTheme] = useState('')
    const [filterByLetter, setFilterByLetter] = useState('')

    const handleTermClick = (term) => {
        setActiveTerm(prevTerm => (prevTerm === term ? null : term))
    };

    const handleLetterClick = (letter) => {
        setFilterByLetter(prevLetter => (prevLetter === letter ? '' : letter))
    };

    const handleThemeFilterChange = (event) => {
        setFilterByTheme(event.target.value)
    };

    const filteredGlossary = glossary.filter((item) => {
        const firstChar = item.term[0].toUpperCase()
        const matchesTheme = filterByTheme ? item.theme === filterByTheme : true;
        const matchesLetter = filterByLetter
        ? filterByLetter === '0-9'
            ? /^[0-9]/.test(firstChar)
            : firstChar === filterByLetter
        : true;
        return matchesTheme && matchesLetter
    });

    const themes = [...new Set(glossary.map(item => item.theme))]
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    return (
        <div className="container">
            <div className="nav-header">
                <button onClick={onBack} className="back-button">← Back</button>
                <h2>Glossary</h2>
                <div className="theme-filter">
                <label htmlFor="themeFilter">Filter:</label>
                <select id="themeFilter" value={filterByTheme} onChange={handleThemeFilterChange}>
                    <option value="">All Themes</option>
                    {themes.map((theme, index) => (
                    <option key={index} value={theme}>{theme}</option>
                    ))}
                </select>
                </div>
            </div>

            {/* Letter Filter */}
            <div className="letter-buttons">
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
            <div className="glossary-container">
                {filteredGlossary.map((item, index) => (
                <div key={index} className="glossary-entry">
                    <div
                    className="glossary-term"
                    onClick={() => handleTermClick(item)}
                    >
                    <h3>{item.term}</h3>
                    {activeTerm && activeTerm.term === item.term && (
                        <div className="term-details">
                        <p><strong>Definition:</strong> {item.definition}</p>
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

export default Glossary;
