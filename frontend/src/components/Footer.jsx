import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content container">
      <div className="footer-section">
        <h3>TARUMT LMS</h3>
        <p>Empowering minds, shaping futures.</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-links">
          <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} TARUMT LMS. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer; 