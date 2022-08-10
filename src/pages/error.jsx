import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Error() {
  return (
    <div className='center'>
        <h2>Error 404</h2>
        <p>page you requeted for cannot be found</p>
        <Link to='/' className='btn'>Go Back</Link>
    </div>
  )
}
