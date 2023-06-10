import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonials'
import Contact from './components/contacts/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Testimonial />
      <Experience />
      {/* <Service /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App