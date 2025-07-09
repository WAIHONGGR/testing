import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="page-hero contact-hero animate-fade-in">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="animate-slide-up">Contact Us</h1>
            <p className="animate-fade-in-delay">We're here to help! Reach out to us with any questions or inquiries</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="contact-item interactive-card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="contact-icon">📍</div>
                <h3>Address</h3>
                <p>Jalan Genting Kelang, Setapak</p>
                <p>53300 Kuala Lumpur</p>
              </div>

              <div className="contact-item interactive-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="contact-icon">📞</div>
                <h3>Phone</h3>
                <p>+60 3-4145 0123</p>
              </div>

              <div className="contact-item interactive-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="contact-icon">✉️</div>
                <h3>Email</h3>
                <p>info@tarumt.edu.my</p>
              </div>
            </div>

            <form className="contact-form animate-fade-in-up" style={{ animationDelay: '0.4s' }} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-animate"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-animate"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-animate"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-animate"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 