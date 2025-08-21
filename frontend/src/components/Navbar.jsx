import { Link } from 'react-router-dom'
import tarumtLogo from '../assets/images/TARUMT_Logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={tarumtLogo} alt="tarumt logo" className="nav-logo-img" />
          <h2>Tarumt LMS</h2>c
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <button className="nav-btn">Sign In</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 