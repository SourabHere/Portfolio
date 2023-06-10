import React from 'react'

import {BsLinkedin,BsGithub} from 'react-icons/bs'

import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sourab-paul-95ba77220/" target='_blank'><BsLinkedin/></a>
        <a href="https://leetcode.com/sourabcodes" target='_blank'><SiLeetcode/></a>
        <a href="https://github.com/SourabHere" target='_blank'><BsGithub/></a>
        {/* <a href="https://www.cloudskillsboost.google/public_profiles/c5a53856-f85f-46da-ba9f-b0322950b228" target='_blank'></a>
        <a href="https://auth.geeksforgeeks.org/user/sourabcode404/practice" target='_blank'></a> */}
    </div>
  )
}

export default HeaderSocials