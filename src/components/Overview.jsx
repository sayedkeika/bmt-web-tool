// Progress Overview
import React, { useState, useEffect } from 'react'
import '../styles/AssessmentLayout.css';

// Map assessment types
const TYPE_LABELS = {
  system: 'System-Level Assessment',
  content: 'Content-Level Assessment',
  outcome: 'Outcome-Level Assessment'
}

// UI component for showing graphical overview of assessment progress
export default function Overview({
  selectedTypes,
  assessmentMap,
  answers,
  onSelectPrinciple,
  onRestart,
  onSubmit 
}) {

  const [expandedCategories, setExpandedCategories] = useState({})

  // Expand all categories by default or when assessment types/map change
  useEffect(() => {
    const initiallyExpanded = {}
    selectedTypes.forEach(type => {
      const categories = assessmentMap[type] || []
      categories.forEach(cat => {
        initiallyExpanded[cat.id] = true
      })
    })
    setExpandedCategories(initiallyExpanded)
  }, [selectedTypes, assessmentMap])

  // Toggle expanded state for a category
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }))
  }

  // Calculate overall progress of answered criteria
  const { totalCriteria, totalAnswered } = selectedTypes.reduce(
    (acc, type) => {
      const categories = assessmentMap[type] || []
      categories.forEach(cat => {
        cat.principles.forEach(principle => {
          principle.criteria.forEach(c => {
            acc.totalCriteria++
            if (answers[c.id]?.response) acc.totalAnswered++
          })
        })
      })
      return acc
    },
    { totalCriteria: 0, totalAnswered: 0 }
  )

  // Check if assessment is ready for submission
  const isComplete = totalAnswered === totalCriteria

  return (
    <div className="overview-container">
      {/* Top navigation with restart and submit buttons */}
      <div className="nav-header">
        <button onClick={onRestart}>← Start New Assessment</button>
        <h1>Assessment Overview</h1>
        <button onClick={onSubmit} disabled={!isComplete} title={!isComplete ? 'Please complete all criteria to submit.' : ''}>Submit Now</button>
      </div>

      {/* Render each selected assessment type and its categories */}
      {selectedTypes.map(type => (
        <div key={type} className="type-block">
          <div className="type-header">{TYPE_LABELS[type]}</div>

          {/* Render categories within the current type */}
          {assessmentMap[type]?.map(category => (
            <div key={category.id} className="category-box">
              {/* Category header with expand/collapse control */}
              <div
                className="category-header"
                onClick={() => toggleCategory(category.id)}
              >
                <span>{category.category}</span>
                <span>{expandedCategories[category.id] ? '▲' : '▼'}</span>
              </div>

              {/* Render principles in this category */}
              {expandedCategories[category.id] && (
                <div className="principle-list">
                  {category.principles.map(principle => (
                    <div
                      key={principle.id}
                      className="principle-nav-block"
                      onClick={() => onSelectPrinciple(principle.id)}
                    >
                      <div className="principle-label">{principle.title}</div>
                      {/* Criteria progress */}
                      <div className="criteria-nav">
                        {principle.criteria.map(c => (
                          <div
                            key={c.id}
                            className={`criteria-box ${answers[c.id]?.response ? 'answered' : 'unanswered'}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}