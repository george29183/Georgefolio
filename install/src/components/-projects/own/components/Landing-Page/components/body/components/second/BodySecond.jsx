import React from 'react'
import diamondWatch from '../assets/pexels-antony-trivet-9981148.jpg'
import diamondRing from '../assets/pexels-arjiv-exports-5362404.jpg'
import diamondEarRing from '../assets/pexels-say-straight-2735970.jpg'
import diamondNecklace from '../assets/pexels-the-glorious-studio-5442475.jpg'
import {motion, MotionConfig} from 'framer-motion'

function BodySecond() {
  return (
    <div className='w-full p-4 lg:p-8 bg-[#363F48]'>
        <div className='h-[80%] grid gap-3 lg:grid-cols-3 grid-cols-4 w-full lg:w-[90%] lg:mx-auto'>
         
           <img
          className=" hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-all duration-200 h-[100%] w-[100%] col-span-4 lg:col-span-2" src={diamondWatch} alt="" />
          <img 
          className=' hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-all col-span-2 duration-200 lg:col-span-1 h-[100%] w-[100%]' src={diamondRing} alt="" />
          <img 
          className=' hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-all duration-200 h-[100%] w-[100%] col-span-2 lg:col-span-1' src={diamondEarRing} alt="" />
          <img 
          className=' hover:scale-[1.02] hover:shadow-lg cursor-pointer transition-all duration-200 h-[100%] w-[100%] col-span-4 lg:col-span-2' src={diamondNecklace} alt="" />
          
        </div>
        
    </div>
  )
}

export default BodySecond