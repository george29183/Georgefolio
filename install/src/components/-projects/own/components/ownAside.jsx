import React from 'react'
import { Link } from 'react-router-dom'

export default function OwnAside(){
  return (
    <div className='absolute  top-16 text-slate-100 right-0 p-4 w-[40%] rounded-xl bg-slate-800 h-[max-content]'>
        <ul className='text-xl flex-col flex gap-4'>
            <Link to="/project/OWN/E-commerce"><li className='hover:scale-105 active:scale-95 transition-all hover:text-cyan-700'>Home</li></Link>

            <Link to="/project/OWN/E-commerce/products"><li className='hover:scale-105 active:scale-95 transition-all hover:text-cyan-700'>Products</li></Link>

            <Link to="/project/OWN/E-commerce/contact"><li className='hover:scale-105 active:scale-95 transition-all hover:text-cyan-700'>Contact</li></Link>
        </ul>
    </div>
  )
}

