import React, { useState } from 'react'
import diamond from '../assets/diamond-1186139.jpg'
import MaterialSymbolsDoubleArrow from '../assets/MaterialSymbolsDoubleArrow'
import {motion} from 'framer-motion'


function LandingHero() {
  const [hover,setHover] = useState(false)
  return (
    <div className={` bg-[#171c21] relative h-screen`}>
       <img className={`rounded-sm p-2 h-screen w-full`} src={diamond} alt="" />
       <div className='w-full bottom-0 top-0 absolute  justify-center flex-col  flex'>
        <div className='bg-gradient-to-r text-transparent  from-slate-950 to-transparent absolute h-full w-full'></div>

        <div className='roboto ml-10 flex flex-col gap-5 lg:gap-40 text-slate-50 drop-shadow-2xl'>
          <motion.h1 
          initial={{
            opacity:0,
            x:-100
          }}
          animate={{
            opacity:1,
            x:0
          }}
          transition={{
            duration:1,
            ease:"backInOut"
          }}
          
          className='uppercase justify-self-center lg:text-9xl text-6xl'>Diamonds</motion.h1>
          <div className='lg:w-[20%] flex gap-2 flex-col w-[50%] pl-5 '>
            <motion.p
            initial={{
              opacity:0,
              y:-100
            }}
            animate={{
             opacity:1,
             y:0
            }}
            transition={{
              delay:1,
              ease:"easeIn",
              duration:1.4
            }}
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit
          Lorem ipsum dolor sit</motion.p>
          <motion.button
            initial={{
              opacity:0
            }}
            animate={{
             opacity:1,
           
            }}
            transition={{
              delay:2.4,
              duration:1.6
            }}
          onMouseLeave={()=>{setHover(false)}} onMouseOver={()=>{setHover(true)}} className='flex items-center gap-1 text-xl cursor-pointer hover:scale-105  transition-all'>read more 
           {hover?<MaterialSymbolsDoubleArrow className="transition-all translate-x-3"/>:<MaterialSymbolsDoubleArrow/>}
          </motion.button>
         
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default LandingHero