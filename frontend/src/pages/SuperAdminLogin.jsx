import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthLayout from '../components/AuthLayout'

const SuperAdminLogin = () => {
  const navigate = useNavigate()
  const { loginWithGoogle } = useAuth()

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await loginWithGoogle('superadmin')
      navigate('/superadmin-dashboard')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className="main-content" style={{ marginTop: 0 }}>
      <AuthLayout title="Super Admin Portal">
        <div className="auth-form">
          <div className="auth-divider"><span>Continue with</span></div>
          <button type="button" className="google-btn" onClick={onSubmit}>
            <span className="g-icon">G</span>
            Super Admin Google Login
          </button>
        </div>
      </AuthLayout>
    </div>
  )
}

export default SuperAdminLogin


