import React from 'react'
import './portfolio.css'

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
          return(<SwiperSlide key={index}>
            <div className="photo">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="desc">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <a href={item.link} className="btn explore">Explore</a>
            </div>
          </SwiperSlide>)
        })}
      </Swiper>

      <div class="my-custom-pagination-div" />
    
    </div>
  )
}
