import { useState } from 'react'

const Courses = () => {
  const [courses] = useState([
    {
      id: 1,
      title: "Introduction to React",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      level: "Beginner",
      students: 1247,
      rating: 4.8,
      description: "Learn the fundamentals of React, including components, state, props, and hooks.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Prof. Michael Chen",
      duration: "10 weeks",
      level: "Intermediate",
      students: 892,
      rating: 4.9,
      description: "Master advanced JavaScript concepts including closures, promises, and async/await.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      instructor: "Dr. Emily Rodriguez",
      duration: "12 weeks",
      level: "Advanced",
      students: 1563,
      rating: 4.7,
      description: "Explore data analysis, visualization, and machine learning basics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      instructor: "Alex Thompson",
      duration: "16 weeks",
      level: "Beginner",
      students: 2103,
      rating: 4.6,
      description: "Complete guide to modern web development, from HTML to deployment.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    }
  ]);

  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="page-hero courses-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Explore Our Courses</h1>
            <p>Discover a wide range of courses taught by industry experts and take your skills to the next level</p>
          </div>
        </div>
      </section>

      <section className="courses-section">
        <div className="container">
          <div className="courses-filters">
            <select className="filter-select">
              <option value="">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            
            <select className="filter-select">
              <option value="">All Durations</option>
              <option value="short">4-8 weeks</option>
              <option value="medium">9-12 weeks</option>
              <option value="long">13+ weeks</option>
            </select>
          </div>

          <div className="courses-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-level">{course.level}</div>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p className="course-instructor">by {course.instructor}</p>
                  <p className="course-description">{course.description}</p>
                  <div className="course-meta">
                    <span className="course-duration">{course.duration}</span>
                    <span className="course-students">{course.students} students</span>
                    <span className="course-rating">⭐ {course.rating}</span>
                  </div>
                  <button className="course-btn">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses 