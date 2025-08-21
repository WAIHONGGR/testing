import React from 'react'

const InstructorSettings = () => {
  return (
    <div className="profile-content">
      <div className="profile-section">
        <h2>Settings</h2>
        
        <div className="settings-item">
          <div className="settings-info">
            <h3>Email Notifications</h3>
            <p>Receive notifications about student enrollments and course updates</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>
        
        <div className="settings-item">
          <div className="settings-info">
            <h3>Student Progress Alerts</h3>
            <p>Get notified when students need attention or assistance</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>
        
        <div className="settings-item">
          <div className="settings-info">
            <h3>Course Announcements</h3>
            <p>Send announcements to enrolled students</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>
        
        <div className="settings-item">
          <div className="settings-info">
            <h3>Assessment Reminders</h3>
            <p>Get reminders for upcoming assessments and deadlines</p>
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

export default InstructorSettings
