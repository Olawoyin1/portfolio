import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='main'>
        <h2>Error 404</h2>
        <p>Page you requested for cannot be found</p>
        <Link to={'/'} className='btn'>Back to Home</Link>
    </div>
  )
}
