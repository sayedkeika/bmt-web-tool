import React, { useState } from 'react'
import { login, register } from '../api/auth'

export default function AuthPage({ onSuccess }) {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    try {
      await login(email, password)
      onSuccess()
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    }
  }

  const handleRegister = async () => {
    try {
      await register({
        name,
        email,
        password,
        password_confirmation: confirmation
      })
      onSuccess()
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <div className="auth-container">
      <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
      {error && <p className="error">{error}</p>}

      <div className="inputs inputs-auth">
        {mode === 'register' && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {mode === 'register' && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmation}
            onChange={e => setConfirmation(e.target.value)}
          />
        )}
      </div>

      <button onClick={mode === 'login' ? handleLogin : handleRegister}>
        {mode === 'login' ? 'Login' : 'Register'}
      </button>

      <p style={{ marginTop: '1rem' }}>
        {mode === 'login' ? (
          <>
            Don’t have an account?{' '}
            <button className="link" onClick={() => setMode('register')}>
              Register
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button className="link" onClick={() => setMode('login')}>
              Login
            </button>
          </>
        )}
      </p>
    </div>
  )
}