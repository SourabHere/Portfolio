import React from 'react'
import './contact.css'

import {HiOutlineMail} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bx850go', 'template_i5f7cy8', form.current, 'WcpOMKI0GvIoslWto');
    e.target.reset();
      
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
              <article className='contact__option'>
                <HiOutlineMail className='contact__option-icon' />
                <h4>Email</h4>
                <h5>sourabpaul2002@gmail.com</h5>

                <a href="mailto:sourabpaul2002@gmail.com" target='_blank'>Send a message</a>

              </article>
              <article className='contact__option'>
                <BsLinkedin className='contact__option-icon' />
                <h4>LinkedIn</h4>
                <h5>Sourab Paul</h5>

                <a href="https://www.linkedin.com/in/sourab-paul-95ba77220/" target='_blank'>Send a message</a>

              </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>

    </section>
  )
}

export default Contact