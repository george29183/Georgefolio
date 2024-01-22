import React from 'react'
import LogosGithubIcon from '../skills/icons/LogosGithubIcon'
import SimpleIconsWhatsapp from '../assets/SimpleIconsWhatsapp'
import SimpleIconsLinkedin from '../assets/SimpleIconsLinkedin'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <section className='w-full bg-secBackground px-5 py-4'>
        <div className='max-w-[1600px] flex justify-between lg:flex-row flex-col items-center gap-8 lg:gap-0 xl:mx-auto'>
           <h1 className='text-3xl text-cardsText'>George</h1>
           <h2 className='text-xl text-cardsText'>Found what you want?</h2>
           <div className='flex gap-5 items-center'>
           <Link to='https://wa.me/qr/P7UYMXQPI7VDG1'><SimpleIconsWhatsapp fill="#f5f5f5"/></Link>
           <Link to="https://linkedin.com/in/mohammed-rabee-553416284"><SimpleIconsLinkedin fill="#f5f5f5"/></Link>
           <Link to="https://github.com/george29183"><LogosGithubIcon fill="#f5f5f5" className="w-[2em] h-[2em]"/></Link>
           </div>
        </div>
    </section>
  )
}

export default Footer