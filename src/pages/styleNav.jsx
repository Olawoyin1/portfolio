import React from 'react'
import { NavLink } from 'react-router-dom'

export default function StyledNavbar() {
  return (
    <div>
        <nav>
            <p>Olawoyingbolahan@gmail.com</p>
            <ul>
                <NavLink className='links' to='/'>Home</NavLink>
                <NavLink className='links' to='about'>About</NavLink>
                <NavLink className='links' to='blog'>Blog</NavLink>
                <NavLink className='links' to='workdone'>Workdone</NavLink>
            </ul>
        </nav>
    </div>
  )
}
