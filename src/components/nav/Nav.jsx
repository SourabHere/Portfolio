import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineInfoCircle} from 'react-icons/ai'
import {LuContact} from 'react-icons/lu'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
// import {FcServices} from 'react-icons/fc'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'

import { useState, useEffect } from 'react'

const Nav = () => {


  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const sections = ['#home', '#about', '#testimonials', '#portfolio', '#contact'];
      const sectionOffsets = sections.map((section) => {
        const element = document.querySelector(section);
        return element ? element.offsetTop : 0;
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let activeSection = '#home';
      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i]) {
          activeSection = sections[i];
          break;
        }
      }

      setActiveNav(activeSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#home')} className = {activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineInfoCircle /></a>
      {/* <a href="#testimonials" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiOutlineOfficeBuilding /></a> */}
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><HiOutlineOfficeBuilding /></a>
      {/* <a href="#portfolio" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FcServices /></a> */}
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdOutlineMiscellaneousServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><LuContact /></a>
    </nav>
  )
}

export default Nav