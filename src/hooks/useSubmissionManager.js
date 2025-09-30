import { useState, useCallback } from 'react'
import {
  createSubmission,
  getSubmissionById,
  saveSubmissionProgress,
  deleteSubmission as apiDeleteSubmission,
  getSubmissions
} from '../api/submissions'
import { fetchSurveys, fetchSurveyStructure } from '../api/survey'
import { mapAnswersToPayload, mapPayloadToAnswers } from '../utils/answerMapping'
import { filterSurveyStructure } from '../utils/filterSurveyStructure'

export const useSubmissionManager = () => {
  const [submission, setSubmission] = useState(null)
  const [survey, setSurvey] = useState(null)
  const [answers, setAnswers] = useState({})
  const [metadata, setMetadata] = useState(null)
  const [allSubmissions, setAllSubmissions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const startNewSubmission = useCallback(async (filters) => {
    setLoading(true)
    setError(null)
    try {
      const surveys = await fetchSurveys()
      if (!surveys.length) throw new Error("No active surveys available.")
      const surveyId = surveys[0].id

      const submission = await createSubmission(surveyId)
      const rawSurvey = await fetchSurveyStructure(surveyId)

      const toArray = (v) =>
        Array.isArray(v) ? v : (typeof v === 'string' ? v.split(',').map(s => s.trim()).filter(Boolean) : [])
      const toIdArray = (v) => toArray(v).map(x => String(x).trim()).filter(Boolean)

      const normalized = {
        ...filters,
        types: toArray(filters?.types),
        applicability: toArray(filters?.applicability),
        feedstocks: toArray(filters?.feedstocks),
        phases: toArray(filters?.phases),
        contentCategories: toArray(filters?.contentCategories),
        excludedPrinciples: toIdArray(filters?.excludedPrinciples),
      }

      const filteredSurvey = filterSurveyStructure(rawSurvey, normalized)

      setSubmission(submission)
      setSurvey(filteredSurvey)
      setAnswers({})
      setMetadata(normalized)
    } catch (err) {
      const message = err?.response?.data?.message || err.message || 'Failed to start submission.'
      console.error(message)
      setError(message)
    } finally {
      setLoading(false)
    }
  }, [])

  const loadSubmission = useCallback(async (submissionId) => {
  setLoading(true)
  setError(null)
  try {
    const sub = await getSubmissionById(submissionId)
    const rawSurvey = sub.survey
    const filters = sub.metadata || {}

    const filteredSurvey = filterSurveyStructure(rawSurvey, filters)

    setSubmission(sub)
    setSurvey(filteredSurvey)
    setMetadata(filters)

    let mappedAnswers = mapPayloadToAnswers(sub.answers, filteredSurvey)

    const findNALabel = (survey, criterionId, requirementId) => {
      let opts = []
      survey.levels.forEach(l => {
        l.categories.forEach(c => {
          c.principles.forEach(p => {
            p.criteria.forEach(cr => {
              if (requirementId != null) {
                if (cr.id === criterionId) {
                  const req = (cr.requirements || []).find(r => r.id === requirementId)
                  if (req) opts = req.response_options || []
                }
              } else {
                if (cr.id === criterionId) opts = cr.response_options || []
              }
            })
          })
        })
      })
      const na = opts.find(o => /not.?applicable/i.test(o?.label || ''))
      return na?.label || 'Not applicable'
    }

    const naKeys = Array.isArray(filters?.naKeys) ? filters.naKeys : []
    naKeys.forEach(key => {
      const [critStr, reqStr] = key.split('-')
      const criterion_id = parseInt(critStr, 10)
      const requirement_id = reqStr !== 'null' ? parseInt(reqStr, 10) : null

      const naLabel = findNALabel(filteredSurvey, criterion_id, requirement_id)

      mappedAnswers[key] = {
        ...(mappedAnswers[key] || {
          criterion_id,
          requirement_id,
          justification: '',
          feedback: ''
        }),
        response: naLabel,
        score: null,
        is_na: true,
      }
    })

    setAnswers(mappedAnswers)

  } catch (err) {
    console.error(err)
    const message = err?.response?.data?.message || 'Failed to load submission.'
    setError(message)
  } finally {
    setLoading(false)
  }
}, [])

  const collectNAKeys = (answers) =>
  Object.entries(answers)
    .filter(([, a]) => a?.is_na === true || (typeof a?.response === 'string' && /not.?applicable/i.test(a.response)))
    .map(([key]) => key)

  const saveProgress = useCallback(async (completed = false, contentAllowed) => {
    if (!submission) return
    setError(null)

    const formattedAnswers = mapAnswersToPayload(answers)

    try {
      const naKeys = collectNAKeys(answers)
      const fullMetadata = {
        ...(metadata || {}),
        contentAllowed,
        naKeys,
      }

      const updated = await saveSubmissionProgress(
        submission.id,
        formattedAnswers,
        completed,
        fullMetadata
      )
      setSubmission(updated)
    } catch (err) {
      const message = err?.response?.data?.message || 'Failed to save progress.'
      console.error(message)
      setError(message)
    }
  }, [submission, answers, metadata])

  const deleteSubmissionById = useCallback(async (id) => {
    try {
      await apiDeleteSubmission(id)
      setAllSubmissions(prev => prev.filter(sub => sub.id !== id))
    } catch (err) {
      const message = err?.response?.data?.message || 'Failed to delete submission.'
      console.error(message)
      setError(message)
    }
  }, [])

  const deleteDraft = useCallback(async () => {
    if (!submission || submission.completed) return
    setError(null)
    try {
      await deleteSubmission(submission.id)
      setSubmission(null)
      setSurvey(null)
      setAnswers({})
      setMetadata(null)
    } catch (err) {
      const message = err?.response?.data?.message || 'Failed to delete draft.'
      console.error(message)
      setError(message)
    }
  }, [submission])

  const fetchSubmissions = useCallback(async () => {
    setError(null)
    try {
      const submissions = await getSubmissions()
      setAllSubmissions(submissions)
    } catch (err) {
      const message = err?.response?.data?.message || 'Failed to fetch submissions.'
      console.error(message)
      setError(message)
    }
  }, [])

  return {
    survey,
    submission,
    answers,
    setAnswers,
    metadata,
    setMetadata,
    allSubmissions,
    loading,
    startNewSubmission,
    loadSubmission,
    saveProgress,
    deleteDraft,
    fetchSubmissions,
    deleteSubmission: deleteSubmissionById
  }
}