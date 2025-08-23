import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import InstructorNavbar from '../components/InstructorNavbar'
import { InstructorProfile, InstructorRequirements, InstructorSecurity, InstructorSettings } from '../components/instructor'

const InstructorDashboard = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [profileTab, setProfileTab] = useState('profile-home')

  // Protect instructor dashboard - redirect non-instructors
  useEffect(() => {
    if (!user) {
      navigate('/login/instructor')
    } else if (user.role !== 'instructor') {
      navigate('/')
    }
  }, [user, navigate])

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="instructor-content">
            <div className="content-header">
              <h1>Instructor Dashboard</h1>
              <p>Welcome back, {user?.name}. Here's an overview of your teaching activities.</p>
            </div>
            
            {/* Statistics Cards */}
            <div className="stats-grid">
              <div className="stat-card"> 
                <div className="stat-icon">📚</div>
                <div className="stat-content">
                  <div className="stat-number">8</div>
                  <div className="stat-label">Active Courses</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                  <div className="stat-number">156</div>
                  <div className="stat-label">Total Students</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <div className="stat-number">4.8</div>
                  <div className="stat-label">Average Rating</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-content">
                  <div className="stat-number">92%</div>
                  <div className="stat-label">Completion Rate</div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="recent-activity-section">
              <h2>Recent Activity</h2>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon completed">✓</div>
                  <div className="activity-content">
                    <div className="activity-title">Course "Advanced React" completed by 15 students</div>
                    <div className="activity-time">2 hours ago</div>
                  </div>
                  <div className="activity-status">Completed</div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon new">🆕</div>
                  <div className="activity-content">
                    <div className="activity-title">New student enrolled in "JavaScript Fundamentals"</div>
                    <div className="activity-time">4 hours ago</div>
                  </div>
                  <div className="activity-status">New Enrollment</div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon review">⭐</div>
                  <div className="activity-content">
                    <div className="activity-title">Received 5-star review for "CSS Mastery"</div>
                    <div className="activity-time">1 day ago</div>
                  </div>
                  <div className="activity-status">Review</div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'course':
        return (
          <div className="instructor-content">
            <div className="content-header">
              <h1>Course Management</h1>
              <p>Manage your courses, content, and student progress.</p>
            </div>
            
            {/* Course Actions */}
            <div className="course-actions">
              <button className="btn-primary">+ Create New Course</button>
              <button className="btn-secondary">Import Course</button>
              <button className="btn-secondary">Course Analytics</button>
            </div>

            {/* Courses List */}
            <div className="courses-list">
              <div className="course-card">
                <div className="course-header">
                  <h3>Advanced React Development</h3>
                  <span className="course-status active">Active</span>
                </div>
                <p className="course-description">Master advanced React concepts including hooks, context, and performance optimization.</p>
                <div className="course-stats">
                  <span>📚 24 students enrolled</span>
                  <span>⭐ 4.9 rating</span>
                  <span>📅 Last updated: 2 days ago</span>
                </div>
                <div className="course-actions">
                  <button className="btn-edit">Edit Course</button>
                  <button className="btn-view">View Students</button>
                  <button className="btn-analytics">Analytics</button>
                </div>
              </div>

              <div className="course-card">
                <div className="course-header">
                  <h3>JavaScript Fundamentals</h3>
                  <span className="course-status active">Active</span>
                </div>
                <p className="course-description">Learn JavaScript from basics to advanced concepts with hands-on projects.</p>
                <div className="course-stats">
                  <span>📚 18 students enrolled</span>
                  <span>⭐ 4.7 rating</span>
                  <span>📅 Last updated: 1 week ago</span>
                </div>
                <div className="course-actions">
                  <button className="btn-edit">Edit Course</button>
                  <button className="btn-view">View Students</button>
                  <button className="btn-analytics">Analytics</button>
                </div>
              </div>
            </div>
          </div>
        )

      case 'profile':
        return (
          <div className="instructor-content">
            <div className="content-header">
              <h1>My Profile</h1>
              <p>Manage your instructor account settings and information.</p>
            </div>
            
            <div className="profile-layout">
              {/* Profile Sidebar */}
              <div className="profile-sidebar">
                <div className="profile-avatar">
                  {user?.name?.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase()}
                </div>
                <div className="profile-info">
                  <h3>{user?.name}</h3>
                  <p className="profile-role">Instructor</p>
                </div>
                
                <nav className="profile-nav">
                  <button 
                    className={`profile-nav-item ${profileTab === 'profile-home' ? 'active' : ''}`}
                    onClick={() => setProfileTab('profile-home')}
                  >
                    Overview
                  </button>
                  <button 
                    className={`profile-nav-item ${profileTab === 'requirements' ? 'active' : ''}`}
                    onClick={() => setProfileTab('requirements')}
                  >
                    Requirements
                  </button>
                  <button 
                    className={`profile-nav-item ${profileTab === 'security' ? 'active' : ''}`}
                    onClick={() => setProfileTab('security')}
                  >
                    Security
                  </button>
                  <button 
                    className={`profile-nav-item ${profileTab === 'settings' ? 'active' : ''}`}
                    onClick={() => setProfileTab('settings')}
                  >
                    Settings
                  </button>
                </nav>
              </div>
              
              {/* Profile Content */}
              <div className="profile-content">
                                       {profileTab === 'profile-home' && <InstructorProfile user={user} />}
                {profileTab === 'requirements' && <InstructorRequirements />}
                {profileTab === 'security' && <InstructorSecurity />}
                {profileTab === 'settings' && <InstructorSettings />}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="admin-layout">
      {/* Left Sidebar Navigation */}
      <InstructorNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="admin-main">
        {renderTabContent()}
      </main>
    </div>
  )
}

export default InstructorDashboard
