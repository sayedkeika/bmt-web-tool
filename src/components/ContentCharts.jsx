// Content Level Score and Charts
import React, { useMemo } from 'react'
import { assessments } from '../Data'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'

const LEVELS = ['Mandatory', 'Basic', 'Advanced']

const formatPercent = ({ met, total }) =>
  total > 0 ? `${((met / total) * 100).toFixed(0)}%` : '–'

const getColorClass = ({ met, total }) => {
  if (total === 0) return ''
  const percentage = (met / total) * 100
  if (percentage >= 80) return 'cell-green'
  if (percentage >= 60) return 'cell-light-green'
  if (percentage >= 40) return 'cell-yellow'
  if (percentage >= 20) return 'cell-orange'
  return 'cell-red'
}

const computeContentScores = (answers) => {
  const scoreByCategory = {}
  const principleScores = {}

  const categories = assessments['content'] || []

  categories.forEach(cat => {
    if (!scoreByCategory[cat.category]) {
      scoreByCategory[cat.category] = {
        Mandatory: { met: 0, total: 0 },
        Basic: { met: 0, total: 0 },
        Advanced: { met: 0, total: 0 }
      }
    }

    cat.principles.forEach(principle => {
      if (!principleScores[cat.category]) principleScores[cat.category] = {}
      if (!principleScores[cat.category][principle.title]) {
        principleScores[cat.category][principle.title] = {
          Mandatory: { met: 0, total: 0 },
          Basic: { met: 0, total: 0 },
          Advanced: { met: 0, total: 0 }
        }
      }

      principle.criteria.forEach(criterion => {
        criterion.requirements.forEach(req => {
          const level = req.level
          if (LEVELS.includes(level)) {
            scoreByCategory[cat.category][level].total++
            principleScores[cat.category][principle.title][level].total++
            const a = answers[req.id]
            if (a?.response === 'Yes') {
              scoreByCategory[cat.category][level].met++
              principleScores[cat.category][principle.title][level].met++
            }
          }
        })
      })
    })
  })

  return { scoreByCategory, principleScores }
}

export default function ContentCharts({ answers }) {
  const { scoreByCategory, principleScores } = useMemo(() => computeContentScores(answers), [answers])

  // Transform into grouped bar dataset
  const groupedBarData = Object.entries(scoreByCategory).map(([category, levels]) => {
    const entry = { category }
    LEVELS.forEach(level => {
      const { met, total } = levels[level]
      entry[level] = total > 0 ? (met / total) * 100 : 0
    })
    return entry
  })

  return (
    <div className="content">
      <h2>Content-Level Assessment</h2>

      <table className="content-table">
        <thead>
          <tr>
            <th rowSpan="2">Category</th>
            <th colSpan="3">% of Requirements Met</th>
          </tr>
          <tr>
            {LEVELS.map(level => <th key={level}>{level}</th>)}
          </tr>
        </thead>
        <tbody>
          {Object.entries(scoreByCategory).map(([category, levels]) => (
            <tr key={category}>
              <td>{category}</td>
              {LEVELS.map(level => (
                <td key={level} className={getColorClass(levels[level])}>{formatPercent(levels[level])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ height: 400, marginTop: '2rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={groupedBarData}
            barCategoryGap={40}
            barGap={8}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" tick={{ fontSize: 16 }} />
            <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
            <Tooltip formatter={(val) => `${val.toFixed(0)}%`} />
            <Legend />
            <Bar dataKey="Mandatory" fill="#d32f2f" name="Mandatory" barSize={40} />
            <Bar dataKey="Basic" fill="#1976d2" name="Basic" barSize={40} />
            <Bar dataKey="Advanced" fill="#388e3c" name="Advanced" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {Object.entries(principleScores).map(([category, principles]) => (
        <div key={category} style={{ marginTop: '2rem' }}>
          <h3>{category}</h3>
          <table className="content-table">
            <thead>
              <tr>
                <th rowSpan="2">Principle</th>
                <th colSpan="3">% of Requirements Met</th>
              </tr>
              <tr>
                {LEVELS.map(level => <th key={level}>{level}</th>)}
              </tr>
            </thead>
            <tbody>
              {Object.entries(principles).map(([title, levels]) => (
                <tr key={title}>
                  <td>{title}</td>
                  {LEVELS.map(level => (
                    <td key={level} className={getColorClass(levels[level])}>{formatPercent(levels[level])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}