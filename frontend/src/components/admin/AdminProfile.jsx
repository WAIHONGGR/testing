import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const AdminProfile = () => {
  const { user, updateUser } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1-234-567-8900',
    systemAccessLevel: 'full',
    emailNotifications: true,
    systemAlerts: true,
    weeklyReports: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSave = async () => {
    try {
      await updateUser(formData)
      setIsEditing(false)
      // You can add a success message here
    } catch (error) {
      console.error('Failed to update profile:', error)
      // You can add an error message here
    }
  }

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: '+1-234-567-8900',
      systemAccessLevel: 'full',
      emailNotifications: true,
      systemAlerts: true,
      weeklyReports: false
    })
    setIsEditing(false)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="profile-content">
            <div className="profile-section">
              <div className="section-header">
                <h2>Account Information</h2>
                <button 
                  className="edit-btn"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>
              
              <div className="profile-field">
                <label>Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  <input type="text" value={user?.name || ''} readOnly />
                )}
              </div>
              
              <div className="profile-field">
                <label>Email</label>
                <input type="email" value={user?.email || ''} readOnly />
              </div>
              
              <div className="profile-field">
                <label>Role</label>
                <input type="text" value="Administrator" readOnly />
              </div>
              
              <div className="profile-field">
                <label>Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1-234-567-8900"
                  />
                ) : (
                  <input type="text" value={formData.phone} readOnly />
                )}
              </div>
              
              <div className="profile-field">
                <label>Registration Date</label>
                <input type="text" value="2024-01-01" readOnly />
              </div>

              {isEditing && (
                <div className="edit-actions">
                  <button className="btn-primary" onClick={handleSave}>
                    Save Changes
                  </button>
                  <button className="btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        )

      case 'settings':
        return (
          <div className="profile-content">
            <div className="profile-section">
              <h2>Administrative Settings</h2>
              
              <div className="profile-field">
                <label>System Access Level</label>
                <select
                  name="systemAccessLevel"
                  value={formData.systemAccessLevel}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                >
                  <option value="full">Full Access</option>
                  <option value="limited">Limited Access</option>
                  <option value="readonly">Read Only</option>
                </select>
              </div>
              
              <div className="profile-field">
                <label>Notification Preferences</label>
                <div className="checkbox-group">
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="emailNotifications"
                      checked={formData.emailNotifications}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                    <span>Email Notifications</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="systemAlerts"
                      checked={formData.systemAlerts}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                    <span>System Alerts</span>
                  </label>
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      name="weeklyReports"
                      checked={formData.weeklyReports}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                    <span>Weekly Reports</span>
                  </label>
                </div>
              </div>

              {isEditing && (
                <div className="edit-actions">
                  <button className="btn-primary" onClick={handleSave}>
                    Save Changes
                  </button>
                  <button className="btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="admin-content">
      <div className="content-header">
        <h1>My Profile</h1>
        <p>Manage your administrator account settings and information.</p>
      </div>
      
      <div className="profile-layout">
        {/* Profile Sidebar */}
        <div className="profile-sidebar">
          <div className="profile-avatar">
            {user?.name?.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase()}
          </div>
          <div className="profile-info">
            <h3>{user?.name}</h3>
            <p className="profile-role">Administrator</p>
          </div>
          
          <nav className="profile-nav">
            <button 
              className={`profile-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`profile-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
          </nav>
        </div>
        
        {/* Profile Content */}
        {renderTabContent()}
      </div>
    </div>
  )
}

export default AdminProfile
