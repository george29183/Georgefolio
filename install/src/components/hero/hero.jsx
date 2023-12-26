import React, { useEffect, useState } from 'react'
import img from '../assets/img.svg'
import { Link } from 'react-router-dom'

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
    <header className=' items-center text-slate-900 gap-1 sm:h-fit sm:flex mt-10'>
       <div className='basis-1/2 flex flex-col mb-5 mx-2'>
        <h1 className={` mx-auto  font-bold text-center xl:text-6xl lg:text-5xl text-3xl`}>GEORGE a <span className={` ${beat?'border-r':'border-transparent'} p-0 text-slate-600  border-r-slate-400`}>{text}</span></h1>
        <p className='lg:text-xl xl:text-3xl text-center'>
        Aiming to create a lasting experience for you, prioritizing privacy agreements and adhering to various statements in the contract. Fulfilling every need can be a challenge, but I'm dedicated to a professional and enduring experience that goes beyond meeting expectations.
        </p>
        <div className='self-center mt-3 flex xl:gap-6 gap-3'>
          <Link to='/about'><button className='relative py-2 px-8 text-black text-base font-bold
           rounded-lg overflow-hidden bg-slate-50 transition-all
            duration-700 ease-in-out shadow-md xl:text-3xl lg:text-2xl hover:scale-105 hover:text-white
             hover:shadow-lg active:scale-90 before:absolute before:top-0 
             before:-left-full before:w-full before:h-full before:bg-gradient-to-r
              before:from-slate-900 before:to-slate-500 before:transition-all
               before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg 
               hover:before:left-0'>Learn More</button></Link>
          
          <Link to='/contact'><button className='relative py-2 px-8 text-slate-50 text-base font-bold
            rounded-lg overflow-hidden bg-blue-500 transition-all
            duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white
             hover:shadow-lg active:scale-90 xl:text-3xl lg:text-2xl before:absolute before:top-0 
             before:-left-full before:w-full before:h-full before:bg-gradient-to-r
              before:from-slate-900 before:to-blue-600 before:transition-all
               before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg 
               hover:before:left-0'>Connect</button></Link>
        </div>
        
       </div>
       <div className='text-center basis-1/2 text-9xl'>
        <img src={img} alt="" />
       </div>
    </header>
  )
}

