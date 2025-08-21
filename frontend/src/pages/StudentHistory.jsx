import { useState } from 'react'

const StudentHistory = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterYear, setFilterYear] = useState('all')
  
  const pastCourses = [
    { 
      id: 1, 
      title: 'Advanced JavaScript Programming', 
      instructor: 'Dr. Sarah Chen',
      completedOn: '2024-05-15',
      grade: 'A+',
      duration: '8 weeks',
      category: 'Programming',
      certificate: 'JS-ADV-2024-001',
      status: 'completed'
    },
    { 
      id: 2, 
      title: 'Data Science Fundamentals', 
      instructor: 'Prof. Michael Rodriguez',
      completedOn: '2024-03-20',
      grade: 'A',
      duration: '10 weeks',
      category: 'Data Science',
      certificate: 'DS-FUND-2024-002',
      status: 'completed'
    },
    { 
      id: 3, 
      title: 'Web Development Bootcamp', 
      instructor: 'Dr. Emily Johnson',
      completedOn: '2024-01-22',
      grade: 'A-',
      duration: '12 weeks',
      category: 'Web Development',
      certificate: 'WEB-BOOT-2024-003',
      status: 'completed'
    },
    { 
      id: 4, 
      title: 'UI/UX Design Principles', 
      instructor: 'Prof. David Kim',
      completedOn: '2023-11-30',
      grade: 'B+',
      duration: '6 weeks',
      category: 'Design',
      certificate: 'UIUX-DESIGN-2023-004',
      status: 'completed'
    },
    { 
      id: 5, 
      title: 'Python for Beginners', 
      instructor: 'Dr. Lisa Wang',
      completedOn: '2023-09-15',
      grade: 'A',
      duration: '8 weeks',
      category: 'Programming',
      certificate: 'PYTHON-BEG-2023-005',
      status: 'completed'
    }
  ]

  const filteredCourses = pastCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || course.status === filterStatus
    const matchesYear = filterYear === 'all' || course.completedOn.startsWith(filterYear)
    
    return matchesSearch && matchesStatus && matchesYear
  })

  const getYearOptions = () => {
    const years = [...new Set(pastCourses.map(course => course.completedOn.substring(0, 4)))]
    return years.sort((a, b) => b - a)
  }

  const getStats = () => {
    const total = pastCourses.length
    const avgGrade = pastCourses.reduce((sum, course) => {
      const gradeValue = course.grade === 'A+' ? 4.3 : 
                        course.grade === 'A' ? 4.0 :
                        course.grade === 'A-' ? 3.7 :
                        course.grade === 'B+' ? 3.3 :
                        course.grade === 'B' ? 3.0 : 2.7
      return sum + gradeValue
    }, 0) / total
    const totalWeeks = pastCourses.reduce((sum, course) => sum + parseInt(course.duration), 0)
    
    return { total, avgGrade: avgGrade.toFixed(1), totalWeeks }
  }

  const stats = getStats()

  return (
    <div className="main-content">
      <section className="page-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>My Learning History</h1>
            <p>Track your completed courses and achievements</p>
          </div>
        </div>
      </section>
      
      <div className="container" style={{ padding: '20px 0 60px' }}>
        {/* Statistics Section */}
        <div className="history-stats">
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-content">
              <div className="stat-number">{stats.total}</div>
              <div className="stat-label">Courses Completed</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <div className="stat-number">{stats.avgGrade}</div>
              <div className="stat-label">Average Grade</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-content">
              <div className="stat-number">{stats.totalWeeks}</div>
              <div className="stat-label">Total Weeks</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <div className="stat-number">{pastCourses.filter(c => c.grade === 'A+' || c.grade === 'A').length}</div>
              <div className="stat-label">Excellence Awards</div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="search-filter-section">
          <div className="search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search courses, instructors, or categories..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-options">
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="dropped">Dropped</option>
            </select>
            <select 
              value={filterYear} 
              onChange={(e) => setFilterYear(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Years</option>
              {getYearOptions().map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <span>Showing {filteredCourses.length} of {pastCourses.length} courses</span>
          {searchTerm && <span>for "{searchTerm}"</span>}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-header">
                  <div className="course-category">{course.category}</div>
                  <div className={`course-grade grade-${course.grade.replace('+', '-plus').replace('-', '-minus')}`}>
                    {course.grade}
                  </div>
                </div>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-instructor">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    {course.instructor}
                  </div>
                  <div className="course-meta">
                    <div className="meta-item">
                      <span className="meta-label">Completed:</span>
                      <span className="meta-value">{new Date(course.completedOn).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Duration:</span>
                      <span className="meta-value">{course.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Certificate:</span>
                      <span className="meta-value">{course.certificate}</span>
                    </div>
                  </div>
                  <div className="course-actions">
                    <button className="course-btn primary">View Certificate</button>
                    <button className="course-btn secondary">Course Details</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No courses found</h3>
              <p>Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StudentHistory


