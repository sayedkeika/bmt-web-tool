import api from './api'

export const createSubmission = async (surveyId) => {
  const response = await api.post('/submissions', { survey_id: surveyId })
  return response.data.submission
}

export const getSubmissions = async () => {
  const response = await api.get('/submissions')
  return response.data.submissions
}

export const getSubmissionById = async (submissionId) => {
  const response = await api.get(`/submissions/${submissionId}`)
  return response.data.submission
}

export const saveSubmissionProgress = async (submissionId, answers, completed = false, metadata = null) => {
  const response = await api.patch(`/submissions/${submissionId}`, {
    answers,
    completed,
    metadata
  })
  return response.data.submission
}

export const deleteSubmission = async (submissionId) => {
  const response = await api.delete(`/submissions/${submissionId}`)
  return response.data
}