import React, { useMemo } from 'react'
import { assessments } from '../Data'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

// Formats a numeric value as a percentage string
const formatPercent = (v) => `${v.toFixed(0)}%`

// Computes data structures required for system-level charts (Radar and Bar)
const computeSystemCharts = (answers) => {
  const chartsByType = {}
  const allPrinciplesChart = {}
  const barChartByType = {}

  const type = 'system'
  const categories = assessments[type] || []
  const chartCategories = {}
  const barChartData = {}

  // Iterate each category in system assessment
  categories.forEach(cat => {
    let categoryScoreTotal = 0
    let categoryMaxTotal = 0

    // Process each principle
    cat.principles.forEach(principle => {
      const items = principle.criteria

      // Filter only those criteria that have been answered and have a score
      const answeredCriteria = items.filter(item => {
        const answer = answers[item.id]
        const matched = answer?.response && item.responseOptions?.find(o => o.label === answer.response)
        return matched?.score !== undefined
      })

      // Only include principles with at least one answered criterion
      if (answeredCriteria.length > 0) {
        // Convert each answered criterion to a percent of its max
        const percentages = answeredCriteria.map(item => {
          const matched = item.responseOptions.find(o => o.label === answers[item.id]?.response)
          const score = matched?.score ?? 0
          const maxScore = Math.max(...item.responseOptions.map(o => o.score ?? 0))
          return (score / maxScore) * 100
        })

        // Average percentage for this principle
        const principlePercentage = percentages.reduce((sum, p) => sum + p, 0) / percentages.length

        // Accumulate category totals
        categoryScoreTotal += principlePercentage
        categoryMaxTotal += 100

        // Append to category-specific radar data
        if (!chartCategories[cat.category]) chartCategories[cat.category] = []
        chartCategories[cat.category].push({ principle: principle.title, score: principlePercentage })

        // Append to overall radar data
        if (!allPrinciplesChart[type]) allPrinciplesChart[type] = []
        allPrinciplesChart[type].push({ principle: principle.title, score: principlePercentage })
      }
    })

    // If there were any scored principles, compute bar chart entry
    if (categoryMaxTotal > 0) {
      barChartData[cat.category] = {
        category: cat.category,
        score: (categoryScoreTotal / categoryMaxTotal) * 100
      }
    }
  })

  // Final assembly
  chartsByType[type] = chartCategories
  barChartByType[type] = Object.values(barChartData)

  return { allPrinciplesChart, barChartByType, chartsByType }
}

// Section wrapper to add a title and spacing around each chart block
const ChartSection = ({ title, children }) => (
  <div style={{ marginBottom: '3rem' }}>
    <h3>{title}</h3>
    {children}
  </div>
)

// Wraps RadarChart in a ResponsiveContainer for automatic sizing
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

// Wraps BarChart for category score overview
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

// Component for displaying visual results for system-level scores
export default function SystemCharts({ answers }) {
  // Compute chart data once per change in answers
  const { allPrinciplesChart, barChartByType, chartsByType } = useMemo(() => computeSystemCharts(answers), [answers])

  return (
    <section className="section-box">
      <h2>System-Level Assessment</h2>

      {/* Overview radar if data exists */}
      {allPrinciplesChart.system?.length > 0 && (
        <ChartSection title="All Principles Overview">
          <RadarChartWrapper data={allPrinciplesChart.system} />
        </ChartSection>
      )}

      {/* Category score bar chart */}
      {barChartByType.system?.length > 0 && (
        <ChartSection title="Category Score Overview">
          <BarChartWrapper data={barChartByType.system} />
        </ChartSection>
      )}

      {/* Detailed radar per category */}
      {Object.entries(chartsByType.system || {}).map(([category, data]) => (
        <ChartSection key={category} title={category}>
          <RadarChartWrapper data={data} />
        </ChartSection>
      ))}
    </section>
  )
}