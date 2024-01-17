import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
function Aside(props) {
  return (
    <motion.aside 
    initial={{
        x:-100,
        opacity:0
    }}
    animate={{
        x:0,
        opacity:1
    }}
    transition={{
        duration:0.5,
        ease:"easeInOut"
    }}
    className={`${props.className}`}>
       <ul className='flex text-2xl text-[#fafafa] flex-col gap-16 items-center'>
     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce"><li className=' hover:scale-105 cursor-pointer'>Home</li></Link>
     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/contact"> <li className='hover:scale-105 transition  cursor-pointer '>Contact</li></Link>
     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/products"> <li className='hover:scale-105 transition  cursor-pointer '>Products</li></Link>
     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/wishlist"> <li className='hover:scale-105 transition  cursor-pointer '>Wishlist</li></Link>

     <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/about"> <li className='hover:scale-105 transition  cursor-pointer '>About</li></Link>
  
     </ul>
     
    </motion.aside>
  )
}

export default Aside