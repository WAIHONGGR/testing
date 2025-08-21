import React from 'react'

const AdminInstructorCRUD = () => {
  return (
    <div className="admin-content">
      <div className="content-header">
        <h1>Instructor Account Management</h1>
        <p>Manage instructor accounts - Create, Read, Update, and Delete.</p>
      </div>
      
      {/* Action Buttons */}
      <div className="crud-actions">
        <button className="btn-primary">+ Add New Instructor</button>
        <button className="btn-secondary">Bulk Actions</button>
      </div>

      {/* Search and Filter */}
      <div className="search-filter-section">
        <div className="search-box">
          <input type="text" placeholder="Search instructors..." />
          <button className="search-btn">Search</button>
        </div>
        <div className="filter-options">
          <select className="filter-select">
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </select>
          <select className="filter-select">
            <option value="all">All Departments</option>
            <option value="computer-science">Computer Science</option>
            <option value="mathematics">Mathematics</option>
            <option value="business">Business</option>
          </select>
        </div>
      </div>

      {/* Instructors Table */}
      <div className="instructors-table">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Dr. Sarah Chen</td>
              <td>sarah.chen@email.com</td>
              <td>Computer Science</td>
              <td><span className="status active">Active</span></td>
              <td>2024-01-15</td>
              <td>
                <div className="action-buttons">
                  <button className="btn-edit">Edit</button>
                  <button className="btn-suspend">Suspend</button>
                  <button className="btn-delete">Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Prof. Michael Rodriguez</td>
              <td>michael.rodriguez@email.com</td>
              <td>Data Science</td>
              <td><span className="status active">Active</span></td>
              <td>2024-02-01</td>
              <td>
                <div className="action-buttons">
                  <button className="btn-edit">Edit</button>
                  <button className="btn-suspend">Suspend</button>
                  <button className="btn-delete">Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Dr. Emily Johnson</td>
              <td>emily.johnson@email.com</td>
              <td>Mathematics</td>
              <td><span className="status suspended">Suspended</span></td>
              <td>2023-11-20</td>
              <td>
                <div className="action-buttons">
                  <button className="btn-edit">Edit</button>
                  <button className="btn-activate">Activate</button>
                  <button className="btn-delete">Delete</button>
                </div>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Prof. David Wilson</td>
              <td>david.wilson@email.com</td>
              <td>Business</td>
              <td><span className="status inactive">Inactive</span></td>
              <td>2023-08-10</td>
              <td>
                <div className="action-buttons">
                  <button className="btn-edit">Edit</button>
                  <button className="btn-activate">Activate</button>
                  <button className="btn-delete">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="page-btn">Previous</button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">Next</button>
      </div>
    </div>
  )
}

export default AdminInstructorCRUD
