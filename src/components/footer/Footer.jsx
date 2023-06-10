import React from 'react'
import './footer.css'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sourab</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testimonials">Experience</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://leetcode.com/sourabcodes"><SiLeetcode /></a>
        <a href="https://www.linkedin.com/in/sourab-paul-95ba77220/"><BsLinkedin /></a>
        <a href="https://github.com/SourabHere"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sourab, All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer