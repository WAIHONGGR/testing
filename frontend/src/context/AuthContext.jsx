import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem('lms_user')
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    try {
      if (user) localStorage.setItem('lms_user', JSON.stringify(user))
      else localStorage.removeItem('lms_user')
    } catch {
      // ignore storage errors
    }
  }, [user])

  const loginWithGoogle = async (role = 'student') => {
    // Simulate Google SSO result
    const mockUser = {
      id: 'mock-' + role,
      name: role === 'instructor' ? 'Instructor User' : 'Student User',
      email: role + '@example.com',
      role,
      birthDate: '2000-01-01',
      registeredDate: new Date().toISOString().slice(0,10),
    }
    setUser(mockUser)
  }

  const updateUser = (partial) => setUser((prev) => ({ ...(prev || {}), ...(partial || {}) }))
  const logout = () => setUser(null)

  const value = useMemo(() => ({ user, loginWithGoogle, logout, updateUser }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


