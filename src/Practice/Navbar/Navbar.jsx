import React, { useEffect } from 'react'
import './navbar.css'
import { motion } from 'framer-motion'

export default function Navbar({toggle, handleToggle}) {

  const [active, SetActive] = React.useState("home")
  const [scroll, SetScroll] = React.useState(false)
  const [nav, setNav] = React.useState(false)

  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 30){
      SetScroll(true)
    }else{
      SetScroll(false)
    }
    
  })

  const navVariant = {
    initial : {
      y : -100,
      opacity : 0 
    },
    animate : {
      y : [0 , 100, 0],
      opacity : 1,
      transition : {
        type : "spring",
        duration : 1,
        stifness : 150,
        bounce : 100
      }
    }
  }




  
  const handeNav = (value) => {
    SetActive(value)
  }

  function handleNavigation(){
    setNav(!nav)
  }
  
 

  return (
    <motion.div
      className={scroll ? "nav scrolled" : "nav" }
      variants={navVariant}
      initial="initial"
      animate="animate"
    >
      <nav >

        <div className="mail">
          {/* <i className="uil uil-envelope"></i> */}
          <img src="../../images/email.png" className='mail-image' alt="" />
          <p>yustee2017@gmail.com</p>
        </div>

        <ul className={nav ? "show" : ""}>
          <li>
            <a href="#home" className={active === 'home' ? "links active" : "links"} onClick={() => handeNav('home')}>Home</a>
          </li>

          <li>
            <a href="#about" className={active === 'about' ? "links active" : "links"} onClick={() => handeNav('about')}>About</a>
          </li>

          <li>
            <a href="#portfolio" className={active === 'portfolio' ? "links active" : "links" } onClick={() => handeNav('portfolio')}>Portfolio</a>
          </li>

          <li>
            <a href="#contact_me" className={active === 'contact' ? "links contact active" : "links contact"} onClick={() => handeNav('contact')}>Contact Me</a>
          </li>
          <div className={toggle ? "toggle active" : "toggle"}>
            <i className="uil uil-brightness"></i>
            <i className="uil uil-moon"></i>
            <div className={toggle ? "scroll active" : "scroll"} onClick={handleToggle}></div>
          </div>


        </ul>

        <div className={toggle ? "toggle active mobile" : "toggle mobile"}>
          <i className="uil uil-brightness"></i>
          <i className="uil uil-moon"></i>
          <div className={toggle ? "scroll active" : "scroll"} onClick={handleToggle}></div>
        </div>

        <button className='navigation' onClick={handleNavigation}>
          {nav ? <i className='uil uil-times' ></i> : <i className='uil uil-bars'></i>}
        </button>

      </nav>
    </motion.div>
  )
}
