import React from 'react'
import OwnNavbar from '../own-navbar/own-navbar'
import Nav from '../own-navbar/nav'

export default function OwnContact(){
  return (
    <>
    <OwnNavbar path="E-commerce" sec="contact"/>
    <Nav/>
    <div>
        <h1 className='text-center m-2 text-2xl text-slate-900'>Leave your Comments Please!</h1>
        <div className='items-center mt-5 gap-2 flex flex-col'>
        <input className='rounded-xl text-slate-100 p-3 bg-slate-800 w-[70%]' type='text' placeholder='Name'></input> 
        <textarea className='bg-slate-800 p-2 text-slate-100 w-[70%] h-44 rounded-xl'></textarea>
        <button className='bg-cyan-700 py-3 px-10 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all active:scale-95 hover:bg-gradient-to-r from-cyan-900 to-cyan-400 text-xl uppercase text-slate-100'>submit</button>
        </div>
       
    </div>
    </>
    )
}

