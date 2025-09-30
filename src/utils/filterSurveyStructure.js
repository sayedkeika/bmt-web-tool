export function filterSurveyStructure(survey, rawFilters) {
  if (!survey || !survey.levels) return survey

  const asArray = (v) =>
    Array.isArray(v)
      ? v
      : typeof v === 'string'
        ? v.split(',').map(s => s.trim()).filter(Boolean)
        : []

  const toArray = (v) =>
    Array.isArray(v)
      ? v
      : typeof v === 'string'
        ? v.split(',').map(s => s.trim()).filter(Boolean)
        : []

  const toLowerArray = (v) =>
    toArray(v).map(x => (typeof x === 'string' ? x.toLowerCase() : String(x).toLowerCase()))

  const toNumArray = (v) =>
    toArray(v).map(x => Number(x)).filter(n => !Number.isNaN(n))

  const toIdSet = (v) =>
    new Set(
      (Array.isArray(v)
        ? v
        : typeof v === 'string'
          ? v.split(',').map(s => s.trim()).filter(Boolean)
          : []
      ).map(String)
    )

  // Handle survey fields that might be CSV string, array, or null
  const normalizeFieldListLower = (v) =>
    Array.isArray(v)
      ? v.map(s => (typeof s === 'string' ? s.toLowerCase() : String(s).toLowerCase()))
      : typeof v === 'string'
        ? v.split(',').map(s => s.trim().toLowerCase()).filter(Boolean)
        : []
  
  // Normalize filters
  const filters = rawFilters || {}

  const types = toArray(filters.types)
  const applicability = toLowerArray(filters.applicability)
  const feedstocks = toLowerArray(filters.feedstocks)
  const phases = toLowerArray(filters.phases)
  const contentCategories = toLowerArray(filters.contentCategories)
  const excludedPrinciplesSet = toIdSet(filters.excludedPrinciples)

  // Filter survey structure
  const filteredLevels = survey.levels
    .filter(level => types.includes(level.name))
    .map(level => {
      let filteredCategories = level.categories

      if (level.name === 'system') {
        filteredCategories = filteredCategories
          .map(cat => ({
            ...cat,
            principles: cat.principles
              .map(pr => ({
                ...pr,
                criteria: pr.criteria.filter(cr =>
                  asArray(cr.type).some(t =>
                    applicability.includes(
                      typeof t === 'string' ? t.toLowerCase() : String(t).toLowerCase()
                    )
                  )
                )
              }))
              .filter(pr => pr.criteria.length > 0)
          }))
          .filter(cat => cat.principles.length > 0)
      }

      if (level.name === 'outcome') {
        filteredCategories = filteredCategories
          .map(cat => ({
            ...cat,
            principles: cat.principles
              .map(pr => ({
                ...pr,
                criteria: pr.criteria.filter(cr =>
                  (cr.type || []).some(t =>
                    applicability.includes(
                      typeof t === 'string' ? t.toLowerCase() : String(t).toLowerCase()
                    )
                  )
                )
              }))
              .filter(pr => pr.criteria.length > 0)
          }))
          .filter(cat => cat.principles.length > 0)
      }

      if (level.name === 'content') {
        const selectedCatLabels = contentCategories

        filteredCategories = filteredCategories
          .filter(cat => selectedCatLabels.includes((cat.label || '').toLowerCase()))
          .map(cat => ({
            ...cat,
            principles: cat.principles
              .filter(pr => !excludedPrinciplesSet.has(String(pr.id)))
              .map(pr => ({
                ...pr,
                criteria: pr.criteria
                  .filter(cr =>
                    applicability.length === 0 ||
                    asArray(cr.type).some(t =>
                      applicability.includes(
                        typeof t === 'string' ? t.toLowerCase() : String(t).toLowerCase()
                      )
                    )
                  )
                  .map(cr => {
                    const filteredReqs = (cr.requirements ?? []).filter(r => {
                      const reqFeedstocks = normalizeFieldListLower(r.applicable_feedstocks)
                      const reqPhases     = normalizeFieldListLower(r.applicable_phases)

                      const matchesFeedstock =
                        feedstocks.length === 0 ||
                        reqFeedstocks.some(f => feedstocks.includes(f))

                      const matchesPhase =
                        phases.length === 0 ||
                        reqPhases.some(p => phases.includes(p))

                      return matchesFeedstock && matchesPhase
                    })

                    return { ...cr, requirements: filteredReqs }
                  })
                  .filter(cr => (cr.requirements?.length || 0) > 0)
              }))
              .filter(pr => pr.criteria.length > 0)
          }))
          .filter(cat => cat.principles.length > 0)
      }

      return { ...level, categories: filteredCategories }
    })
    .filter(level => level.categories.length > 0)

  return { ...survey, levels: filteredLevels }
}