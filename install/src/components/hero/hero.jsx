import React, { useEffect, useState } from 'react'
import img from '../assets/img.svg'
import { Link } from 'react-router-dom'
import SimpleIconsFacebook from '../assets/SimpleIconsFacebook'
import SimpleIconsWhatsapp from '../assets/SimpleIconsWhatsapp'
import SimpleIconsLinkedin from '../assets/SimpleIconsLinkedin'
import SimpleIconsX from '../assets/SimpleIconsX'

export default function Hero(){
  const word = ['Friend','Teammate','Web Developer']
  const [isDeleting,setIsDeleting] = useState(false)
  const [text,setText] = useState('')
  const [loopNum,setLoopNum] = useState(0)
  const [beat,setBeat] = useState(true)
  const [delta,setDelta] = useState(300 - Math.random * 100)
  const period = 2000
  useEffect(()=>{
    let ticker = setInterval(()=>{
    tick()
    },delta)
    
  return ()=> clearInterval(ticker)
  
},[text])

const tick = ()=>{
  let i = loopNum % word.length
  let fulltext = word[i]
  let updatedtext = isDeleting? fulltext.substring(0,text.length - 1):fulltext.substring(0,text.length + 1)

  setText(updatedtext)
  setBeat(!beat)

  if(isDeleting){
    setDelta(prev => prev/2)
  }

  if(!isDeleting && updatedtext === fulltext){
    setIsDeleting(true)
    setDelta(period)
  }else if(isDeleting && updatedtext === ''){
    setIsDeleting(false)
    setLoopNum(loopNum + 1)
    setDelta(500)
  }
}

  return (
    <header className='gap-1 bg-[#f5f5f5]  h-full sm:flex '>
       <div className='basis-1/2 flex flex-col mb-5 justify-center gap-5 z-10 mx-2'>
        <h1 className={` mx-auto  font-bold text-center  xl:text-6xl lg:text-5xl text-3xl`}>GEORGE a <span className={` ${beat?'border-r':'border-transparent'} p-0 text-stone-700 border-r-slate-400`}>{text}</span></h1>
        <p className='lg:text-xl xl:text-2xl text-center '>
        Aiming to create a lasting experience for you, prioritizing privacy agreements and adhering to various statements in the contract. Fulfilling every need can be a challenge, but I'm dedicated to a professional and enduring experience that goes beyond meeting expectations.
        </p>
        <div className='self-center mt-3 flex xl:gap-6 gap-3'>
         <div className='social px-5 rounded-2xl py-5 hover:scale-105 transition cursor-pointer hover:bg-[#1877F2]'>
          <SimpleIconsFacebook className=" lg:h-[1.7em] lg:w-[1.7em] h-[1em] w-[1em]"/>
         </div>
         <div className='social rounded-2xl px-5 py-5 hover:scale-105 transition cursor-pointer hover:bg-[#4FCE5D]'>
          <SimpleIconsWhatsapp className=" lg:h-[1.7em] lg:w-[1.7em] h-[1em] w-[1em]"/>
         </div>
         <div className='social rounded-2xl px-5 py-5 hover:scale-105 transition cursor-pointer hover:bg-[#1877F2]'>
          <SimpleIconsLinkedin className=" lg:h-[1.7em] lg:w-[1.7em] h-[1em] w-[1em]"/>
         </div>
         <div className='social rounded-2xl px-5 py-5 hover:scale-105 transition cursor-pointer hover:bg-[#212121]'>
          <SimpleIconsX className=" lg:h-[1.7em] lg:w-[1.7em] h-[1em] w-[1em]"/>
         </div>
        </div>
        
       </div>
       <div className=' justify-self-center basis-1/2 text-9xl'>
        <img src={img} alt="" />
       </div>
      
    </header>
  )
}

