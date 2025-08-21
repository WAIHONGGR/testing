import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import AdminNavbar from '../components/AdminNavbar'
import AdminDashboardHome from '../components/admin/AdminDashboardHome'
import AdminApproveInstructor from '../components/admin/AdminApproveInstructor'
import AdminInstructorCRUD from '../components/admin/AdminInstructorCRUD'
import AdminProfile from '../components/admin/AdminProfile'

const AdminDashboard = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboardHome user={user} />

      case 'approve-instructor':
        return <AdminApproveInstructor />

      case 'instructor-crud':
        return <AdminInstructorCRUD />

      case 'profile':
        return <AdminProfile />

      default:
        return <AdminDashboardHome user={user} />
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
