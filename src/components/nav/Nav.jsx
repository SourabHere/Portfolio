import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineInfoCircle} from 'react-icons/ai'
import {LuContact} from 'react-icons/lu'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'
import {FcServices} from 'react-icons/fc'

import { useState } from 'react'

const Nav = () => {

  const [activeNav,setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><AiOutlineInfoCircle /></a>
      <a href="#testimonials" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiOutlineOfficeBuilding /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FcServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><LuContact /></a>
    </nav>
  )
}

export default Nav