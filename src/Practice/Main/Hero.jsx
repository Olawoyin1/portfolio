import React from 'react'
import './hero.css'
// import '../Navbar/navbar.css'

export default function Hero() {
  return (
    <div className="main" id='home'>

        <div className='hero_section'>
            <div className="hero_left">
                <p className='line'>HEY THERE !</p>
                <h1>I'm <span className="colored">Olawoyin</span> Gbolahan</h1>
                <p className='about'>A frontend Dev and a Backend dev with high level of experience in web designing and development. <br /><br /> I care deeply about creating a world class website to my clients, My custom built websiteare fast loading accessible and very easy to manage</p>
                <a href='#contact_me' className='btn btn-con'>Let's Connect <i class="uil uil-arrow-circle-right"></i></a>

                <div className="socials">
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
                </div>

            </div>
            <div className="hero_right">
                <img src="../../images/newme.png" className='image' alt="" />
                {/* <img src="../../images/user.png" className='image' alt="" /> */}
                <div className="blur"></div>
            </div>
        </div>
    
    </div>
  )
}
