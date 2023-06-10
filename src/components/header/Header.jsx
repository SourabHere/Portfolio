import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Me from '../../assets/me-av3.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I,m</h5>
        <h1>Sourab Paul</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
      <HeaderSocials />
      <div className="me">
        <img src={Me} alt="me" />
      </div>


      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>


    </header>
  )
}

export default Header