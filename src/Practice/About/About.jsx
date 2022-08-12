import React from 'react'
import './about.css'
import Skill from './Skill'
import Skills from './Frontend'
import Backend from './Backend'
import BackSkill from './BackSkill'
import Stacks from './All'
// import Stack from './stack'

export default function About() {

  const [toggle, setToggle] = React.useState(true)
  const [toggle2, setToggle2] = React.useState(true)

  const handleToggle = () =>{
    setToggle(prev => !prev)
  }
  
  const handleToggle2 = () =>{
    setToggle2(prev => !prev)
  }

  // const AllStack = Stacks.map(stack => {
  //   return(
  //     <Stack
  //       key={stack.id}
  //       {...stack}
  //       handleToggle = {handleToggle}
  //       toggle = {toggle}
  //     />
  //   )
  // })

  const All = Skills.map(skill => {
    return(
      <Skill 
        key={skill.id}
        {...skill}
      />
    )
  })

  const AllBackend = Backend.map(skill => {
    return(
      <BackSkill 
        key={skill.id}
        {...skill}
      />
    )
  })

  return (
    <div id='about' className='about-page'>

      <div className="grid">
        <div className="about-left">
          <div className="about-content">
            <h1>About Me</h1>
            <p>A web developer with 3+years experience, an excellent reputation of solving problems and improving customer satisfaction with a solid organization skill</p>
            <div className="experience">
              <div className="years">
                <h3 className='bold'>03+</h3>
                <p className='muted'>Years experience</p>
              </div>
              <div className="completed">
                <h3 className='bold'>10+</h3>
                <p className='muted'>Project completed</p>
              </div>
            </div>
            <button type='submit' className='btn download'>
                  <span>Download CV</span> 
                  <i class="uil uil-download-alt animated-icon"></i>
              </button>
          </div>
        </div>

        <div className="about-right">
          <div className="skill-content">
            <div className="header">
              <h1>Skills</h1>
              <p>My technical level</p>
            </div>

            <div className="skills">
              <div className="frontend">
                <div className="skill-header">
                  <div className="stack">
                    <i class="uil uil-brackets-curly"></i>
                    <h3>Frontend Developer</h3>
                  </div>
                  <i className={toggle ? "uil uil-angle-down rotate" : "uil uil-angle-down"} onClick={handleToggle}></i>
                </div>
                {!toggle && <div className={toggle ? "each show" : "each"}>
                  {All}
                </div>}
              </div>
             
              <div className="frontend">
                <div className="skill-header">
                  <div className="stack">
                    <i class="uil uil-server-connection"></i>
                    <h3>Backend Developer</h3>
                  </div>
                  <i className={toggle2 ? "uil uil-angle-down rotate" : "uil uil-angle-down"} onClick={handleToggle2}></i>
                </div>
                {!toggle2 && <div className={toggle2 ? "each show" : "each"}>
                  {AllBackend}
                  </div>}
              </div>

              {/* other way round will get back to it later */}
              {/* {AllStack} */}


            </div>

          </div>
        </div>
      </div>

      <div className="transparent first"></div>
      <div className="transparent second"></div>
      <div className="transparent third"></div>
     
    </div>
  )
}
