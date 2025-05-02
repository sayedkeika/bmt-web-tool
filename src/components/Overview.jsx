import React, { useState, useEffect } from 'react'
import DownArrowIcon from '../svgs/down-arrow.svg'
import UpArrowIcon from '../svgs/up-arrow.svg'

// Map assessment types
const TYPE_LABELS = {
  system: 'System-Level Assessment',
  content: 'Content-Level Assessment',
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

  const [expandedTypes, setExpandedTypes] = useState({})
  const [expandedCategories, setExpandedCategories] = useState({})

  // Expand all types and their categories by default or when assessment types/map change
  useEffect(() => {
    const typesExpanded = {}
    const categoriesExpanded = {}
    selectedTypes.forEach(type => {
      typesExpanded[type] = true
      const categories = assessmentMap[type] || []
      categories.forEach(cat => {
        categoriesExpanded[cat.id] = true
      })
    })
    setExpandedTypes(typesExpanded)
    setExpandedCategories(categoriesExpanded)
  }, [selectedTypes, assessmentMap])

  // Toggle expanded state for a type
  const toggleType = (type) => {
    setExpandedTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

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
    <div className="container">
      {/* Top navigation with restart and submit buttons */}
      <div className="nav-header">
        <div className='nav-left'>
          <button onClick={onRestart}>← Start New Assessment</button>
        </div>
        <div className='nav-center'>
          <h1>Overview</h1>
        </div>
        <div className='nav-right'>
          <button onClick={onSubmit} disabled={!isComplete} title={!isComplete ? 'Please complete all criteria before submitting.' : ''}>Submit →</button>
        </div>
      </div>

      {/* Render each selected assessment type and its categories */}
      {selectedTypes.map(type => (
        <div key={type}>
          <div
            className="type-header"
            onClick={() => toggleType(type)}
            style={{ cursor: 'pointer', userSelect: 'none', display: 'flex', alignItems: 'center' }}
          >
            <span>{TYPE_LABELS[type]}</span>
            <img
              src={expandedTypes[type] ? UpArrowIcon : DownArrowIcon}
              className="icon"
              alt={expandedTypes[type] ? 'Collapse' : 'Expand'}
              style={{ marginLeft: 'auto' }}
            />
          </div>

          {/* Render categories only if this type is expanded */}
          {expandedTypes[type] && (
            assessmentMap[type]?.map(category => (
              <div key={category.id} className="category-box">
                <div
                  className="category-header"
                  onClick={() => toggleCategory(category.id)}
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                  <span>{category.category}</span>
                  <img
                    src={expandedCategories[category.id] ? UpArrowIcon : DownArrowIcon}
                    className="icon"
                    alt={expandedCategories[category.id] ? 'Collapse' : 'Expand'}
                    style={{ marginLeft: 'auto' }}
                  />
                </div>

                {/* Render principles in this category if expanded */}
                {expandedCategories[category.id] && (
                  <div className="principle-list">
                    {category.principles.map(principle => (
                      <div
                        key={principle.id}
                        className="principle-nav-block"
                        onClick={() => onSelectPrinciple(principle.id)}
                      >
                        <div className="principle-label">{principle.title}</div>
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
            ))
          )}
        </div>
      ))}
    </div>
  )
}