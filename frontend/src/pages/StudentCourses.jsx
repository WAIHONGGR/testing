const StudentCourses = () => {
  const currentCourses = [
    { id: 1, title: 'Introduction to React', progress: 42 },
    { id: 2, title: 'Advanced JavaScript', progress: 10 },
  ]
  return (
    <div className="main-content">
      <section className="page-hero">
        <div className="hero-container"><div className="hero-content"><h1>My Courses</h1><p>Courses you are currently enrolled in</p></div></div>
      </section>
      <div className="container" style={{ padding: '20px 0 60px' }}>
        <div className="courses-grid">
          {currentCourses.map(c => (
            <div key={c.id} className="course-card">
              <div className="course-content">
                <h3>{c.title}</h3>
                <div className="course-meta"><span>Progress</span><span>{c.progress}%</span></div>
                <button className="course-btn">Continue</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentCourses


