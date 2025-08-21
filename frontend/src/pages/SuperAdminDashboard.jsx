import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const SuperAdminDashboard = () => {
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  // Mock data for admin accounts
  const adminAccounts = [
    {
      id: 1,
      name: 'John Admin',
      email: 'john.admin@tarumt.edu.my',
      accessLevel: 'full',
      status: 'active',
      lastLogin: '2024-01-15 14:30',
      createdDate: '2023-06-01',
      permissions: ['User Management', 'System Settings', 'Reports']
    },
    {
      id: 2,
      name: 'Sarah Manager',
      email: 'sarah.manager@tarumt.edu.my',
      accessLevel: 'limited',
      status: 'active',
      lastLogin: '2024-01-14 09:15',
      createdDate: '2023-08-15',
      permissions: ['User Management', 'Reports']
    },
    {
      id: 3,
      name: 'Michael Supervisor',
      email: 'michael.supervisor@tarumt.edu.my',
      accessLevel: 'readonly',
      status: 'inactive',
      lastLogin: '2024-01-10 16:45',
      createdDate: '2023-09-20',
      permissions: ['Reports']
    },
    {
      id: 4,
      name: 'Emily Coordinator',
      email: 'emily.coordinator@tarumt.edu.my',
      accessLevel: 'limited',
      status: 'suspended',
      lastLogin: '2024-01-05 11:20',
      createdDate: '2023-07-10',
      permissions: ['User Management']
    }
  ]

  const filteredAdmins = adminAccounts.filter(admin => {
    const matchesSearch = admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         admin.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || admin.status === filterStatus
    
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'active'
      case 'inactive': return 'inactive'
      case 'suspended': return 'suspended'
      default: return 'inactive'
    }
  }



  return (
    <div className="admin-layout">
      {/* Left Sidebar Navigation */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <div className="admin-avatar">
            {user?.name?.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase()}
          </div>
          <div className="admin-info">
            <div className="admin-name">{user?.name}</div>
            <div className="admin-role">Super Administrator</div>
          </div>
        </div>
        
        <nav className="sidebar-nav">
          <button className="nav-item active">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Admin Management
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16,17 21,12 16,7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <div className="admin-content">
          <div className="content-header">
            <h1>Admin Account Management</h1>
            <p>Manage administrator accounts and their access levels. As a Super Administrator, you have full control over all admin accounts.</p>
          </div>
          
                     {/* Statistics Cards */}
           <div className="stats-grid">
             <div className="stat-card">
               <div className="stat-icon">👥</div>
               <div className="stat-content">
                 <div className="stat-number">{adminAccounts.length}</div>
                 <div className="stat-label">Total Admins</div>
               </div>
             </div>
             <div className="stat-card">
               <div className="stat-icon">✅</div>
               <div className="stat-content">
                 <div className="stat-number">{adminAccounts.filter(a => a.status === 'active').length}</div>
                 <div className="stat-label">Active Admins</div>
               </div>
             </div>
             <div className="stat-card">
               <div className="stat-icon">⚠️</div>
               <div className="stat-content">
                 <div className="stat-number">{adminAccounts.filter(a => a.status === 'suspended').length}</div>
                 <div className="stat-label">Suspended</div>
               </div>
             </div>
           </div>

          {/* Action Buttons */}
          <div className="crud-actions">
            <button className="btn-primary">+ Add New Admin</button>
            <button className="btn-secondary">Bulk Actions</button>
          </div>

          {/* Search and Filter */}
          <div className="search-filter-section">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search admin accounts..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-btn">Search</button>
            </div>
                         <div className="filter-options">
               <select 
                 className="filter-select"
                 value={filterStatus}
                 onChange={(e) => setFilterStatus(e.target.value)}
               >
                 <option value="all">All Status</option>
                 <option value="active">Active</option>
                 <option value="inactive">Inactive</option>
                 <option value="suspended">Suspended</option>
               </select>
             </div>
          </div>

          {/* Admin Accounts Table */}
          <div className="instructors-table">
            <table>
                             <thead>
                 <tr>
                   <th><input type="checkbox" /></th>
                   <th>Admin Name</th>
                   <th>Email</th>
                   <th>Status</th>
                   <th>Last Login</th>
                   <th>Created Date</th>
                   <th>Actions</th>
                 </tr>
               </thead>
              <tbody>
                {filteredAdmins.map(admin => (
                                     <tr key={admin.id}>
                     <td><input type="checkbox" /></td>
                     <td>{admin.name}</td>
                     <td>{admin.email}</td>
                     <td>
                       <span className={`status ${getStatusColor(admin.status)}`}>
                         {admin.status.charAt(0).toUpperCase() + admin.status.slice(1)}
                       </span>
                     </td>
                     <td>{admin.lastLogin}</td>
                     <td>{admin.createdDate}</td>
                     <td>
                       <div className="action-buttons">
                         <button className="btn-edit">Edit</button>
                         <button className="btn-view">View Details</button>
                         {admin.status === 'active' ? (
                           <button className="btn-suspend">Suspend</button>
                         ) : (
                           <button className="btn-activate">Activate</button>
                         )}
                         <button className="btn-delete">Delete</button>
                       </div>
                     </td>
                   </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SuperAdminDashboard
