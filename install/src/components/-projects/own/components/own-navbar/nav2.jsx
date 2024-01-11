import React from 'react'
import Wishlist from './assets/wishlist'
import Cart from './assets/cart'
import Component from './assets/Component'
import RiMenu2Fill from '../Landing-Page/components/assets/RiMenu2Fill'

function Nav2() {
  return (
   <section className='flex w-full px-10 lg:px-[135px] justify-between items-center'>
    <div className=''>
      <h1 className='text-3xl font-[poppins]'>Georgefi</h1>
    </div>
    <div className='hidden lg:block'>
     <ul className='flex gap-10 items-center'>
      <li>Home</li>
      <li>Contact</li>
      <li>About</li>
      <li>Sign Up</li>
     </ul>
    </div>
    <div className='flex gap-5 items-center'>
      <div className='flex'>
         <input className='px-2 py-3 bg-[#F5F5F5]' type="text" placeholder='what are you looking for'/>
     <button>
      <Component/>
     </button>
      </div>
     <button><Wishlist/></button>
     <button><Cart/></button>
     <button><RiMenu2Fill className="text-xs lg:hidden"/></button>
    </div>
   </section>
  )
}

export default Nav2