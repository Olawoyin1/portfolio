import React from 'react'
import './portfolio.css'
import { motion } from 'framer-motion'
import  { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination"

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import data from './data';

// import 'swiper/swiper.min.css'


const main = {
  initial : {
    x : 100,
    opacity : 0
  },
  animate : {
    x : 0,
    opacity : 1,
    transition : {
      type : "spring",
      when : "beforeChildren",
      staggerChildren : 3
    }
  }
}

const portVariant = {
  initial : {
    y : -50,
    opacity : 0
  },
  animate : {
    y : 0,
    opacity : 1,
    rotate : [0 , 45 , -45, 0],
    transition : {
      // duration : 0.3,
      // delay : 0.3,
      type : "spring",
      ease : "easeInOut"
    }
  }
}

const childVar = {
  initial : {
    x : 100,
    opacity : 0
  },
  animate : {
    x : 0,
    opacity : 1,
    // rotate : [0 , 45 , -45, 0],
    transition : {
      duration : 0.3,
      delay : 0.4,
      type : "spring",
      stiffness : 200,
      ease : "easeInOut",
      staggerChildren : 1
    }
  }
}

const mainChild = {
  initial : {
    x : 100,
    opacity : 0
  },
  animate : {
    x : 0,
    opacity : 1,
    transition : {
      type : "spring",
      stifness : 200,
      bounce : 0.6,
      mass : 0.3
    }
  }
}


export default function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <div className="top">
        <h1>Portfolio</h1>
        <p>Most recent work</p>
      </div>
         <Swiper
          effect={"coverflow"}
          grabCursor={true}
          // loop={true}
          // loopedSlides={9}
          centeredSlides={true}
          slidesPerView={window.innerWidth > 800  ?  3 : "auto"}
          // slidesPerView={2}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            pagination={{
              el: '.my-custom-pagination-div',
              clickable: true,
              renderBullet: (index, className) => {
               return '<span class="' + className + '">' + "</span>";
              },
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            keyboard={true}
            mousewheel={true}
            scrollbar={{ draggable: true }}
            
            
          >
        {data.map((item, index) => {
          return(
            <SwiperSlide key={index}>
              <motion.div
                variants={main}
                initial="initial"
                animate="animate"
                className="main"
              >
                <motion.div 
                  variants={portVariant}
                  initial="initial"
                  whileInView="animate" 
                  viewport={{once : false, amount : 0.5}}
                  className="photo"
                >
                  <img src={item.image} alt={item.name} />
                </motion.div>
                <motion.div 
                  // variants={childVar}
                  // whileInView="animate"
                  variants={childVar}
                  initial="initial"
                  whileInView="animate" 
                  viewport={{once : false, amount : 0.5}}
                  className="desc"
                >
                  <motion.h3 variants={mainChild}>{item.name}</motion.h3>
                  <motion.p variants={mainChild}>{item.desc}</motion.p>
                  <motion.a 
                    variants={mainChild} 
                    href={item.link} 
                    className="btn explore"
                  >Explore</motion.a>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className="my-custom-pagination-div" />
    
    </div>
  )
}
