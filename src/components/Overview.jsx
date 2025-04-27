import React, { useState, useEffect } from 'react'

// Map assessment types
const TYPE_LABELS = {
  system: 'System-Level Assessment',
  content: 'Content-Level Assessment',
  outcome: 'Outcome-Level Assessment'
}

// Component for showing graphical overview of assessment progress
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

  // Calculate overall progress of answered criteria/requirements
  const { totalCriteria, totalAnswered } = selectedTypes.reduce(
    (acc, type) => {
      const categories = assessmentMap[type] || []
      categories.forEach(cat => {
        cat.principles.forEach(principle => {
          if (type === 'system') {
            // For system-type, check if the response exists directly in the criterion
            principle.criteria.forEach(c => {
              acc.totalCriteria++
              if (answers[c.id]?.response) acc.totalAnswered++
            })
          } else if (type === 'content') {
            // For content-type, check responses inside requirements
            principle.criteria.forEach(c => {
              c.requirements.forEach(req => {
                acc.totalCriteria++
                if (answers[req.id]?.response) acc.totalAnswered++
              })
            })
          }
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
                        {principle.criteria.map(c => {
                          if (type === 'system') {
                            return (
                              <div
                                key={c.id}
                                className={`criteria-box ${answers[c.id]?.response ? 'answered' : 'unanswered'}`}
                              />
                            )
                          } else if (type === 'content') {
                            return c.requirements.map(req => (
                              <div
                                key={req.id}
                                className={`criteria-box ${answers[req.id]?.response ? 'answered' : 'unanswered'}`}
                              />
                            ))
                          }
                          return null
                        })}
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
