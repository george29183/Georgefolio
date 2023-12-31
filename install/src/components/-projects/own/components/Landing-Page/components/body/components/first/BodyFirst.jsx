import React,{useRef} from 'react'
import diamond1 from '../assets/diamond-1475978_1920.png'
import thePhotos from '../assets/fivePhotos'
import {useInView} from 'framer-motion'


function BodyFirst() {
  const ref = useRef(null)
  const para = useRef(null)
  const circles = useRef(null)
  const circlesInView = useInView(circles,{once:true})
  const paraInView = useInView(para,{once:true})
  const isInView = useInView(ref,{once:true})
    const smallImg = thePhotos.map((item,i)=>{
      return ( <img
      ref={ref}
      className={` cursor-pointer ${isInView?"opacity-100":"opacity-0"} ease-in-out duration-700 delay-[${i-0.8}s] lg:w-[100%] lg:h-[82px] h-[73.6px]`} key={i} src={item.img}/>)
    })
  return (
    <div className='flex gap-10 p-10 lg:px-28 lg:flex-row flex-col justify-around bg-[#2B343D]'>
        <div className='flex h-[max-content] basis-1/2 pt-8 lg:pr-10 flex-col gap-3'>
           <div className='p-5'>
                 <h1
                 ref={para}
                 className={`text-3xl ${paraInView?"scale-100":"scale-0"} transition-all duration-700  ease-in-out font-bold lg:text-2xl`}>This is another section</h1>
                 <p 
                 ref={para}
                className={`p-2 lg:text-sm ${paraInView?"opacity-100":"opacity-0 "} transition-all duration-700 ease-in-out text-xl`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quidem accusantium dolore obcaecati quibusdam error temporibus explicabo?</p>
           </div>
           <div ref={para} className={`bg-[#aaaaaa]  text-transparent ${paraInView?"opacity-10 w-full":"opacity-0 w-0"} transition-all duration-1000 ease-in-out mx-2 h-[2px]`}>d</div>
           <div className='flex flex-col lg:flex-row gap-2'>
             <div className='flex p-2 flex-col basis-1/2 gap-2'>
             <div 
             ref={circles}
             className={`rounded-[50%] ${circlesInView?"opacity-100 scale-100":"opacity-0 scale-0"} transition-all duration-1000 ease-in-out ml-2 h-10 w-16 bg-[#aaaaaa] mb-3`}></div>
               <h1
               ref={circles}
               className={`text-2xl font-bold transform  duration-1000 delay-700 ease-in-out ml-2 lg:text-xl ${circlesInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full delay-700'}`}
                        >This is a smaller section</h1>
               <p
               ref={circles}
               className={`pl-4 delay-[1200ms] duration-1000 ease-in-out transform ${circlesInView?"opacity-100 translate-y-0":"opacity-0 translate-y-full"} lg:text-sm`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ipsa omnis, </p>
             </div>
             <div className='flex p-2 basis-1/2 flex-col gap-2'>
             <div
             ref={circles}
             className={`rounded-[50%] ${circlesInView?"opacity-100 scale-100":"opacity-0 scale-[2]"} transition-all duration-1000 ease-in-out ml-2 h-10 w-16 bg-[#aaaaaa] mb-3`}></div>
               <h1
               ref={circles}
               className={`text-2xl font-bold transform  duration-1000 delay-700 ease-in-out ml-2 lg:text-xl ${circlesInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full delay-700'}`}>This is a smaller section</h1>
               <p
              ref={circles}
              className={`pl-4 delay-[1200ms] duration-1000 ease-in-out transform ${circlesInView?"opacity-100 translate-y-0":"opacity-0 translate-y-full"} lg:text-sm`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ipsa omnis, </p>
             </div>
           </div>
        </div>
        <div className='basis-1/2 h-full gap-1 flex lg:gap-2 lg:flex-col'>
         <img 
         ref={ref}
         className={`h-96 ease-in-out duration-700 delay-700 cursor-pointer lg:w-[100%] ${isInView?"opacity-100":"opacity-0"} w-[80%]`} src={diamond1} alt="" />
         <div className='lg:grid flex  flex-col  gap-1 grid-cols-5'>
           {smallImg}
         </div>
        </div>
    </div>
  )
}

export default BodyFirst