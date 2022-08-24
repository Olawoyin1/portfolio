import React from 'react'
import './hero.css'
import { animate, motion } from 'framer-motion'
// import '../Navbar/navbar.css'

const heroLeft = {
    initial : {
        x : -1000,
        // opacity : 0
    },
    animate :  {
        x : 0,
        // opacity : 1,
        transition : {
            when : "beforeChildren",
            staggerChildren : 1.1,
            type : "spring",
            stiffness : 100
        }
        
    }
}

const childrenVariant = {
    initial : {
        opacity : 0,
        y : 40
    },
    animate : {
        opacity : 1,
        y : 0,
        transition : {
            duration : 0.3,
            type : "spring",
            stiffness : 200
        }
    }
}

const imageVariant = {
    initial : {
        y : 1000,
        opacity : 0
    },
    animate : {
        y : 0,
        opacity : 1,
        transition : {
            delay : 1.5, 
            duration : 1,
            type : "spring", 
            stiffness : 100,
            bounce : 1
        }
    }
}

export default function Hero() {
  return (
    <div className="main" id='home'>

        <div className='hero_section'>
            <motion.div className="hero_left"
                variants={heroLeft}
                initial="initial"
                animate={"animate"}
                // whileInView={"animate"}
                viewport={{once : true , amount : 0.5}}
            >
                <motion.p 
                    variants={childrenVariant}  
                    initial="initial"
                    animate="animate" 
                    className='line'
                >HEY THERE ! 👋 </motion.p>
                <motion.h1 
                    variants={childrenVariant}
                >I'm <span className="colored">Olawoyin</span> Gbolahan</motion.h1>
                <motion.p 
                    variants={childrenVariant} 
                    className='about'
                >A frontend Dev and a Backend dev with high level of experience in web designing and development. <br /><br /> I care deeply about creating a world class website to my clients, My custom built websiteare fast loading accessible and very easy to manage</motion.p>
                <motion.a 
                    variants={childrenVariant}  
                    href='#contact_me' 
                    className='btn btn-con'
                >Let's Connect <i class="uil uil-arrow-circle-right"></i></motion.a>

                <motion.div     
                    variants={childrenVariant} 
                    className="socials"
                >
                    <a href='https://github.com/Olawoyin1'>
                        <img src="../../images/github.png" alt="" />
                        <span> Github</span>
                    </a>
                    <a href='https://www.linkedin.com/in/yusuf-olawoyin-307287228/'>
                        <img src="../../images/linkedin.png" alt="" />
                        <span> LinkedIn</span>
                    </a>
                    <a href='https://www.instagram.com/olawoyin_gbolahan/'>
                        <img src="../../images/instagram.png" alt="" />
                        <span>Instagram</span>
                    </a>
                    <a href='https://twitter.com/olawoyinGbolah3'>
                        <img src="../../images/twitter.png" alt="" />
                        <span>Twitter</span>
                    </a>
                </motion.div>

            </motion.div>
            <motion.div 
                variants={imageVariant}
                initial="initial"
                animate="animate"
                className="hero_right"
            >
                <motion.img 
                    src="../../images/newme.png"
                    className='image' 
                    alt="" 
                    
                />
                {/* <img src="../../images/user.png" className='image' alt="" /> */}
                <div className="blur"></div>
            </motion.div>
        </div>
    
    </div>
  )
}
