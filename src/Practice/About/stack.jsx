import React from 'react'
import Backend from './Backend'
import BackSkill from './BackSkill'

export default function Stack({ stack, stackIcon}) {

  console.log(stack);
  const [toggle, setToggle] = React.useState(true)

  const handleToggle = () =>{
    setToggle(!toggle)
  }

  
  const AllBackend = Backend.map(skill => {
    return(
      <BackSkill 
        key={skill.id}
        {...skill}
      />
    )
  })

  return (
    <div className="frontend">
        <div className="skill-header">
          <div className="stack">
            <i className={stackIcon}></i>
            <h3>{stack}</h3>
          </div>
          <i className={toggle ? "uil uil-angle-down rotate" : "uil uil-angle-down"} onClick={handleToggle}></i>
        </div>
        {toggle && <div className="each">
          {AllBackend}
        </div>}
    </div>
  )
}
