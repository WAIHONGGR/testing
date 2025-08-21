import React from 'react'

const InstructorProfileHome = ({ user }) => {
  return (
    <div className="profile-content">
      <div className="profile-section">
        <div className="section-header">
          <h2>Account Information</h2>
          <button className="edit-btn">
            Edit
          </button>
        </div>
        
        <div className="profile-field">
          <label>Full Name</label>
          <input type="text" value={user?.name || ''} readOnly />
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
          <label>Department</label>
          <input type="text" value="Computer Science" readOnly />
        </div>
        
        <div className="profile-field">
          <label>Qualification</label>
          <input type="text" value="PhD Computer Science" readOnly />
        </div>
        
        <div className="profile-field">
          <label>Registration Date</label>
          <input type="text" value="2023-06-15" readOnly />
        </div>
      </div>
    </div>
  )
}

export default InstructorProfileHome
