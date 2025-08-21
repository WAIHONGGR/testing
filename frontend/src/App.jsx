import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import AdminLogin from './pages/AdminLogin'
import SuperAdminLogin from './pages/SuperAdminLogin'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const hideChrome = ['/auth', '/admin-login', '/superadmin-login'].includes(location.pathname)
  return (
    <div className="app">
      {!hideChrome && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/superadmin-login" element={<SuperAdminLogin />} />
      </Routes>
      {!hideChrome && <Footer />}
    </div>
  )
}


export default App
