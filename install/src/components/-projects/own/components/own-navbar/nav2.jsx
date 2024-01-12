import React,{useContext, useEffect, useState} from 'react'
import Wishlist from './assets/wishlist'
import Cart from './assets/cart'
import Component from './assets/Component'
import IconsArrowLeft from './assets/IconsArrowLeft'
import RiMenu2Fill from '../Landing-Page/components/assets/RiMenu2Fill'
import { Link } from 'react-router-dom'
import { Ecomcontext } from '../context/ecomContext'


function Nav2() {
  const {cartItem} = useContext(Ecomcontext)
  const [search,setSearch] = useState(false)
  const [size,setSize] = useState(window.innerWidth)
  useEffect(()=>{
    window.addEventListener("resize",()=>{setSize(window.innerWidth)})

    return window.removeEventListener("resize",()=>{setSize(window.innerWidth)})
  },[size])
  return (
   <section className='sticky top-16 bg-[#f5f5f5] z-50 flex w-full px-2 xl:px-[135px] py-3 lg:px-[100px] justify-between items-center'>
    {size<640 && search?(
      <div className='w-full flex justify-center relative'>
        <button onClick={()=>{setSearch(false)}} className='absolute left-0 top-[25%] cursor-pointer'>
          <IconsArrowLeft/>
        </button>
      <input className='px-2 py-2  bg-[#ebebeb] w-[60%]' type="text" placeholder='what are you looking for'/>
      <button className='bg-[#dfdddd] px-2 py-2'>
       <Component/>
      </button>
      </div>
    ):(
      <div className='flex justify-between items-center w-full'>
      <div className=''>
      <h1 className='xl:text-5xl lg:text-4xl text-3xl font-[poppins]'>GeorgeFi</h1>
    </div>
    <div className={size>1190?"block":"hidden"}>
     <ul className='flex gap-10 items-center'>
     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce"><li className=' text-xl hover:scale-105 cursor-pointer'>Home</li></Link>
     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/contact"> <li className='hover:scale-105 transition text-xl  cursor-pointer '>Contact</li></Link>
     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/about"> <li className='hover:scale-105 transition text-xl  cursor-pointer '>About</li></Link>
     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/account"> <li className='hover:scale-105 transition text-xl  cursor-pointer '>Sign Up</li></Link>
     </ul>
    </div>
    <div className='flex gap-5 items-center'>
      <div className='flex'>
         <input className='px-2 py-2 hidden sm:block bg-[#ebebeb]' type="text" placeholder='what are you looking for'/>
     <button onClick={()=>{size<640?setSearch(!search):setSearch(false)}} className='sm:bg-[#dfdddd] sm:px-2 sm:py-2'>
      <Component/>
     </button>
      </div>
     <Link onClick={()=>{window.scrollTo(0,0)}} className={` ${size<640?"hidden":"flex"} items-center`} to="/project/OWN/E-commerce/wishlist"><button><Wishlist/></button></Link>
     <Link className='w-full h-full flex items-center' onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/cart"><button className='relative w-full h-full'><Cart className="w-[1.6em] h-[1.6em]"/>
     <div className='absolute -top-[8px] -right-2 rounded-full w-5 bg-red-800 text-sm text-slate-50 text-center'>{cartItem}</div>
     </button></Link>
     <button className={size>1190?"hidden":"block ml-4"}><RiMenu2Fill className="text-xs hover:scale-105 transition"/></button>
    </div>
    </div>
    )}
    
   </section>
  )
}

export default Nav2