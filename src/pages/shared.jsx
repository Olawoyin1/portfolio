import React from 'react'
import {Outlet} from 'react-router-dom'
import StyledNavbar from './styleNav'
// import Navbar from './navbar'

export default function SharedLayout() {
  return (
    <div className='center'>
        <StyledNavbar />
        <Outlet />
    </div>
  )
}
