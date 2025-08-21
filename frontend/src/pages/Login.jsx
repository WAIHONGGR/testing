import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, ROLES } from '../auth/AuthContext'

const bgImage =
  'https://images.unsplash.com/photo-1535378917041-10a22c95931a?q=80&w=1200&auto=format&fit=crop'

const googleLogo = (
  <svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.68 32.91 29.223 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.152 7.958 3.042l5.657-5.657C34.675 6.053 29.611 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20c0-1.341-.138-2.651-.389-3.917z"/>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.817C14.655 16.014 18.961 12 24 12c3.059 0 5.842 1.152 7.958 3.042l5.657-5.657C34.675 6.053 29.611 4 24 4c-7.732 0-14.45 4.377-17.694 10.691z"/>
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.191l-6.19-5.238C29.12 35.091 26.676 36 24 36c-5.202 0-9.646-3.07-11.59-7.49l-6.53 5.025C8.087 39.556 15.467 44 24 44z"/>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.36 3.262-4.18 5.79-7.884 6.571l6.19 5.238C35.13 40.926 40 36.667 42.546 30.9c.94-2.299 1.465-4.81 1.465-7.4 0-1.341-.138-2.651-.389-3.917z"/>
  </svg>
)

const roles = [
  { key: ROLES.STUDENT, label: 'Student' },
  { key: ROLES.INSTRUCTOR, label: 'Instructor' },
  { key: ROLES.ADMIN, label: 'Admin' },
  { key: ROLES.SUPERADMIN, label: 'Super Admin' },
]

const Login = () => {
  const navigate = useNavigate()
  const { loginWithGoogle } = useAuth()
  const [selectedRole, setSelectedRole] = useState(ROLES.STUDENT)

  const handleLogin = async () => {
    await loginWithGoogle(selectedRole)
    // Redirect by role
    const landing =
      selectedRole === ROLES.SUPERADMIN
        ? '/dashboard/superadmin'
        : selectedRole === ROLES.ADMIN
        ? '/dashboard/admin'
        : selectedRole === ROLES.INSTRUCTOR
        ? '/dashboard/instructor'
        : '/dashboard/student'
    navigate(landing, { replace: true })
  }

  return (
    <div className="login-page">
      <div className="login-left" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="login-left-overlay" />
        <div className="login-left-content">
          <h1>Welcome.</h1>
          <p>Start your journey now with our management system!</p>
        </div>
      </div>
      <div className="login-right">
        <div className="login-card">
          <h2>Get Started Now</h2>
          <label className="login-label">Sign in as</label>
          <div className="role-grid">
            {roles.map(r => (
              <button
                key={r.key}
                className={`role-chip ${selectedRole === r.key ? 'active' : ''}`}
                onClick={() => setSelectedRole(r.key)}
              >
                {r.label}
              </button>
            ))}
          </div>
 
          <button className="google-btn" onClick={handleLogin}>
            <span className="google-icon">{googleLogo}</span>
            Login with Google
          </button>

          <p className="login-hint">SSO only for demo. Real Google OAuth can be added later.</p>
        </div>
      </div>
    </div>
  )
}

export default Login


