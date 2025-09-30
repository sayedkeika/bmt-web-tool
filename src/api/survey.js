import api from './api'

export const fetchSurveys = async () => {
  const response = await api.get('/surveys')
  return response.data.surveys
}

export const fetchSurveyStructure = async (surveyId) => {
  const response = await api.get(`/surveys/${surveyId}`)
  return response.data.survey
}