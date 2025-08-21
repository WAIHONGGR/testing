import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import tarumtLogo from '../assets/images/TARUMT_Logo.png'

const Navbar = () => {
  const navigate = useNavigate()
  const [openIntent, setOpenIntent] = useState(null) // null | 'login' | 'signup'
  const ddRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setOpenIntent(null)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const goTo = (role, intent) => {
    setOpenIntent(null)
    const mode = intent || 'login'
    navigate(`/auth?mode=${mode}&role=${role}`)
  }
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={tarumtLogo} alt="tarumt logo" className="nav-logo-img" />
          <h2>Tarumt LMS</h2>
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <div ref={ddRef} className="nav-auth-group">
            <button className={`nav-btn nav-auth-left ${openIntent==='signup' ? 'active' : ''}`} onClick={() => setOpenIntent(openIntent==='signup'?null:'signup')}>Sign Up</button>
            <button className={`nav-btn nav-auth-right ${openIntent==='login' ? 'active' : ''}`} onClick={() => setOpenIntent(openIntent==='login'?null:'login')}>Login</button>
            <div className={`auth-dropdown ${openIntent ? 'open' : ''}`}>
              <div className="auth-dropdown-header">{openIntent==='signup' ? 'Continue as' : 'Login as'}</div>
              <button onClick={() => goTo('student', openIntent || 'login')}>{openIntent==='signup' ? 'Student (Sign Up)' : 'Student'}</button>
              <button onClick={() => goTo('instructor', openIntent || 'login')}>{openIntent==='signup' ? 'Instructor (Sign Up)' : 'Instructor'}</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 