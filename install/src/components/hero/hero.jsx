import React, { useEffect, useState } from 'react'
import LogosGithubIcon from '../skills/icons/LogosGithubIcon'
import SimpleIconsWhatsapp from '../assets/SimpleIconsWhatsapp'
import SimpleIconsLinkedin from '../assets/SimpleIconsLinkedin'
import hero from '../assets/computer-dynamic-color.png'
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
    <header className='gap-1 bg-background pt-8 lg:mt-0  h-full sm:flex '>
       <div className='basis-1/2 flex flex-col mb-5 justify-center gap-5 z-10 mx-2'>
        <h1 className={` mx-auto  font-bold text-center text-textBlack xl:text-6xl lg:text-5xl text-3xl`}>GEORGE a <span className={` ${beat?'border-r':'border-transparent'} p-0  border-borderMove text-movingtext`}>{text}</span></h1>
        <p className='lg:text-xl xl:text-2xl text-center text-textBlack'>
         Searching for something? 
          </p>
        <div className='self-center mt-3 flex xl:gap-6 gap-3'>
         <Link to='https://wa.me/qr/P7UYMXQPI7VDG1'><div className='social rounded-2xl px-5 py-5 hover:scale-105 transition cursor-pointer hover:bg-[#4FCE5D]'>
          <SimpleIconsWhatsapp className=" lg:h-[1.7em] lg:w-[1.7em] h-[1em] w-[1em]"/>
         </div></Link>
         <Link to="linkedin.com/in/mohammed-rabee-553416284"><div className='social rounded-2xl px-5 py-5 hover:scale-105 transition cursor-pointer hover:bg-[#1877F2]'>
          <SimpleIconsLinkedin className=" lg:h-[1.7em] lg:w-[1.7em] h-[1em] w-[1em]"/>
         </div></Link>
         <Link to="https://github.com/george29183"><div className='social rounded-2xl px-5 py-5 hover:scale-105 transition cursor-pointer hover:bg-[#212121]'>
          <LogosGithubIcon className=" lg:h-[1.7em] lg:w-[1.7em] h-[1em] w-[1em]"/>
         </div></Link>
        </div>
        
       </div>
       <div className='relative justify-self-center  basis-1/2 sm:text-lg grape-nuts-regular lg:text-3xl text-2xl'>
        <img className='' src={hero} alt="" />
         <div className='absolute top-[35%] -skew-x-12 left-[53%] text-textBlack -translate-x-[50%]'> 
            Always Learning
         </div>
       </div>
      
    </header>
  )
}

