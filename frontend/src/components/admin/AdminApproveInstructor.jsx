import React from 'react'

const AdminApproveInstructor = () => {
  return (
    <div className="admin-content">
      <div className="content-header">
        <h1>Approve Instructor with Qualification</h1>
        <p>Review and approve instructor applications based on their qualifications.</p>
      </div>
      
      {/* Filter Section */}
      <div className="filter-section">
        <div className="filter-group">
          <label>Status:</label>
          <select className="filter-select">
            <option value="all">All Applications</option>
            <option value="pending">Pending Review</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Qualification Level:</label>
          <select className="filter-select">
            <option value="all">All Levels</option>
            <option value="phd">PhD</option>
            <option value="masters">Master's</option>
            <option value="bachelor">Bachelor's</option>
            <option value="certification">Certification</option>
          </select>
        </div>
        <button className="filter-btn">Apply Filters</button>
      </div>

      {/* Applications Table */}
      <div className="applications-table">
        <table>
          <thead>
            <tr>
              <th>Applicant Name</th>
              <th>Email</th>
              <th>Qualification</th>
              <th>Experience</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr. Sarah Chen</td>
              <td>sarah.chen@email.com</td>
              <td>PhD Computer Science</td>
              <td>8 years</td>
              <td><span className="status pending">Pending</span></td>
              <td>
                <div className="action-buttons">
                  <button className="btn-approve">Approve</button>
                  <button className="btn-reject">Reject</button>
                  <button className="btn-view">View Details</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Prof. Michael Rodriguez</td>
              <td>michael.rodriguez@email.com</td>
              <td>Master's Data Science</td>
              <td>5 years</td>
              <td><span className="status pending">Pending</span></td>
              <td>
                <div className="action-buttons">
                  <button className="btn-approve">Approve</button>
                  <button className="btn-reject">Reject</button>
                  <button className="btn-view">View Details</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Dr. Emily Johnson</td>
              <td>emily.johnson@email.com</td>
              <td>PhD Mathematics</td>
              <td>12 years</td>
              <td><span className="status approved">Approved</span></td>
              <td>
                <div className="action-buttons">
                  <button className="btn-view">View Details</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminApproveInstructor
