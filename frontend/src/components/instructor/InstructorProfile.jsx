import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const InstructorProfile = ({ user }) => {
  const { updateUser } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    birthDate: '1980-05-15',
    qualification: 'PhD Computer Science',
    phone: '+1-234-567-8900'
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
      birthDate: '1980-05-15',
      qualification: 'PhD Computer Science',
      phone: '+1-234-567-8900'
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
          <input type="text" value="Instructor" readOnly />
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
          <label>Qualification</label>
          {isEditing ? (
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
            >
              <option value="PhD Computer Science">PhD Computer Science</option>
              <option value="PhD Mathematics">PhD Mathematics</option>
              <option value="PhD Engineering">PhD Engineering</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Industry Certification">Industry Certification</option>
            </select>
          ) : (
            <input type="text" value={formData.qualification} readOnly />
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
          <label>Registration Date</label>
          <input type="text" value="2023-06-15" readOnly />
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

export default InstructorProfile
