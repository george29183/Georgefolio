import React from 'react'
import MdiFacebook from '../../../blog/components/subHero/MdiFacebook'
import MdiInstagram from '../../../blog/components/subHero/MdiInstagram'
import MdiLinkedin from '../../../blog/components/subHero/MdiLinkedin'

function LandingFooter() {
  return (
    <div className='bg-[#363F48] px-28 py-5 flex flex-col w-full'>
      <div className='flex flex-col lg:flex-row gap-5 justify-between p-5 items-center'>
        <h1 className='text-3xl font-bold'>Diamonds</h1>
        <ul className='flex text-2xl gap-10'>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Contact</li>
        </ul>
        <div className='flex gap-2'>
            <MdiFacebook className="hover:scale-105 active:scale-95 transition-all cursor-pointer" fill="currentColor"/>
            <MdiInstagram className="hover:scale-105 active:scale-95 transition-all cursor-pointer" fill="currentColor"/>
            <MdiLinkedin className="hover:scale-105 active:scale-95 transition-all cursor-pointer" fill="currentColor"/>
        </div>
        </div>
        <hr className='w-[98%] mx-auto'/>
        <h1 className='text-slate-800 pt-5 text-center text-2xl'>All Right's Reserved</h1>
      
    </div>
  )
}

export default LandingFooter