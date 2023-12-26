import React, { useState } from 'react'
import all from '../assets/2593065.jpg'
import { Link } from 'react-router-dom'
import ecom from '../assets/Screenshot 2023-12-21 200916.png'
import blogy from '../assets/Screenshot 2023-12-24 183225.png'


export default function OwnHero(){
  const [pro,setPro] = useState({
    Ecommerce:false,
    Blog:false,
    LandingPage:false,
    Portfolio:false,
    Bussines:false,
    Personal:false
  })
 
  const projects = [
    {
      type:'E-commerce',
      img:ecom,
      disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      type:'Blog',
      img:blogy,
      disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      type:'Landing-Page',
      img:all,
      disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      type:'Bussines',
      img:all,
      disc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
   
  ]

 const display = projects.map((item)=>{
    return(
      <Link key={item.type} onClick={()=>{window.scrollTo(0,0)}} to={`/project/OWN/${item.type}`}><div  onMouseOver={()=>{setPro({
        ...pro,
        [item.type]:true
      })}} onMouseLeave={()=>{setPro({
        ...pro,
        [item.type]:false
      })}}   className='relative w-80 h-80 mt-8 active:scale-95 hover:scale-105 transition  rounded-xl bg-slate-400 ease-in-out m-5'>
              <img className='rounded-xl bg-contain h-full w-full ' src={item.img}/>
        <div className={`w-[100%] bottom-0 absolute h-[40%] bg-slate-700 px-5  text-slate-50 z-10 transition py-2 ${pro[item.type] ? 'opacity-100' : 'opacity-100 lg:opacity-0'} delay-100 rounded-xl`}>

         {item.type}
         <p className={`text-xs text-slate-50`}>{item.disc}</p>
      </div>
    </div></Link>
    )
  })
 
  return (
    <section className='flex flex-col items-center'>
        <h2 className='p-2 text-center lg:text-4xl sm:text-2xl text-slate-900 text-bold text-xl'>My projects</h2>
        <p className='mx-2 text-center lg:text-2xl text-slate-900'> I have curated all of my projects on this page for your convenience, providing an easy and seamless navigation experience throughout the website. It's important to note that these projects are not commissioned for clients but are meticulously crafted to showcase a diverse portfolio of my work.

Feel free to explore each project in detail and share your thoughts. Your feedback is valuable, so please let me know which project resonates with you.</p>
            <div className='grid gap-2 xl:grid-cols-4 lg:grid-cols-3 grid-flow-dense sm:grid-cols-2 grid-cols-1'>
               {display}
            </div>
          
    </section>
  )
}
