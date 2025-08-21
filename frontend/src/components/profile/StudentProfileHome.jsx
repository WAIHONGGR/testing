import React from 'react'

const StudentProfileHome = ({ user }) => {
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
          <input type="text" value="Student" readOnly />
        </div>
        
        <div className="profile-field">
          <label>Birth Date</label>
          <input type="text" value="1995-03-15" readOnly />
        </div>
        
        <div className="profile-field">
          <label>Registration Date</label>
          <input type="text" value="2023-09-01" readOnly />
        </div>
      </div>
    </div>
  )
}

export default StudentProfileHome
