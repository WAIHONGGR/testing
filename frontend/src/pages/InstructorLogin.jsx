import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthLayout from '../components/AuthLayout'

const InstructorLogin = () => {
  const navigate = useNavigate()
  const { loginWithGoogle } = useAuth()
  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/')
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
          <button type="button" className="google-btn" onClick={async () => { await loginWithGoogle('instructor'); navigate('/') }}>
            <span className="g-icon">G</span>
            Login with Google
          </button>
        </form>
      </AuthLayout>
    </div>
  )
}

export default InstructorLogin


