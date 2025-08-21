import React from 'react'

const AdminDashboardHome = ({ user }) => {
  return (
    <div className="admin-content">
      <div className="content-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome back, {user?.name}. Here's an overview of your system.</p>
      </div>
      
      {/* Statistics Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <div className="stat-number">156</div>
            <div className="stat-label">Total Instructors</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <div className="stat-number">23</div>
            <div className="stat-label">Pending Approvals</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <div className="stat-number">133</div>
            <div className="stat-label">Approved Instructors</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-number">89%</div>
            <div className="stat-label">Approval Rate</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity-section">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon approved">✓</div>
            <div className="activity-content">
              <div className="activity-title">Dr. Sarah Chen approved as instructor</div>
              <div className="activity-time">2 hours ago</div>
            </div>
            <div className="activity-status">Approved</div>
          </div>
          <div className="activity-item">
            <div className="activity-icon pending">⏳</div>
            <div className="activity-content">
              <div className="activity-title">Prof. Michael Rodriguez submitted qualification</div>
              <div className="activity-time">4 hours ago</div>
            </div>
            <div className="activity-status">Pending Review</div>
          </div>
          <div className="activity-item">
            <div className="activity-icon rejected">✗</div>
            <div className="activity-content">
              <div className="activity-title">John Smith's application rejected</div>
              <div className="activity-time">1 day ago</div>
            </div>
            <div className="activity-status">Rejected</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardHome
