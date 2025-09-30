import { useState, useEffect, createContext, useContext } from 'react'
import { login, logout, getCurrentUser } from '../api/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      try {
        const currentUser = await getCurrentUser()
        setUser(currentUser)
      } catch (err) {
        console.warn('Failed to fetch user:', err)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [])

  const handleLogin = async (email, password) => {
    const data = await login(email, password)
    setUser(data.user)
  }

  const handleLogout = async () => {
    await logout()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')

  const { user, loading, login, logout } = context
  const isAuthenticated = !!user

  return { user, loading, login, logout, isAuthenticated }
}