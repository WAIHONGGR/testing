import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import FloatingAIChat from './components/FloatingAIChat'
import Home from './pages/Home'
import Courses from './pages/Courses'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import AdminLogin from './pages/AdminLogin'
import SuperAdminLogin from './pages/SuperAdminLogin'
import StudentLogin from './pages/StudentLogin'
import InstructorLogin from './pages/InstructorLogin'
import Profile from './pages/Profile'
import StudentCourses from './pages/StudentCourses'
import StudentHistory from './pages/StudentHistory'
import AdminDashboard from './pages/AdminDashboard'
import SuperAdminDashboard from './pages/SuperAdminDashboard'
import InstructorDashboard from './pages/InstructorDashboard'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const hideChrome = ['/auth', '/admin-login', '/superadmin-login', '/login/student', '/login/instructor', '/admin-dashboard', '/superadmin-dashboard', '/instructor-dashboard'].includes(location.pathname)
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
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/superadmin-login" element={<SuperAdminLogin />} />
        <Route path="/superadmin-dashboard" element={<SuperAdminDashboard />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/instructor" element={<InstructorLogin />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-courses" element={<StudentCourses />} />
        <Route path="/my-history" element={<StudentHistory />} />
      </Routes>
      {!hideChrome && <Footer />}
      <FloatingAIChat />
    </div>
  )
}


export default App
