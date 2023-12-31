import React, { useRef } from 'react'
import weddingRing from '../assets/pexels-sina-rezakhani-19525067.jpg'
import {useInView} from 'framer-motion'

function BodyThird() {
  const img = useRef(null)
  const inputs = useRef(null)
  const buttons = useRef(null)
  const buttonInView = useInView(buttons,{once:true})
  const InputInView = useInView(inputs,{once:true}) 
  const ImgIsInView = useInView(img,{once:true})
  return (
    <div className='bg-[#2B343D] px-[7%] py-10 flex flex-col lg:flex-row gap-14 '>
        <div className='basis-1/2'>
            <img
             ref={img}
            className={`h-96 ${ImgIsInView?"opacity-100 translate-y-0":"opacity-0 translate-y-full"} lg:w-full duration-1000 ease-in-out transform w-96`} src={weddingRing} alt="" />
        </div>
        <div className='basis-1/2 lg:ml-16 flex flex-col justify-center'>
            <h1 className='text-6xl  font-bold'>Lorem Ipsum</h1>
            <h2 className='text-xl mt-2 mb-5'>Lorem ipsum dolor sit, amet.</h2>
            <input
            ref={inputs}
            
            placeholder='BOB' className={`lg:w-[400px] ${InputInView?"opacity-100 translate-x-0":"opacity-0 -translate-x-full"} w-[100%] duration-[1.5s] ease-in-out transform  m-2 py-2 bg-[#363F48] px-2 rounded-sm`} type="text" />
            <input 
           ref={inputs}
            
           placeholder='BOB' className={`lg:w-[400px] ${InputInView?"opacity-100 translate-x-0":"opacity-0 translate-x-full"} w-[100%] duration-[1.5s] ease-in-out transform  m-2 py-2 bg-[#363F48] px-2 rounded-sm`} type="text" />
            <button 
            ref={buttons}
            className={`lg:w-[400px] ${buttonInView?"opacity-100":"opacity-0"} delay-1000 duration-1000 ease-in-out w-[100%] text-bold text-[#212121] ml-2  mt-3 py-2 rounded-sm bg-[#F3F7F8]`}>Submit</button>
        </div>
    </div>
  )
}

export default BodyThird