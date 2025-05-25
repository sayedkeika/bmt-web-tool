import React, { useMemo } from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'

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
    // Initialize score tracking for this category
    if (!scoreByCategory[cat.category]) {
      scoreByCategory[cat.category] = {
        Mandatory: { met: 0, total: 0 },
        Basic:     { met: 0, total: 0 },
        Advanced:  { met: 0, total: 0 }
      }
    }

    // Initialize score tracking for this principle
    cat.principles.forEach(principle => {
      if (!principleScores[cat.category]) principleScores[cat.category] = {}
      if (!principleScores[cat.category][principle.title]) {
        principleScores[cat.category][principle.title] = {
          Mandatory: { met: 0, total: 0 },
          Basic:     { met: 0, total: 0 },
          Advanced:  { met: 0, total: 0 }
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
   const principleBarData = Object.fromEntries(
    Object.entries(principleScores).map(([category, principles]) => [
      category,
      Object.entries(principles).map(([title, levels]) => {
        return LEVELS.reduce((acc, level) => {
          const { met, total } = levels[level]
          acc.principle = title
          acc[`${level}Percent`] = total > 0 ? (met / total) * 100 : null
          acc[`${level}Total`]   = total
          return acc
        }, {})
      })
    ])
  )

  return { scoreByCategory, principleScores, pieDataByCategory, principleBarData }
}

// Component for displaying visual results for content-level scores
export default function ContentCharts({ answers, categories }) {
  const { scoreByCategory, principleScores, pieDataByCategory, principleBarData } =
    useMemo(() => computeContentScores(answers, categories), [answers, categories])

  return (
    <div>
      <h3>Content-Level</h3>

      {/* Per Category Section */}
      <section className='dashboard-section'>
        <h4>Score Per Category</h4>

        {/* Per Category Table */}
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
                    <td key={level}>{`${met}/${total}`}</td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Per Category Pie Charts */}
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
            </div>
          ))}
        </div>
      </section>

      {/* Per Principle Section */}
      <h4>Score Per Principle</h4>

      {Object.entries(principleScores).map(([category, principles]) => {
        const data = principleBarData[category]
        const BAR_SIZE = 45
        const BAR_GAP = 40
        const PADDING = 70
        const height = data.length * (BAR_SIZE + BAR_GAP) + PADDING

        return (
          <section key={category} className='dashboard-section'>
            <h5>{category}</h5>

            {/* Tables */}
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
                        <td key={level}>{`${met}/${total}`}</td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Bar Charts */}
            <ResponsiveContainer width='100%' height={height}>
              <BarChart
                data={data}
                layout='vertical'
                margin={{ left:20, top:20, right:50, bottom:20 }}
                barCategoryGap={`${BAR_GAP}px`}
              >
                <XAxis type='number' domain={[0,100]} tickFormatter={v => `${v.toFixed(0)}%`} />
                <YAxis dataKey='principle' type='category' width={140} tick={{ fontSize:15 }} />
                <Tooltip
                  formatter={(value,name,{payload}) =>
                    payload[`${name}Total`] === 0
                      ? ['Not Applicable', name]
                      : [`${value.toFixed(0)}%`, name]
                  }
                />
                <Legend />
                {LEVELS.map(lvl => (
                  <Bar
                    key={lvl}
                    dataKey={`${lvl}Percent`}
                    name={lvl}
                    barSize={BAR_SIZE}
                    fill={LEVEL_COLORS[lvl]}
                    label={{
                      position: 'right',
                      fill: LEVEL_COLORS[lvl], 
                      formatter: value => `${value.toFixed(0)}%`
                    }}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </section>
        )
      })}
    </div>
  )
}