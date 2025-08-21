import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'

const Auth = () => {
  const [mode, setMode] = useState('login') // 'login' | 'signup'
  const [role, setRole] = useState('student')
  const navigate = useNavigate()
  const location = useLocation()

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
      // Placeholder: navigate based on role (customize later)
      navigate('/')
    }
  }

  const handleSignup = (e) => {
    e.preventDefault()
    navigate('/')
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
            <button type="button" className="google-btn">
              <span className="g-icon">G</span>
              Login with Google
            </button>
            <div className="portal-links">
              <span>Admin?</span>
              <button type="button" className="link-btn" onClick={() => navigate('/admin-login')}>Go to Admin Portal</button>
              <span>•</span>
              <button type="button" className="link-btn" onClick={() => navigate('/superadmin-login')}>Go to Super Admin</button>
            </div>
          </form>
        ) : (
          <div className="auth-form">
            <div className="auth-divider" style={{marginTop: '8px'}}><span>Sign up with</span></div>
            <button type="button" className="google-btn" onClick={handleSignup}>
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


