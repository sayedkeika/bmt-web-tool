import api from './api'

export const login = async (email, password) => {
  const response = await api.post('/login', { email, password })
  localStorage.setItem('auth_token', response.data.token)
  return response.data
}

export const register = async ({ name, email, password, password_confirmation }) => {
  const response = await api.post('/register', {
    name,
    email,
    password,
    password_confirmation
  })
  localStorage.setItem('auth_token', response.data.token)
  return response.data
}

export const logout = async () => {
  await api.post('/logout')
  localStorage.removeItem('auth_token')
}

export const getCurrentUser = async () => {
  const response = await api.get('/me')
  return response.data.user
}