import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import NavBar from './Navbar'
import './style.css'

export default function SharedLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>

  )
}
