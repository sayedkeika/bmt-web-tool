import React, { useMemo } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell, CartesianGrid } from 'recharts'

const RESPONSES = ['Fully', 'Partly', 'Missing', 'Not Applicable']

const COLORS = {
  Fully:           '#0077b2',
  Partly:          '#66b5dc',
  Missing:         '#cce6f3',
  'Not Applicable':'#cccccc'
}

// Requirements to exclude
const ADD_ON_IDS = new Set(['Add-on-A-1', 'Add-on-C-2'])

// Component for displaying visual results for outcome-level scores
export default function OutcomeCharts({ answers, categories }) {
  const data = useMemo(() => {
    const rows = []

    categories.forEach(cat => {
      cat.principles.forEach(pr => {
        pr.criteria.forEach(cr => {
          const counts = { Fully:0, Partly:0, Missing:0, 'Not Applicable':0 }
          let total = 0

          cr.requirements
            .filter(r => !ADD_ON_IDS.has(r.id))
            .forEach(r => {
              total++
              const resp = answers[r.id]?.response
              const label = resp == null ? 'Not Applicable' : resp
              if (counts[label] != null) counts[label]++
            })

          if (total === 0) return

          const row = { criterion: `${cr.id}: ${cr.text}` }
          RESPONSES.forEach(label => {
            row[label] = Math.round((counts[label] / total) * 100)
          })
          rows.push(row)
        })
      })
    })

    return rows
  }, [answers, categories])

  const chartHeight = data.length * 40 + 300

  return (
    <div className='dashboard-section'>
      <h3>Outcome Level</h3>
      <h4>Score Per Criterion</h4>
      <ResponsiveContainer width='100%' height={chartHeight}>
        <BarChart
          data={data}
          layout='vertical'
          margin={{ top: 20, right: 20, bottom: 20, left: 10 }}
          barCategoryGap='20%'
        >
          <CartesianGrid strokeDasharray='3 3' horizontal={false} />

          <XAxis
            type='number'
            domain={[0, 100]}
            tickFormatter={v => `${v}%`}
            ticks={[0, 20, 40, 60, 80, 100]}
          />
          <YAxis
            dataKey='criterion'
            type='category'
            width={450}
            tick={{ fontSize: 14 }}
          />
          <Tooltip formatter={(value, name) => [`${value}%`, name]} />
          <Legend />
          {RESPONSES.map(label => (
            <Bar
              key={label}
              dataKey={label}
              stackId='a'
              fill={COLORS[label]}
              name={label}
              barSize={35}
            >
              {data.map((_, idx) => (
                <Cell key={idx} fill={COLORS[label]} />
              ))}
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
