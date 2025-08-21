import React from 'react'
import { Link } from 'react-router-dom'

const StudentCoursesHistory = () => {
  return (
    <div className="profile-content">
      <div className="profile-section">
        <h2>My Course And History</h2>
        
        <div className="courses-overview">
          <div className="overview-card">
            <h3>Current Courses</h3>
            <p>View and manage your currently enrolled courses</p>
            <Link to="/my-courses" className="btn-primary">
              View My Courses
            </Link>
          </div>
          
          <div className="overview-card">
            <h3>Course History</h3>
            <p>Review your completed courses and achievements</p>
            <Link to="/my-history" className="btn-primary">
              View My History
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentCoursesHistory
