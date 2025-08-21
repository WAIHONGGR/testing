import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const TwoFA = () => {
  const { verifyTwoFA } = useAuth()
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    const ok = verifyTwoFA(code)
    if (ok) navigate('/dashboard')
    else setError('Invalid code')
  }

  return (
    <section className="auth-page container">
      <h1>Two-Factor Authentication</h1>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>
          Enter 2FA code
          <input type="text" value={code} onChange={e => setCode(e.target.value)} placeholder="123 456" />
        </label>
        {error && <div className="error">{error}</div>}
        <button className="primary-btn" type="submit">Verify</button>
      </form>
    </section>
  )
}

export default TwoFA


