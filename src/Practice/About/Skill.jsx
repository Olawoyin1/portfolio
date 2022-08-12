import React from 'react'

export default function Skill({language, level}) {
  return (
    <div className='all'>
        <div className="lang">
            <h3>{language}</h3>
            <p className='raleway'>{level}</p>
        </div>
        <div className="level">
            <div className="roll"></div>
        </div>
    </div>
  )
}
