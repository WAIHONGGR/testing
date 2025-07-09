import { useState } from 'react'

const Home = () => {
  const [courses] = useState([
    {
      id: 1,
      title: "Introduction to React",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      level: "Beginner",
      students: 1247,
      rating: 4.8,
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
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    }
  ]);

  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Transform Your Future with Online Learning</h1>
            <h1>Transform Your Future with Online Learning</h1>

            <p>Access world-class education from anywhere. Learn from industry experts and advance your career with our comprehensive online courses.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Browse Courses</button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>50K+</h3>
              <p>Students</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>Courses</p>
            </div>
            <div className="stat">
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="courses" id="courses">
        <div className="container">
          <div className="section-header">
            <h2>Featured Courses</h2>
            <p>Discover our most popular courses and start your learning journey today</p>
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

export default Home 