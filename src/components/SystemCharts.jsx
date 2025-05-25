import React, { useMemo } from 'react'
import { assessments } from '../Data'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts'

// Formats a numeric value as a percentage string
const formatPercent = v => `${v.toFixed(0)}%`

// Computes data structures required for system‐level charts (Radar and Bar)
const computeSystemScores = (answers, categories) => {
  const allPrinciplesChart = []
  const barChartData = []

  categories.forEach(cat => {
    let categoryScoreTotal = 0
    let categoryMaxTotal = 0

    cat.principles.forEach(principle => {
      // only count those criteria that remain after filtering
      const answeredCriteria = principle.criteria.filter(item => {
        const a = answers[item.id]?.response
        const opt = item.responseOptions?.find(o => o.label === a)
        return opt?.score != null
      })

      if (!answeredCriteria.length) return

      // compute avg % for this principle
      const percentages = answeredCriteria.map(item => {
        const match = item.responseOptions.find(o => o.label === answers[item.id]?.response)
        const score = match?.score ?? 0
        const maxScore = Math.max(...item.responseOptions.map(o => o.score ?? 0))
        return (score / maxScore) * 100
      })
      const principlePct = percentages.reduce((s, p) => s + p, 0) / percentages.length

      allPrinciplesChart.push({
        principle: principle.title,
        score: principlePct
      })

      categoryScoreTotal += principlePct
      categoryMaxTotal += 100
    })

    if (categoryMaxTotal > 0) {
      barChartData.push({
        category: cat.category,
        score: (categoryScoreTotal / categoryMaxTotal) * 100
      })
    }
  })

  return { allPrinciplesChart, barChartData }
}

// Component for displaying visual results for system-level scores
export default function SystemCharts({ answers, categories }) {
  // Compute chart data once per change in answers
  const { allPrinciplesChart, barChartData } = useMemo(() => computeSystemScores(answers, categories), [answers, categories])

  return (
    <div>
      <h3>System-Level</h3>

      <section className='dashboard-section'>
        {allPrinciplesChart.length > 0 && (
          <div>
            <h4>Score Per Principle</h4>
            <ResponsiveContainer width='100%' height={600}>
              <RadarChart data={allPrinciplesChart}>
                <PolarGrid />
                <PolarAngleAxis dataKey='principle' tick={{ fontSize: 15 }} />
                <PolarRadiusAxis
                  domain={[0, 100]}
                  tickFormatter={formatPercent}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip formatter={formatPercent} />
                <Legend />
                <Radar
                  name='Average Score (in %)'
                  dataKey='score'
                  stroke='#8884d8'
                  fill='#8884d8'
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>
      <section className='dashboard-section'>
        {barChartData.length > 0 && (
          <div>
            <h4>Score Per Category</h4>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart
                data={barChartData}
                layout='vertical'
                margin={{ left: 20, right: 20 }}
              >
                <XAxis
                  type='number'
                  domain={[0, 100]}
                  tickFormatter={formatPercent}
                />
                <YAxis
                  dataKey='category'
                  type='category'
                  tick={{ fontSize: 15 }}
                  width={140}
                />
                <Tooltip formatter={formatPercent} />
                <Legend />
                <Bar
                dataKey='score'
                fill='#8884d8'
                name='Average Score (in %)'
                barSize={45}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>
      
    </div>
  )
}