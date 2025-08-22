import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import tarumtLogo from '../assets/images/TARUMT_Logo.png'
import { useAuth } from '../context/AuthContext'
import NotificationBell from './NotificationBell'

const Navbar = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
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
          {/* <img src={tarumtLogo} alt="tarumt logo" className="nav-logo-img" /> */}
          <h2>Tarumt LMS</h2>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        <div className="nav-right">

          <NotificationBell />
          
          {!user ? (
            <div ref={ddRef} className="nav-auth-group">
              <button className={`nav-btn nav-auth-left ${openIntent==='signup' ? 'active' : ''}`} onClick={() => setOpenIntent(openIntent==='signup'?null:'signup')}>Sign Up</button>
              <button className={`nav-btn nav-auth-right ${openIntent==='login' ? 'active' : ''}`} onClick={() => setOpenIntent(openIntent==='login'?null:'login')}>Login</button>
              <div className={`auth-dropdown ${openIntent ? 'open' : ''}`}>
                <div className="auth-dropdown-header">{openIntent==='signup' ? 'Register as' : 'Login as'}</div>
                <button onClick={() => goTo('student', openIntent || 'login')}>{openIntent==='signup' ? 'Student' : 'Student'}</button>
                <button onClick={() => goTo('instructor', openIntent || 'login')}>{openIntent==='signup' ? 'Instructor' : 'Instructor'}</button>
              </div>
            </div>
          ) : (
            <div className="signin-dropdown-wrapper" ref={ddRef}>
              <div className={`profile-trigger ${openIntent==='profile' ? 'profile-open' : ''}`}>
                <button className="avatar-btn" onClick={() => setOpenIntent(openIntent==='profile'?null:'profile')}>
                  {(user.name || 'Me').split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase()}
                </button>
                <span className="profile-caret" />
              </div>
              <div className={`signin-dropdown ${openIntent==='profile' ? 'open' : ''}`}>
                <div className="menu-header">
                  <div className="avatar-mini">{(user.name || 'Me').split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase()}</div>
                  <div>
                    <div className="menu-title">{user.name}</div>
                    <div className="menu-sub">{user.email}</div>
                  </div>
                </div>
                <div className="menu-divider" />
                <div className="menu-section">
                  <button onClick={() => { setOpenIntent(null); navigate('/profile') }}>My Profile</button>
                  <button onClick={() => { setOpenIntent(null); logout(); navigate('/') }}>Log Out</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar 