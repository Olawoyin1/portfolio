import React from 'react'

export default function Skill({language, level}) {

  const styles = {
    width: level,
    backgroundImage : " linear-gradient(20deg, #dc6b6b, #845de1)",
    height : "100%",
    borderRadius : "10px"
  }

  

  return (
    <div className='all'>
        <div className="lang">
            <h3>{language}</h3>
            <p className='raleway'>{level}</p>
        </div>
        <div className="level">
            <div className="roll" style={styles}></div>
        </div>
    </div>
  )
}
