import React from 'react'
import { Link } from 'react-router-dom'
export default function EcomHero(){

  return (
    <section className='text-slate-900 pb-5  h-[max-content]  bg-slate-50'>
     <div className='lg:flex mb-5 gap-2 items-center'>
        <div className='basis-1/2 p-2 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-6xl lg:text-4xl text-center'>NEW COLLECTIONS</h1>
            <p className='lg:text-xl text-center
            '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed harum iure, cupiditate voluptatem iste soluta laborum laudantium? Ratione modi unde aspernatur quaerat blanditiis saepe et libero quos eum. Perspiciatis, nemo!</p>
           <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/products"> <button className='text-xl lg:text-2xl bg-slate-300 mt-4 rounded-xl py-2 px-6 text-slate-900 hover:scale-105 active:scale-95 hover:bg-slate-900 hover:text-slate-50 transition'>Explore</button></Link>
        </div>
        <div className='text-8xl text-center basis-1/2'>
          
        </div>

     </div>
    </section>
  )
}

