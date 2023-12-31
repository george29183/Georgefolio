import React,{useRef} from 'react'
import {useInView} from 'framer-motion'

function LandingSubHero() {
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})
  
  return (
    <div className='bg-[#363F48] flex-col lg:flex-row py-10 px-[7%] gap-10 flex justify-around'>
      <div 
      ref={ref}
      className={`flex gap-2 ${isInView?"opacity-100":"opacity-0"} transition-all duration-1000 ease-in-out items-start`}>
       <div className='rounded-[50%]  h-10 w-40 bg-[#aaaaaa]'></div>
       <div className='flex items-start flex-col'>
        <h1 className='text-2xl font-bold'>This is just an example</h1>
        <p className='pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa nulla esse optio debitis maiores totam aliquam vitae soluta aut itaque tempora expedita nesciunt, quod minima quibusdam molestias natus! Beatae.</p>
        <button className='p-2 opacity-60 hover:opacity-100 transition-all'>see more</button>
       </div>
      </div>
      <div className='bg-[#aaaaaa] opacity-10 lg:w-[2px] text-transparent h-[2px] lg:h-40'>d</div>
      <div div 
         ref={ref}
         className={`flex gap-2 ${isInView?"opacity-100":"opacity-0"} transition-all duration-1000 ease-in-out delay-200 items-start`}>
        <div className='rounded-[50%]  h-10 w-40 bg-[#aaaaaa]'></div>
       <div className='flex items-start flex-col'>
        <h1 className='text-2xl font-bold'>This is just an example</h1>
        <p className='pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa nulla esse optio debitis maiores totam aliquam vitae soluta aut itaque tempora expedita nesciunt, quod minima quibusdam molestias natus! Beatae.</p>
        <button className='p-2 opacity-60 hover:opacity-100 transition-all'>see more</button>
       </div>
      </div>
    </div>
  )
}

export default LandingSubHero