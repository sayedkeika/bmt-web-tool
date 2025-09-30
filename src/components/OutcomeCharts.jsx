// OutcomeCharts.jsx
import React, { useMemo } from 'react'
import { makeAnswerKey } from '../utils/answerMapping'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
  CartesianGrid
} from 'recharts'

// Render order
const RESPONSES = ['Fully Met', 'Partly Met', 'Missing', 'Not applicable']

const COLORS = {
  'Fully Met':      '#0077b2',
  'Partly Met':     '#66b5dc',
  'Missing':        '#cce6f3',
  'Not applicable': '#e5e7eb',
}

// If you truly need to exclude some requirement IDs, keep them as strings
const ADD_ON_IDS = new Set(['Add-on-A-1', 'Add-on-C-2'])

const truncate = (str, max = 30) => {
  const s = String(str ?? '')
  return s.length > max ? s.slice(0, max) + '…' : s
}

// Normalize any historical/variant labels to the canonical buckets
const normalizeResponse = (label) => {
  if (label == null || /not.?applicable/i.test(String(label))) return 'Not applicable'
  const s = String(label).toLowerCase()
  if (s.includes('fully'))  return 'Fully Met'
  if (s.includes('part'))   return 'Partly Met'
  if (s.includes('miss'))   return 'Missing'
  return label
}

export default function OutcomeCharts({ answers, categories }) {
  const data = useMemo(() => {
    const rows = []
    const cats = Array.isArray(categories) ? categories : []

    for (const cat of cats) {
      const principles = Array.isArray(cat.principles) ? cat.principles : []
      for (const pr of principles) {
        const criteria = Array.isArray(pr.criteria) ? pr.criteria : []
        for (const cr of criteria) {
          const reqs = Array.isArray(cr.requirements) ? cr.requirements : []

          const counts = {
            'Fully Met': 0,
            'Partly Met': 0,
            'Missing': 0,
            'Not applicable': 0,
          }
          let total = 0

          for (const r of reqs) {
            // Optional: exclude some requirements
            const rid = String(r?.id ?? '')
            if (ADD_ON_IDS.has(rid)) continue

            total += 1

            const key = makeAnswerKey(cr.id, r.id)
            const resp = answers?.[key]?.response ?? null
            const bucket = normalizeResponse(resp)

            if (Object.prototype.hasOwnProperty.call(counts, bucket)) {
              counts[bucket] += 1
            }
          }

          if (total === 0) continue

          const row = { criterion: `${cr.code}: ${cr.text}` }
          for (const label of RESPONSES) {
            const pct = (counts[label] / total) * 100
            row[label] = Math.round(pct * 10) / 10
          }
          rows.push(row)
        }
      }
    }

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
          <CartesianGrid strokeDasharray='3 3' horizontal={false} vertical />
          <XAxis type='number' domain={[0, 100]} tickFormatter={(v) => `${v}%`} ticks={[0, 20, 40, 60, 80, 100]} />
          <YAxis dataKey='criterion' type='category' width={450} tick={{ fontSize: 14 }} />
          <Tooltip formatter={(value, name) => [`${value}%`, name]} labelFormatter={(label) => truncate(label, 50)} />
          <Legend />
          {RESPONSES.map((label) => (
            <Bar key={label} dataKey={label} stackId='a' fill={COLORS[label]} name={label} barSize={35}>
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