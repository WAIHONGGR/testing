import React from 'react'

const AuthLayout = ({ children, title = 'Get Started Now' }) => {
  return (
    <div className="auth-layout">
      <div className="auth-left">
        <div className="auth-left-content">
          <h1>
            Welcome.
            <br />
            Start your journey now
            <br />
            with TARUMT Learning Management System!
          </h1>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-card">
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout


