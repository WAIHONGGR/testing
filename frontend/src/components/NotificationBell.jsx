import { useState, useRef, useEffect } from 'react'

// just a notification icon design 

const NotificationBell = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="notification-wrapper" ref={ref}>
      <button className="notification-btn" onClick={() => setOpen(v=>!v)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9z"/>
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
        </svg>
        <span className="notification-badge">0</span>
      </button>
      <div className={`notification-dropdown ${open ? 'open' : ''}`}>
        <div className="notification-header">
          <h4>Notifications</h4>
          <button className="mark-all-read">Mark all as read</button>
        </div>
        <div className="notification-list">
          <div className="notification-item empty">
            <p>No new notifications</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationBell


