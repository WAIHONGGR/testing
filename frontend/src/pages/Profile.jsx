import { useAuth } from '../context/AuthContext'
import { useState, useEffect } from 'react'
import {
  StudentProfileHome,
  StudentCoursesHistory,
  StudentAIAssistant,
  StudentSecurity,
  StudentSettings,
  InstructorProfileHome,
  InstructorRequirements,
  InstructorSecurity,
  InstructorSettings
} from '../components/profile'

const Profile = () => {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')

  // Reset active tab if student has submit-requirements tab active
  useEffect(() => {
    if (user?.role !== 'instructor' && activeTab === 'submit-requirements') {
      setActiveTab('overview')
    }
    if (user?.role !== 'student' && activeTab === 'my-courses-history') {
      setActiveTab('overview')
    }
  }, [user?.role, activeTab])

  const renderTabContent = () => {
    if (user?.role === 'student') {
      switch (activeTab) {
        case 'overview':
          return <StudentProfileHome user={user} />
        case 'my-courses-history':
          return <StudentCoursesHistory />
        case 'ai-assistant':
          return <StudentAIAssistant />
        case 'security':
          return <StudentSecurity />
        case 'settings':
          return <StudentSettings />
        default:
          return <StudentProfileHome user={user} />
      }
    } else if (user?.role === 'instructor') {
      switch (activeTab) {
        case 'overview':
          return <InstructorProfileHome user={user} />
        case 'submit-requirements':
          return <InstructorRequirements />
        case 'security':
          return <InstructorSecurity />
        case 'settings':
          return <InstructorSettings />
        default:
          return <InstructorProfileHome user={user} />
      }
    }
    return null
  }

  const getProfileTabs = () => {
    if (user?.role === 'student') {
      return [
        { id: 'overview', label: 'Overview', icon: '👤' },
        { id: 'my-courses-history', label: 'My Course And History', icon: '📚' },
        { id: 'ai-assistant', label: 'AI Assistant', icon: '🤖' },
        { id: 'security', label: 'Security', icon: '🔒' },
        { id: 'settings', label: 'Settings', icon: '⚙️' }
      ]
    } else if (user?.role === 'instructor') {
      return [
        { id: 'overview', label: 'Overview', icon: '👤' },
        { id: 'submit-requirements', label: 'Submit Requirements', icon: '📝' },
        { id: 'security', label: 'Security', icon: '🔒' },
        { id: 'settings', label: 'Settings', icon: '⚙️' }
      ]
    }
    return []
  }

  if (!user) return (
    <div className="main-content">
      <div className="container" style={{ padding: '40px 0' }}>
        <h2>You are not logged in.</h2>
        <p>Please login to view your profile.</p>
      </div>
    </div>
  )

  return (
    <div className="main-content">
      <div className="container">
        <div className="profile-layout">
          {/* Profile Sidebar */}
          <div className="profile-sidebar">
            <div className="profile-avatar">
              {user.name?.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase()}
            </div>
            <div className="profile-info">
              <h3>{user.name}</h3>
              <p className="profile-role">{user.role}</p>
            </div>
            
            <nav className="profile-nav">
              {getProfileTabs().map(tab => (
                <button
                  key={tab.id}
                  className={`profile-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
            
            <button className="logout-btn-profile" onClick={logout}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16,17 21,12 16,7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Log Out
            </button>
          </div>
          
          {/* Profile Content */}
          {renderTabContent()}
        </div>
      </div>
    </div>
  )
}

export default Profile


