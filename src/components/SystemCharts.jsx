import React, { useMemo } from 'react'
import { assessments } from '../Data'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

const formatPercent = (v) => `${v.toFixed(0)}%`

const computeSystemCharts = (answers) => {
  const chartsByType = {}
  const allPrinciplesChart = {}
  const barChartByType = {}

  const type = 'system'
  const categories = assessments[type] || []
  const chartCategories = {}
  const barChartData = {}

  categories.forEach(cat => {
    let categoryScoreTotal = 0
    let categoryMaxTotal = 0

    cat.principles.forEach(principle => {
      const items = principle.criteria
      const answeredCriteria = items.filter(item => {
        const answer = answers[item.id]
        const matched = answer?.response && item.responseOptions?.find(o => o.label === answer.response)
        return matched?.score !== undefined
      })

      if (answeredCriteria.length > 0) {
        const percentages = answeredCriteria.map(item => {
          const matched = item.responseOptions.find(o => o.label === answers[item.id]?.response)
          const score = matched?.score ?? 0
          const maxScore = Math.max(...item.responseOptions.map(o => o.score ?? 0))
          return (score / maxScore) * 100
        })

        const principlePercentage = percentages.reduce((sum, p) => sum + p, 0) / percentages.length

        categoryScoreTotal += principlePercentage
        categoryMaxTotal += 100

        if (!chartCategories[cat.category]) chartCategories[cat.category] = []
        chartCategories[cat.category].push({ principle: principle.title, score: principlePercentage })

        if (!allPrinciplesChart[type]) allPrinciplesChart[type] = []
        allPrinciplesChart[type].push({ principle: principle.title, score: principlePercentage })
      }
    })

    if (categoryMaxTotal > 0) {
      barChartData[cat.category] = {
        category: cat.category,
        score: (categoryScoreTotal / categoryMaxTotal) * 100
      }
    }
  })

  chartsByType[type] = chartCategories
  barChartByType[type] = Object.values(barChartData)

  return { allPrinciplesChart, barChartByType, chartsByType }
}

const ChartSection = ({ title, children }) => (
  <div style={{ marginBottom: '3rem' }}>
    <h3>{title}</h3>
    {children}
  </div>
)

const RadarChartWrapper = ({ data }) => (
  <ResponsiveContainer width="100%" height={500}>
    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="principle" tick={{ fontSize: 14 }} />
      <PolarRadiusAxis domain={[0, 100]} tickFormatter={formatPercent} axisLine={false} tickLine={false} />
      <Tooltip formatter={formatPercent} />
      <Radar name="Score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  </ResponsiveContainer>
)

const BarChartWrapper = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data} layout="vertical" margin={{ left: 50, right: 30 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[0, 100]} tickFormatter={formatPercent} />
      <YAxis dataKey="category" type="category" tick={{ fontSize: 14 }} width={150} />
      <Tooltip formatter={formatPercent} />
      <Legend />
      <Bar dataKey="score" fill="#8884d8" name="Score (%)" />
    </BarChart>
  </ResponsiveContainer>
)

export default function SystemCharts({ answers }) {
  const { allPrinciplesChart, barChartByType, chartsByType } = useMemo(() => computeSystemCharts(answers), [answers])

  return (
    <section className="section-box">
      <h2>System-Level Assessment</h2>

      {allPrinciplesChart.system?.length > 0 && (
        <ChartSection title="All Principles Overview">
          <RadarChartWrapper data={allPrinciplesChart.system} />
        </ChartSection>
      )}

      {barChartByType.system?.length > 0 && (
        <ChartSection title="Category Score Overview">
          <BarChartWrapper data={barChartByType.system} />
        </ChartSection>
      )}

      {Object.entries(chartsByType.system || {}).map(([category, data]) => (
        <ChartSection key={category} title={category}>
          <RadarChartWrapper data={data} />
        </ChartSection>
      ))}
    </section>
  )
}