import React from 'react'
import { Link } from 'react-router-dom'

export default function EcomSubHero(){
  return (
    <div className='h-[max-content] lg:flex flex-row-reverse gap-2 items-center rounded-t-xl text-slate-50 bg-gradient-to-b from-orange-900 to-slate-100'>
        <div className='basis-1/2 p-2 flex flex-col items-center'>
            <h1  className='text-2xl xl:text-6xl lg:text-4xl text-center'>AFFORDABLE PRICES</h1>
            <p className='lg:text-xl text-center
            '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa autem recusandae architecto ratione, magnam eius! Placeat recusandae laborum illum neque temporibus, corporis omnis alias architecto ut sapiente, amet harum quidem.</p>
            <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/products"><button className='text-xl lg:text-2xl bg-slate-300 mt-4 rounded-xl py-2 px-6 text-slate-900 hover:scale-105 active:scale-95 hover:bg-red-700 hover:text-slate-50 transition'>Shop Now</button></Link>
        </div>
        <div className='basis-1/2 pt-8'>
        </div>
        </div>
  )
}

