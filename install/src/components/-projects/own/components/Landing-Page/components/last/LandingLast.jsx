import React from 'react'
import lastImg from './175898.jpg'
import {useInView} from 'framer-motion'
import { useRef } from 'react'

function LandingLast() {
  const first = useRef(null)
  const second = useRef(null)
  const secondInView = useInView(second,{once:true})
  const firstInView = useInView(first,{once:true})
  return (
    <div  className='bg-[#2B343D]  overflow-hidden lg:gap-32 gap-10 flex-col lg:flex-row flex px-[7%] py-10 '>
        <div className='flex gap-5 flex-col'>
            <h1
            ref={first}
             
            className={`text-5xl ${firstInView?"translate-y-0 opacity-100":"-translate-y-full opacity-0"} transform duration-1000 ease-in-out p-5`}> Last One You Will See In This Landing-Page </h1>
            <img
            ref={first}
            
            className={`h-[500px] ${firstInView?" rotate-0 scale-100 opacity-100":"rotate-[70deg] opacity-0 scale-0"} duration-[1.5s] ease-in-out w-[900px]`} src={lastImg} alt="" />
        </div>
        <div className='flex flex-col w-[90%] lg:w-[60%] lg:mx-auto gap-5 justify-center'>
            < h1 
            ref={second}
            className={`text-4xl w-[90%] ${secondInView?"translate-x-0 opacity-100":"-translate-x-full opacity-0"} pt-16 delay-[1.2s] duration-1000 ease-in-out p-4`}>While This Text Was The Only Thing You Saw</h1>
            <p
            ref={second}
              
            className={`text-2xl ${secondInView?"translate-x-0 opacity-100":"translate-x-full opacity-0"} delay-[1.8s] duration-1000 ease-in-out  px-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolores, rem odit ipsa accusantium beatae aut est facere maxime placeat, numquam officia dolorum ducimus? Doloremque inventore repudiandae officiis rerum ducimus.</p>
            <button
             
            className={`text-left mt-3 ml-4 text-xl text-slate-400 hover:scale-105 active:scale-95 transition-all w-[30%] ${secondInView?"opacity-100 ":"opacity-0"} delay-[2.5s] duration-1000 ease-in-out hover:text-slate-300`}>See More</button>
        </div>
    </div>
  )
}

export default LandingLast