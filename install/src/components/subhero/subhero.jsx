import React from 'react'
import LineMdAccount from './LineMdAccount'
import LineMdEmailTwotone from './LineMdEmailTwotone'
import LineMdGithub from './LineMdGithub'
import NotoSkull from './NotoSkull'
export default function Subhero(){
 const aboutMe = [
  {
    title:"Full Name",
    body:'Mohammed Rabie Salman Yagoub',
    img:'',
  },
  {
    title:"email",
    body:"george29183@gmail.com",
    img:''
  },
  {
    title:''
  }
 ]
  
 
  return (
    <section  className='h-full relative bg-sky-800 pb-32  pt-12'>
     <div className='absolute  top-0 left-0 right-0 bg-[#f5f5f5] h-20 shadow-2xl rounded-b-full '></div>
     <div className='pt-20 mb-20s xl:px-40 px-8 flex items-center flex-col'>
         <h1 id='about' className='xl:text-7xl text-4xl pt-12 text-[#f5f5f5] mb-2'>
          About Me
         </h1>
         <hr className='w-[20%] mb-10'/>
         <p className='text-center text-[#fafafa] mb-10 text-base lg:text-xl xl:text-2xl'>
          Embarking on my web development journey, I've embraced a hands-on approach, diving into the coding world with a passion for creating awesome things. I'm your go-to person for HTML, JavaScript, CSS, React, Tailwind, Node.js, and Express.js.

          Facing coding challenges is like cracking fun puzzles for me. Each hurdle I've come across has been a chance to learn and improve. Take a look at my projects—they're like a gallery showcasing not just my tech skills but also my knack for cool ideas.

          In the project world, I've smoothly sailed through changes and tight spots, thanks to good communication. Web development, for me, is an ongoing adventure of learning and working together. 
     
         </p>
      </div>
      <div className='absolute -bottom-20 left-0 right-0 bg-sky-800 h-20 shadow-2xl  rounded-b-full '></div>
      <div className='xl:absolute flex-col xl:flex-row items-center w-full justify-center -bottom-60 flex gap-10'>
        <div className='xl:w-[30%] w-[80%] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 ease-in-out hover:xl:text-[#000] xl:text-[#f5f5f5] h-80 xl:bg-gradient-to-t bg-[#f5f5f5] to-sky-900 via-sky-800 from-25% from-[#f5f5f5] shadow-lg rounded-lg flex flex-col justify-center gap-10 items-center'>
           <h1 className='text-4xl xl:text-[#f5f5f5]'>Email</h1>
           <LineMdEmailTwotone className="w-[6em]  h-[6em]"/>
           <h2 className='text-2xl text-[#212121]'>george29183@gmail.com</h2>
        </div>
        <div className='xl:w-[30%] w-[80%] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 ease-in-out hover:xl:text-[#000] xl:text-[#f5f5f5] relative h-80 text-[#212121]  xl:bg-gradient-to-t bg-[#f5f5f5] to-sky-900 from-25% via-sky-800 from-[#f5f5f5] shadow-lg rounded-lg flex justify-center flex-col gap-10  items-center'>
        <h1 className='text-4xl text-[#212121] xl:text-[#fafafa]'>Full Name</h1>
           <LineMdAccount className="w-[6em]  h-[6em]"/>
           <h2 className='text-2xl text-[#212121]'>Mohammed Rabie Salman Yagoub</h2>
           <h3 className='flex absolute items-center text-gray-400 bottom-2'>George is a nickname <NotoSkull/> </h3>
        </div>
        <div className='xl:w-[30%] w-[80%] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 ease-in-out hover:xl:text-[#000] xl:text-[#f5f5f5] h-80 xl:bg-gradient-to-t bg-[#f5f5f5] to-sky-900 via-sky-800 from-[#f5f5f5]  shadow-lg rounded-lg flex justify-center from-30% flex-col gap-10  items-center'>
        <h1 className='text-4xl xl:text-[#fafafa]'>Github</h1>
           <LineMdGithub className="w-[6em]  h-[6em]"/>
           <h2 className='text-2xl text-[#212121]'>george29183</h2>
        </div>
      </div>
    </section>
  )
}

