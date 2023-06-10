import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="service__head">
            <h3>Software Developer Intern</h3>
          </div>

          <ul className='service__list'>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>

              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>

              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>

              </li>
          </ul>

        </article>
        <article className='services'>
          <div className="service__head">
            <h3>Machine Learning Intern</h3>
          </div>

          <ul className='service__list'>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>

              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>

              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>

              </li>
          </ul>

        </article>
        <article className='services'>
          <div className="service__head">
            <h3>Subject Matter Expert</h3>
          </div>

          <ul className='service__list'>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
                
              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>

              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>

              </li>
              <li>
                <BsCheckLg className='service__list-icon' />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>

              </li>
          </ul>

        </article>
      </div>

    </section>
  )
}

export default Services