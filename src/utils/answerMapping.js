export function makeAnswerKey(criterion_id, requirement_id) {
  return `${criterion_id}-${requirement_id ?? 'null'}`
}

export function mapAnswersToPayload(answers) {
  const payload = []

  for (const [key, data] of Object.entries(answers)) {
    const [criterionIdStr, requirementIdStr] = key.split('-')
    const criterion_id = parseInt(criterionIdStr)
    const requirement_id = requirementIdStr !== 'null' ? parseInt(requirementIdStr) : null

    payload.push({
      criterion_id,
      requirement_id,
      value: data.score ?? null,
      justification: data.justification || "",
      feedback: data.feedback || "",
    })
  }

  return payload
}

// Converts backend answer array to frontend format
export function mapPayloadToAnswers(answerArray, survey) {
  const answers = {}
  const responseOptionMap = {}
  const levelMap = {}

  // Use composite keys to avoid collisions
  survey.levels.forEach(level => {
    level.categories.forEach(cat => {
      cat.principles.forEach(pr => {
        pr.criteria.forEach(cr => {
          if (cr.requirements?.length > 0) {
            cr.requirements.forEach(req => {
              const key = makeAnswerKey(cr.id, req.id)
              responseOptionMap[key] = req.response_options
              levelMap[key] = level.name
            })
          } else {
            const key = makeAnswerKey(cr.id, null)
            responseOptionMap[key] = cr.response_options
            levelMap[key] = level.name
          }
        })
      })
    })
  })

  for (const ans of answerArray) {
    const key = makeAnswerKey(ans.criterion_id, ans.requirement_id)
    const level = levelMap[key]
    const options = responseOptionMap[key] || []

    let normalizedOptions = []

    if (typeof options[0] === 'string') {
      const score = val => parseInt(val)
      normalizedOptions = options.map(val => {
        let label = val
        const s = score(val)

        if (level === 'content') {
          label = s === 0 ? 'No' : 'Yes'
        } else if (level === 'outcome') {
          label = s === 0 ? 'Missing' : s === 1 ? 'Partly Met' : 'Fully Met'
        }

        return { label, score: s }
      })
    } else {
      normalizedOptions = options
    }

    const matched = normalizedOptions.find(opt => parseInt(opt.score) === ans.value)

    answers[key] = {
      response: matched?.label ?? null,
      score: ans.value,
      justification: ans.justification || '',
      feedback: ans.feedback || '',
      criterion_id: ans.criterion_id,
      requirement_id: ans.requirement_id ?? null
    }
  }

  return answers
}