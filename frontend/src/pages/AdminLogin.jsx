import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthLayout from '../components/AuthLayout'

const AdminLogin = () => {
  const navigate = useNavigate()
  const { loginWithGoogle } = useAuth()

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await loginWithGoogle('admin')
      navigate('/admin-dashboard')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="main-content" style={{ marginTop: 0 }}>
      <AuthLayout title="Admin Portal">
        <div className="auth-form">
          <div className="auth-divider"><span>Continue with</span></div>
          <button type="button" className="google-btn" onClick={onSubmit}>
            <span className="g-icon">G</span>
            Admin Google Login
          </button>
        </div>
      </AuthLayout>
    </div>
  )
}

export default AdminLogin


