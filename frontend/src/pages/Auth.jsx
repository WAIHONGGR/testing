import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthLayout from '../components/AuthLayout'

const Auth = () => {
  const [mode, setMode] = useState('login') // 'login' | 'signup'
  const [role, setRole] = useState('student')
  const navigate = useNavigate()
  const location = useLocation()
  const { loginWithGoogle, getDashboardPath } = useAuth()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const r = params.get('role')
    const m = params.get('mode')
    if (r === 'student' || r === 'instructor') setRole(r)
    if (m === 'login' || m === 'signup') setMode(m)
  }, [location.search])

  const handleLogin = (e) => {
    e.preventDefault()
    if (role === 'student' || role === 'instructor') {
      // Navigate based on role
      const dashboardPath = getDashboardPath(role)
      navigate(dashboardPath)
    }
  }

  const handleSignup = (e) => {
    e.preventDefault()
    // Navigate based on role after signup
    const dashboardPath = getDashboardPath(role)
    navigate(dashboardPath)
  }

  const handleGoogleAuth = async () => {
    try {
      const user = await loginWithGoogle(role)
      const dashboardPath = getDashboardPath(user.role)
      navigate(dashboardPath)
    } catch (error) {
      console.error('Google auth error:', error)
      // Fallback to home page if there's an error
      navigate('/')
    }
  }

  return (
    <div className="main-content" style={{ marginTop: 0 }}>
      <AuthLayout title={mode === 'login' ? 'Get Started Now' : 'Create your account'}>
        <div className="auth-toggle">
          <button className={`auth-tab ${mode === 'login' ? 'active' : ''}`} onClick={() => setMode('login')}>Login</button>
          <button className={`auth-tab ${mode === 'signup' ? 'active' : ''}`} onClick={() => setMode('signup')}>Sign Up</button>
        </div>

        {mode === 'login' ? (
          <form className="auth-form" onSubmit={handleLogin}>
            <div className="form-row">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-row">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            {/* Role comes from navbar dropdown; selector removed as requested */}
            <button type="submit" className="auth-submit">Login</button>
            <div className="auth-divider"><span>or</span></div>
            <button
              type="button"
              className="google-btn"
              onClick={handleGoogleAuth}
            >
              <span className="g-icon">G</span>
              Login with Google
            </button>
            {/* Admin/Super Admin access removed from public login screen for security */}
          </form>
        ) : (
          <div className="auth-form">
            <div className="auth-divider" style={{marginTop: '8px'}}><span>Sign up with</span></div>
            <button
              type="button"
              className="google-btn"
              onClick={handleGoogleAuth}
            >
              <span className="g-icon">G</span>
              Continue with Google
            </button>
          </div>
        )}
      </AuthLayout>
    </div>
  )
}

export default Auth


