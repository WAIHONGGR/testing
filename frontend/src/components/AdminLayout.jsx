import { useState } from 'react'
import AdminNavbar from './AdminNavbar'

const AdminLayout = ({ children, defaultTab = 'dashboard' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <div className="admin-layout">
      {/* Left Sidebar Navigation */}
      <AdminNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="admin-main">
        {children}
      </main>
    </div>
  )
}

export default AdminLayout
