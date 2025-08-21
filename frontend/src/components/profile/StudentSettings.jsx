import React from 'react'

const StudentSettings = () => {
  return (
    <div className="profile-content">
      <div className="profile-section">
        <h2>Settings</h2>
        
        <div className="settings-item">
          <div className="settings-info">
            <h3>Email Notifications</h3>
            <p>Receive notifications about course updates and announcements</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>
        
        <div className="settings-item">
          <div className="settings-info">
            <h3>Course Reminders</h3>
            <p>Get reminders for upcoming assignments and deadlines</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>
        
        <div className="settings-item">
          <div className="settings-info">
            <h3>Progress Updates</h3>
            <p>Receive weekly progress reports and achievements</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="toggle-slider"></span>
          </label>
        </div>
        
        <div className="settings-item">
          <div className="settings-info">
            <h3>Language</h3>
            <p>Choose your preferred language for the interface</p>
          </div>
          <select className="settings-select">
            <option value="en">English</option>
            <option value="ms">Bahasa Malaysia</option>
            <option value="zh">中文</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default StudentSettings
