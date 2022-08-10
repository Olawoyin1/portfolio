import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Workdone() {
    // console.log(useParams())

   
    const {id} = useParams()
   
    

    // console.log(id)
  return (
    <div className='center'>
        <h1>Workdone Page</h1>
        <p>your id is {id}</p>
    </div>
  )
}
