import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {



  return (
    <div>
      <nav>
        <p><b>yustee2017@gmail.com</b></p>
        <ul>
          <NavLink className='links' to={'/'}>Home</NavLink>
          <NavLink className='links' to={'about'}>About</NavLink>
          <NavLink className='links' to={'blog'}>Blog</NavLink>
          <NavLink className='links' to={'portfolio'}>Portfolio</NavLink>
        </ul>
      </nav>
    </div>
  )
}
