import React from 'react'
import './testimonials.css'
import { useEffect, useRef } from 'react';
import imgv from '../../assets/VILS.jfif'
import imgi from '../../assets/ignitus.jfif'
import imgc from '../../assets/chegg.jfif'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: imgv,
    name: "VILS AIT",
    role: "Software Developer Intern",
    description: "Successfully developed and deployed the authentication system for the application on a Linux server. Implemented multiple authentication methods, including Google login, OTP login, and GitHub login. FastAPI and Python were used for backend development."

  },
  {
    avatar: imgi,
    name: "Ignitus",
    role: "Machine Learning Intern",
    description: "Integrated datasets with 100,000+ records, addressing outliers and missing data. Developed KNN model which achieved 95% accuracy and improved precision and recall by 4%. Additionally, K-means clustering identified the top 5% VIP customers based on RFM scores."
  },
  {
    avatar: imgc,
    name: "Chegg",
    role: "Subject Matter Expert",
    description: "Resolved 100+ doubts for students globally on Chegg. Specializing in Python, Django, ML, FastAPI, Node.js, and DSA, I've provided clear explanations to help students tackle coding challenges. Guiding them through diverse development technologies and DSA concepts."
  }
]

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mq = window.matchMedia('(max-width: 1024px)');
      const slidesPerView = mq.matches ? 1 : 2;
      swiperRef.current.swiper.params.slidesPerView = slidesPerView;
      swiperRef.current.swiper.update();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id='testimonials'>
      <h5>My Industrial Works</h5>
      <h2>Experience</h2>

      <Swiper className="container testimonials__container" modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={2}
      pagination={{ clickable: true }}
      ref={swiperRef}
      >
        {
          data.map(({avatar,name,role,description},index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h3 className='client__name'>{role}</h3>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {description}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials