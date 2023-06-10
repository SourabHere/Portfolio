import React from 'react'
import './about.css'
import Me from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Me" />
          </div>
      </div>

      <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years working</small>

            </article>

            <article className="about__card">
              <FaAward  className='about__icon'/>
              <h5>Problem Solving</h5>
              <small>Among Top 11.93% in Leetcode contests</small>

            </article>

            <article className="about__card">
              <FaAward  className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ completed projects</small>

            </article>
          </div>

        <p>I'm a passionate coding enthusiast who thrives on the challenges of problem-solving and project development. With a strong foundation in programming and experience interning at two different companies, I have had the opportunity to work on a diverse range of tasks, including machine learning and software development engineering. My expertise lies in utilizing technologies like FastAPI, Django, Python, Node.js, and React.js to build robust and efficient web applications. I find joy in exploring the possibilities of Python, leveraging it for tasks such as machine learning projects.</p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>

    </section>
  )
}

export default About