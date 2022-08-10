import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav>
            <p>Olawoyingbolahan@gmail.com</p>
            <ul>
                <Link className='links' to='/'>Home</Link>
                <Link className='links' to='about'>About</Link>
                <Link className='links' to='blog'>Blog</Link>
            </ul>
        </nav>
    </div>
  )
}
