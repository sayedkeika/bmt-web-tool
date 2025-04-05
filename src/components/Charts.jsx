import React from 'react'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

const formatPercent = (v) => `${v.toFixed(0)}%`

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

export default function ChartsPanel({ selectedTypes, TYPE_LABELS, allPrinciplesChart, barChartByType, chartsByType }) {
  return (
    <>
      {selectedTypes.map(type => (
        <section key={type} className="section-box">
          <h2>{TYPE_LABELS[type]}</h2>

          {allPrinciplesChart[type]?.length > 0 && (
            <ChartSection title="All Principles Overview">
              <RadarChartWrapper data={allPrinciplesChart[type]} />
            </ChartSection>
          )}

          {barChartByType[type]?.length > 0 && (
            <ChartSection title="Category Score Overview">
              <BarChartWrapper data={barChartByType[type]} />
            </ChartSection>
          )}

          {Object.entries(chartsByType[type] || {}).map(([category, data]) => (
            <ChartSection key={category} title={category}>
              <RadarChartWrapper data={data} />
            </ChartSection>
          ))}
        </section>
      ))}
    </>
  )
} 
