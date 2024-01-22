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
    <section  className='h-full relative bg-secBackground  pt-12'>
     <div className='absolute  -top-1 left-0 right-0 bg-background h-20 shadow-2xl rounded-b-full border-none'></div>
     <div className='pt-20 pb-24 xl:px-40 px-8 flex items-center flex-col'>
         <h1 id='about' className='xl:text-7xl text-4xl pt-12 text-cardsText mb-2'>
          About Me
         </h1>
         <hr className='w-[20%] mb-10'/>
         <p className='text-center text-[#fafafa] mb-10 text-base lg:text-xl xl:text-2xl'>
         Hey, I'm Mohammed Rabee, a budding web developer on a journey fueled by passion and consistency. I've reached a point where I can humbly say I've mastered the basics and delved into the ultra-advanced realms of frameworks and libraries. Just take a peek at this portfolio—I've got the receipts.

         But you know what? This journey is far from over! Always moving forward! 🚀
         </p>
      </div>
      <div className='absolute -bottom-20 left-0 right-0  bg-secBackground h-20 shadow-2xl  rounded-b-full '></div>
      <div className='xl:absolute flex-col xl:flex-row items-center w-full text-cardsText justify-center -bottom-60 flex gap-10'>
        <div className='xl:w-[30%] w-[80%] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 ease-in-out px-2 hover:xl:text-[#000] h-80 xl:bg-gradient-to-t bg-cards to-cards  to-30% from-cardsFrom shadow-lg rounded-lg flex flex-col justify-center gap-10 items-center'>
           <h1 className='text-4xl'>Email</h1>
           <LineMdEmailTwotone className="w-[6em]  h-[6em]"/>
           <h2 className='text-2xl text-cardsText2'>george29183@gmail.com</h2>
        </div>
        <div className='xl:w-[30%] w-[80%] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 ease-in-out hover:xl:text-[#000]  relative h-80   xl:bg-gradient-to-t bg-cards to-cards  to-30% from-cardsFrom px-2  shadow-lg rounded-lg flex justify-center flex-col gap-10  items-center'>
        <h1 className='text-4xl  '>Full Name</h1>
           <LineMdAccount className="w-[6em]  h-[6em]"/>
           <h2 className='text-2xl mb-4 text-center  text-cardsText2'>Mohammed Rabie Salman Yagoub</h2>
           <h3 className='flex absolute items-center text-gray-400  bottom-2'>George is a nickname <NotoSkull/> </h3>
        </div>
        <div className='xl:w-[30%] w-[80%] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 ease-in-out hover:xl:text-[#000]  h-80 xl:bg-gradient-to-t bg-cards to-cards  to-30% from-cardsFrom  shadow-lg rounded-lg flex justify-center  flex-col gap-10  items-center'>
        <h1 className='text-4xl'>Github</h1>
           <LineMdGithub className="w-[6em]  h-[6em]"/>
           <h2 className='text-2xl text-cardsText2'>george29183</h2>
        </div>
      </div>
    </section>
  )
}

