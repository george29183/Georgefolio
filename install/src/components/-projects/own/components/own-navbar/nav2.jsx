import React,{useContext, useEffect, useState} from 'react'
import Wishlist from './assets/wishlist'
import Cart from './assets/cart'
import Component from './assets/Component'
import IconsArrowLeft from './assets/IconsArrowLeft'
import RiMenu2Fill from './assets/RiMenu2Fill'
import { Link } from 'react-router-dom'
import { Ecomcontext } from '../context/ecomContext'
import User from './assets/TdesignUser1'
import Aside from '../ecommerce/components/aside'
import {motion } from 'framer-motion'


function Nav2(props) {
  const {cartItem,wishlists,setSearchItem,searchItem,loginData,sign} = useContext(Ecomcontext)
  const [search,setSearch] = useState(false)
  const [size,setSize] = useState(window.innerWidth)
  const [aside,setAside] = useState(false)
  useEffect(()=>{
    window.addEventListener("resize",()=>{setSize(window.innerWidth)})

    return window.removeEventListener("resize",()=>{setSize(window.innerWidth)})
  },[size])
  return (
   <section className='sticky top-0 bg-[#f5f5f5] z-50 flex w-full px-2 xl:px-[135px] py-3 lg:px-[100px] justify-between items-center'>
    {size<640 && search?(
      <div className='w-full flex justify-center relative'>
        <button onClick={()=>{setSearch(false)}} className='absolute left-0 top-[25%] cursor-pointer'>
          <IconsArrowLeft/>
        </button>
      <input  onChange={search?(e)=>{setSearchItem(e.target.value.toLowerCase())}:setSearchItem('')} className='px-2 py-2  bg-[#ebebeb] w-[60%]' type="text" placeholder='what are you looking for'/>
      <Link className='flex justify-center items-center ' to={search?"/project/OWN/E-commerce/search":null}><button className='bg-[#dfdddd] px-2 py-2'>
       <Component/>
      </button></Link>
      </div>
    ):(
      <div className='flex max-w-[1600px] xl:mx-auto justify-between items-center  w-full'>
      <div className=''>
      <Link to="/project/OWN/E-commerce"><h1 className='xl:text-5xl lg:text-4xl text-3xl font-[poppins]'>GeorgeFi</h1></Link>
    </div>
    <div className={size>1190?"block":"hidden"}>
     <ul className='flex gap-10 items-center'>
     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce"><li
     className={` text-lg hover:scale-105  cursor-pointer`}>
      Home
      <motion.div
      initial={{
        width:0,
        opacity:0
      }}
      animate={props.paths==="home"?{
        backgroundColor:"#db4444",
        width:"100%",
        height:'4px',
        opacity:1
      }:{width:0}}
      transition={{
        duration:0.4,
        ease:"backInOut"
      }}
      />
      </li></Link>
     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/contact"> <li className='hover:scale-105 transition text-lg  cursor-pointer '>
      Contact
      <motion.div
      initial={{
        width:0,
        opacity:0
      }}
      animate={props.paths==="contact"?{
        backgroundColor:"#db4444",
        width:"100%",
        height:'4px',
        opacity:1
      }:{width:0}}
      transition={{
        duration:0.4,
        ease:"backInOut"
      }}
      />
      </li></Link>
     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/products"> <li className='hover:scale-105 transition text-lg  cursor-pointer '>
      Products
      <motion.div
      initial={{
        width:0,
        opacity:0
      }}
      animate={props.paths==="products"?{
        backgroundColor:"#db4444",
        width:"100%",
        height:'4px',
        opacity:1
      }:{width:0}}
      transition={{
        duration:0.4,
        ease:"backInOut"
      }}
      />
      </li></Link>
     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/about"> <li className='hover:scale-105 transition text-lg  cursor-pointer '>
      About
      <motion.div
      initial={{
        width:0,
        opacity:0
      }}
      animate={props.paths==="about"?{
        backgroundColor:"#db4444",
        width:"100%",
        height:'4px',
        opacity:1
      }:{width:0}}
      transition={{
        duration:0.4,
        ease:"backInOut"
      }}
      />
      </li></Link>
  
     </ul>
    </div>
    <div className='flex gap-5 items-center'>
      <div className='flex'>
         <input onChange={(e)=>{setSearchItem(e.target.value.toLowerCase())}} className='px-2 py-2 hidden sm:block bg-[#ebebeb]' type="text" placeholder='what are you looking for'/>
     <Link className='flex items-center' to={size>640?"/project/OWN/E-commerce/search":null}><button onClick={()=>{size<640?setSearch(!search):setSearch(false)}} className='sm:bg-[#dfdddd] sm:px-2 sm:py-2'>
      <Component/>
     </button></Link>
      </div>
     <Link onClick={()=>{window.scrollTo(0,0)}} className={` ${size<640?"hidden":"flex"} items-center`} to="/project/OWN/E-commerce/wishlist"><button className='relative'><Wishlist/>
     <motion.div
      initial={{
        width:0,
        opacity:0
      }}
      animate={props.paths==="wishlist"?{
        backgroundColor:"#db4444",
        width:"100%",
        height:'4px',
        opacity:1
      }:{width:0}}
      transition={{
        duration:0.4,
        ease:"backInOut"
      }}
      />
     <div className={` absolute ${wishlists.length===0?"invisible  opacity-0":"visible opacity-100 "} -top-[6px] -right-1 duration-500 ease-in-out rounded-full w-5 bg-[#db4444] text-sm text-slate-50 text-center`}>{wishlists.length}</div>
     </button></Link>
     <Link className=' h-full flex items-center' onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/cart"><button className='relative w-full h-full'><Cart className="w-[1.6em] h-[1.6em]"/>
     <motion.div
      initial={{
        width:0,
        opacity:0
      }}
      animate={props.paths==="cart"?{
        backgroundColor:"#db4444",
        width:"100%",
        height:'4px',
        opacity:1
      }:{width:0}}
      transition={{
        duration:0.4,
        ease:"backInOut"
      }}
      />
     <button className={`absolute -top-[8px] -right-2 rounded-full ${cartItem===0?"invisible  opacity-0":"visible opacity-100 "} w-5 duration-500 ease-in-out bg-[#db4444] text-sm text-slate-50 text-center`}>{cartItem}</button>
     </button></Link>
     {sign && loginData[0].user.photoURL?<Link className='h-8 hover:scale-105 mr-2 active:scale-95 transition' onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/account"><img className='rounded-full h-8' src={loginData[0].user.photoURL} alt="" /></Link>:<Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/account"><button className='bg-[#db4444] rounded-full hover:scale-105 mr-2 active:scale-95 transition  p-1'>
      <User/>
     </button></Link>}
     <button onClick={()=>setAside(!aside)} className={size>1190 || aside?"hidden":"block ml-2"}><RiMenu2Fill className="text-xs hover:scale-105 transition"/></button>
    </div>
    {aside?<Aside className={`absolute  flex items-center justify-center lg:hidden bg-[#db4444] top-14 bottom-0 left-0 right-0 h-screen`}/>:null}
    {aside?<button onClick={()=>setAside(false)} className='text-7xl opacity-100 text-[#fafafa] absolute top-16 right-7'>
        x
     </button>:null}
    </div>

    )}
    
   </section>
  )
}

export default Nav2