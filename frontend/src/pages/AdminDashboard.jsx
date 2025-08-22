import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import AdminNavbar from '../components/AdminNavbar'
import { AdminDashboardHome, AdminApproveInstructor, AdminInstructorCRUD, AdminProfile } from '../components/admin'

const AdminDashboard = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <AdminDashboardHome />
        )
      case 'approve-instructor':
        return (
          <AdminApproveInstructor />
        )
      case 'instructor-crud':
        return (
          <AdminInstructorCRUD />
        )
      case 'profile':
        return (
          <AdminProfile />
        )
      default:
        return null
    }
  }

  return (
    <div className="admin-layout">
      {/* Left Sidebar Navigation */}
      <AdminNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="admin-main">
        {renderTabContent()}
      </main>
    </div>
  )
}

export default AdminDashboard
