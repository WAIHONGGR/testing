import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const StudentProfile = ({ user }) => {
  const { updateUser } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    birthDate: '1995-03-15',
    phone: '+1-234-567-8900',
    yearLevel: 'Junior'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
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
      birthDate: '1995-03-15',
      phone: '+1-234-567-8900',
      yearLevel: 'Junior'
    })
    setIsEditing(false)
  }

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
          <input type="text" value="Student" readOnly />
        </div>
        
        <div className="profile-field">
          <label>Birth Date</label>
          {isEditing ? (
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
            />
          ) : (
            <input type="text" value={formData.birthDate} readOnly />
          )}
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
          <label>Year Level</label>
          {isEditing ? (
            <select
              name="yearLevel"
              value={formData.yearLevel}
              onChange={handleInputChange}
            >
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="Graduate">Graduate</option>
            </select>
          ) : (
            <input type="text" value={formData.yearLevel} readOnly />
          )}
        </div>
        
        <div className="profile-field">
          <label>Registration Date</label>
          <input type="text" value="2023-09-01" readOnly />
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
}

export default StudentProfile
