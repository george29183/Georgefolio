import React from 'react'
import Hero from '../components/hero/hero'
import Subhero from '../components/subhero/subhero'
import HomeSkills from '../components/skills/HomeSkills.jsx'
import Projects from '../components/projects/Projects.jsx'
import Contact from '../components/contact/contact.jsx'
import MainContact from '../components/contact/MainContact.jsx'
import Navbar from '../components/navbar/navbar.jsx'
import Footer from '../components/footer/footer.jsx'
export default function Home(){
  return (
  <>
  <Navbar/>
  <div className='max-w-[1600px] select-none overflow-hidden xl:mx-auto'>
  <Hero/>
  <Subhero/>
  <HomeSkills/>
  <Projects/>
  <MainContact/>
  </div>
  <Footer/>
  </>
  )
}

