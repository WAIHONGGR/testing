const About = () => {
  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="page-hero about-hero animate-fade-in">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="animate-slide-up">About TARUMT</h1>
            <p className="animate-fade-in-delay">Empowering minds, shaping futures through innovation and excellence in education</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="mission-vision">
            <div className="mv-card animate-fade-in-up">
              <h2>Our Mission</h2>
              <p>To provide quality education and innovative learning experiences that prepare students for success in a rapidly evolving global landscape.</p>
            </div>

            <div className="mv-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2>Our Vision</h2>
              <p>To be a leading institution in technology and management education, recognized for excellence in teaching, research, and industry collaboration.</p>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-card interactive-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="about-icon">🎓</div>
              <h3>Excellence in Education</h3>
              <p>Committed to maintaining high academic standards and innovative teaching methods.</p>
            </div>

            <div className="about-card interactive-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="about-icon">🔬</div>
              <h3>Research Focus</h3>
              <p>Conducting cutting-edge research that contributes to technological advancement.</p>
            </div>

            <div className="about-card interactive-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="about-icon">🤝</div>
              <h3>Industry Partnership</h3>
              <p>Strong collaboration with industry leaders for real-world learning experiences.</p>
            </div>

            <div className="about-card interactive-card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="about-icon">🌏</div>
              <h3>Global Perspective</h3>
              <p>International outlook in education and research for a connected world.</p>
            </div>
          </div>

          <div className="history-section animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h2>Our History</h2>
            <p>TARUMT has a rich history of academic excellence and innovation. Since our establishment, we have been at the forefront of technology and management education, continuously evolving to meet the demands of the modern world.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 