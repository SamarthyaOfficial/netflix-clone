import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">NETFLIX</Link>
      <div className="navbar-right">
        {isAuthenticated && (
          <>
            <span className="navbar-email">{user?.email}</span>
            <button type="button" className="navbar-signout" onClick={handleLogout}>Sign out</button>
          </>
        )}
      </div>
    </nav>
  )
}
