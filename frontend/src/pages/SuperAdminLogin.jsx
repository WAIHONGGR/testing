import { useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'

const SuperAdminLogin = () => {
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/')
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


