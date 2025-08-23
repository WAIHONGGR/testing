import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthLayout from '../components/AuthLayout'

const InstructorLogin = () => {
  const navigate = useNavigate()
  const { loginWithGoogle, getDashboardPath } = useAuth()
  
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted, navigating to instructor dashboard...')
    navigate('/instructor-dashboard')
  }

  const handleGoogleLogin = async () => {
    try {
      console.log('Starting Google login...')
      const user = await loginWithGoogle('instructor')
      console.log('User logged in:', user)
      const dashboardPath = getDashboardPath(user.role)
      console.log('Navigating to:', dashboardPath)
      navigate(dashboardPath)
    } catch (error) {
      console.error('Google login error:', error)
    }
  }
  return (
    <div className="main-content" style={{ marginTop: 0 }}>
      <AuthLayout title="Instructor Login">
        <form className="auth-form" onSubmit={onSubmit}>
          <div className="form-row">
            <label>Email</label>
            <input type="email" placeholder="instructor@example.com" required />
          </div>
          <div className="form-row">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="auth-submit">Login</button>
          <div className="auth-divider"><span>or</span></div>
          <button type="button" className="google-btn" onClick={handleGoogleLogin}>
            <span className="g-icon">G</span>
            Login with Google
          </button>
        </form>
      </AuthLayout>
    </div>
  )
}

export default InstructorLogin


