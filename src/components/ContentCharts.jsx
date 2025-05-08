import React, { useMemo } from 'react'
import { assessments } from '../Data'
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'

const LEVELS = ['Mandatory', 'Basic', 'Advanced']

const LEVEL_COLORS = {
  Mandatory: '#8884d8',
  Basic:     '#82ca9d',
  Advanced:  '#ffc658'
}

// Computes scores per category and per principle based on answers
const computeContentScores = (answers, categories) => {
  const scoreByCategory = {}
  const principleScores = {}

  categories.forEach(cat => {
    // Handle Minimum Backstop separately
    if (cat.category === 'Minimum Backstop') return

    // Initialize score tracking for this category
    if (!scoreByCategory[cat.category]) {
      scoreByCategory[cat.category] = {
        Mandatory: { met: 0, total: 0 },
        Basic: { met: 0, total: 0 },
        Advanced: { met: 0, total: 0 }
      }
    }

    // Initialize score tracking for this principle
    cat.principles.forEach(principle => {
      if (!principleScores[cat.category]) principleScores[cat.category] = {}
      if (!principleScores[cat.category][principle.title]) {
        principleScores[cat.category][principle.title] = {
          Mandatory: { met: 0, total: 0 },
          Basic: { met: 0, total: 0 },
          Advanced: { met: 0, total: 0 }
        }
      }

      // For each criterion within the principle
      principle.criteria.forEach(criterion => {
        criterion.requirements.forEach(req => {
          const level = req.level
          // Only score if level is recognized
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

  // Transform into pie
  const pieDataByCategory = Object.fromEntries(
    Object.entries(scoreByCategory).map(([category, levels]) => [
      category,
      LEVELS.map(level => {
        const { met, total } = levels[level]
        return {
          level,
          data: [
            { name: 'Requirements met', value: met },
            { name: 'Requirements unmet', value: total - met }
          ]
        }
      })
    ])
  )

  // Transform into bar
  const principleBarData = []
    Object.entries(principleScores).forEach(([category, principles]) => {
      Object.entries(principles).forEach(([title, levels]) => {
        const metM = levels.Mandatory.met,   totM = levels.Mandatory.total
        const metB = levels.Basic.met,       totB = levels.Basic.total
        const metA = levels.Advanced.met,    totA = levels.Advanced.total

        principleBarData.push({
          category,
          principle: title,
          Mandatory: totM > 0 ? (metM / totM) * 100 : 0,
          Basic:     totB > 0 ? (metB / totB) * 100 : 0,
          Advanced:  totA > 0 ? (metA / totA) * 100 : 0
        })
      })
    })

  return { scoreByCategory, principleScores, pieDataByCategory, principleBarData }
}

// Component for displaying visual results for content-level scores
export default function ContentCharts({ answers, categories }) {
  const { scoreByCategory, principleScores, pieDataByCategory, principleBarData } = useMemo(() => computeContentScores(answers, categories), [answers, categories])

  const minimumBackstopCategory = assessments['content']?.find(cat => cat.category === 'Minimum Backstop')

  return (
    <div>
      <h2>Content-Level</h2>

      {/* Pie Charts Section */}
      <section className='dashboard-section'>
        <h3>Average Score Per Category</h3>
        
        {/* Minimum Backstop */}
        {minimumBackstopCategory && (
          <section className='dashboard-section'>
            <div className='chart-grid'>
              {minimumBackstopCategory.principles.map(principle => {
                const reqs = principle.criteria.flatMap(c => c.requirements)
                const total = reqs.length
                const met = reqs.reduce(
                  (sum, req) => sum + (answers[req.id]?.response === 'Yes' ? 1 : 0),
                  0
                )
                const data = [
                  { name: 'Requirements met', value: met },
                  { name: 'Requirements unmet', value: total - met }
                ]
                const percent = total > 0 ? Math.round((met / total) * 100) : 0

                return (
                  <div className='chart-card' key={principle.id}>
                    <h4>{principle.title}</h4>
                    <ResponsiveContainer width='100%' height={150}>
                      <PieChart>
                        <Pie
                          data={data}
                          dataKey='value'
                          cx='50%'
                          cy='50%'
                          innerRadius={40}
                          outerRadius={60}
                          startAngle={90}
                          endAngle={-270}
                          paddingAngle={0}
                          stroke='none'
                        >
                          <Cell fill={LEVEL_COLORS.Mandatory} />
                          <Cell fill='#e0e0e0' />
                        </Pie>
                        <Tooltip formatter={(value) => `${value}`} />
                        <text
                          x='50%'
                          y='50%'
                          fill='#000'
                          textAnchor='middle'
                          dominantBaseline='middle'
                          style={{ fontSize: '1rem', fontWeight: 600 }}
                        >
                          {percent + '%'}
                        </text>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        <div className='chart-grid'>
          {Object.entries(pieDataByCategory).map(([category, pies]) => (
            <div className='chart-card' key={category}>
              <h4>{category}</h4>
              <div className='pie-grid'>
                {pies.map(({ level, data }) => {
                  const met = data[0].value
                  const total = met + data[1].value
                  const percent = total > 0 ? Math.round((met / total) * 100) : 0

                  return (
                    <div key={level} style={{ flex: 1, textAlign: 'center' }}>
                      <h5>{level}</h5>
                      <ResponsiveContainer width='100%' height={120}>
                        <PieChart>
                          <Pie
                            data={data}
                            dataKey='value'
                            cx='50%'
                            cy='50%'
                            innerRadius={40}
                            outerRadius={60}
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={0}
                            stroke='none'
                          >
                            <Cell fill={LEVEL_COLORS[level]} />
                            <Cell fill='#e0e0e0' />
                          </Pie>
                          <Tooltip
                            formatter={(value) => `${value}`}
                          />
                          <text
                            x='50%'
                            y='50%'
                            fill='#000'
                            textAnchor='middle'
                            dominantBaseline='middle'
                            style={{ fontSize: '1rem', fontWeight: 600 }}
                          >
                            {percent + '%'}
                          </text>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content-Level Assessment Table */}
      <table className='content-table'>
        <thead>
          <tr>
            <th rowSpan='2'>Category</th>
            <th colSpan='3'>Fraction of applicable requirements covered</th>
          </tr>
          <tr>
            {LEVELS.map(level => <th key={level}>{level}</th>)}
          </tr>
        </thead>
        <tbody>
          {Object.entries(scoreByCategory).map(([category, levels]) => (
            <tr key={category}>
              <td>{category}</td>
              {LEVELS.map(level => {
                const { met, total } = levels[level]
                return (
                  <td key={level}>
                    {`${met}/${total}`}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Average Score Per Principle</h3>

      <section className='dashboard-section'>
        <ResponsiveContainer
          width='100%'
          height={Math.max(principleBarData.length * 50 + 80, 600)}
        >
          <BarChart
            data={principleBarData}
            layout='vertical'
            margin={{ left: 200, top: 20, right: 20, bottom: 20 }}
            barCategoryGap='20%'
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              type='number'
              domain={[0, 100]}
              tickFormatter={v => `${v.toFixed(0)}%`}
            />
            <YAxis
              dataKey='principle'
              type='category'
              width={200}
              tick={{ fontSize: 14 }}
            />
            <Tooltip formatter={v => `${v.toFixed(0)}%`} />
            <Legend />
            <Bar
              dataKey='Mandatory'
              fill='#8884d8'
              name='Mandatory'
              barSize={20}
            />
            <Bar
              dataKey='Basic'
              fill='#82ca9d'
              name='Basic'
              barSize={20}
            />
            <Bar
              dataKey='Advanced'
              fill='#ffc658'
              name='Advanced'
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Principle-Level Tables */}
      {Object.entries(principleScores).map(([category, principles]) => (
        <div key={category}>
          <h4>{category}</h4>
          <table className='content-table'>
            <thead>
              <tr>
                <th rowSpan='2'>Principle</th>
                <th colSpan='3'>Fraction of applicable requirements covered</th>
              </tr>
              <tr>
                {LEVELS.map(level => <th key={level}>{level}</th>)}
              </tr>
            </thead>
            <tbody>
              {Object.entries(principles).map(([title, levels]) => (
                <tr key={title}>
                  <td>{title}</td>
                  {LEVELS.map(level => {
                    const { met, total } = levels[level]
                    return (
                      <td key={level}>
                        {`${met}/${total}`}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}