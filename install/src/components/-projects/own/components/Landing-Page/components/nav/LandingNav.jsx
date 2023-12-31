import React from 'react'
import CiSketch from '../assets/CiSketch'


function LandingNav({className}) {
  return (
    <div className={`flex   z-50 bg-[#363F48] top-[121px] lg:top-[117px] ${className} items-center justify-between p-2 pt-2`}>
       <div className='basis-2/4 flex gap-1 items-center'>
        <CiSketch/>
        <h1 className='text-2xl uppercase'>Diamonds</h1>
       </div>
       <div className='basis-2/4 items-center flex xl:gap-40 gap-24 justify-end'>
       <ul className='lg:flex hidden justify-between xl:gap-24 gap-14'>
         <li>About Us</li>
         <li>Pricing</li>
         <li>Contact</li>
       </ul>
       
         <button className=' bg-[#F3F6FB] text-[#363F48] px-6 py-3 font-bold rounded-lg hover:scale-105 active:scale-95 transition-all'>Start</button>
         </div>
    </div>
  )
}

export default LandingNav