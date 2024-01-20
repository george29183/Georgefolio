import React from 'react'
import Contact from './contact'

function MainContact() {
  return (
    <section id='contact' className='flex px-12 lg:px-[135px] bg-[#f5f5f5] justify-center items-center  pt-4 pb-32 flex-col'>
        <h1 className='text-5xl'>Contact</h1>
        <hr className='w-[15%] border-black mb-3 mt-4'/>
        <p className='text-2xl mb-10'>Send Your Feedback </p>
        <Contact/>
    </section>
  )
}

export default MainContact