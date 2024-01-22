import React, { useContext } from 'react'
import { Ecomcontext } from '../-projects/own/components/context/ecomContext'

function Themes() {
    const {setTheme} = useContext(Ecomcontext)
  return (
    <div className='bg-secBackground flex overflow-hidden text-cardsText  rounded-md right-0  justify-center items-center h-[max-content]  z-20  lg:text-2xl text-xl top-[54px] absolute'>
        <div className='flex flex-col'>
            <div className='flex hover:text-textBlack transition hover:bg-background px-10 py-3 cursor-pointer gap-5 items-center' onClick={()=>setTheme('light')}>
                <div className='flex'>
                  <div className='h-7 w-2 bg-[#e5e5e5]'></div>
                  <div className='h-7 w-2 bg-[#14213d]'></div>
                  <div className='h-7 w-2 bg-[#fca311]'></div>
                  <div className='h-7 w-2 bg-[#ffffff]'></div>
                </div>
                <h1>Default</h1>
            </div>
            <div className='flex hover:text-textBlack transition hover:bg-background px-10 py-3 cursor-pointer gap-5 items-center' onClick={()=>setTheme('theDark')}>
                <div className='flex'>
                  <div className='h-7 w-2 bg-[#1b263b]'></div>
                  <div className='h-7 w-2 bg-[#0d1b2a]'></div>
                  <div className='h-7 w-2 bg-[#415a77]'></div>
                  <div className='h-7 w-2 bg-[#e0e1dd]'></div>
                </div>
                <h1>Dark</h1>
            </div>
            <div className='flex hover:text-textBlack transition hover:bg-background px-10 py-3 cursor-pointer gap-5 items-center' onClick={()=>setTheme('dark')}>
            <div className='flex'>
                  <div className='h-7 w-2 bg-[#ffffff]'></div>
                  <div className='h-7 w-2 bg-[#5f52a0]'></div>
                  <div className='h-7 w-2 bg-[#88869e]'></div>
                  <div className='h-7 w-2 bg-[#000000]'></div>
                </div>
                <h1>George purple</h1>
            </div>
            <div className='flex hover:text-textBlack transition hover:bg-background px-10 py-3 cursor-pointer gap-5 items-center' onClick={()=>setTheme('brown')}>
            <div className='flex'>
                  <div className='h-7 w-2 bg-[#faf7ef]'></div>
                  <div className='h-7 w-2 bg-[#393d24]'></div>
                  <div className='h-7 w-2 bg-[#eee9f2]'></div>
                  <div className='h-7 w-2 bg-[#000000]'></div>
                </div>
                <h1>George Brown</h1>
            </div>
            <div className='flex hover:text-textBlack transition hover:bg-background px-10 py-3 cursor-pointer gap-5 items-center' onClick={()=>setTheme('blue')}>
            <div className='flex'>
                  <div className='h-7 w-2 bg-[#ff70a6]'></div>
                  <div className='h-7 w-2 bg-[#ff9770]'></div>
                  <div className='h-7 w-2 bg-[#ffd670]'></div>
                  <div className='h-7 w-2 bg-[#f5f5f5]'></div>
                </div>
                <h1>George Pink</h1>
            </div>
            <div  className='flex hover:text-textBlack transition hover:bg-background px-10 py-3 cursor-pointer gap-5 items-center' onClick={()=>setTheme('classic')}>
            <div className='flex'>
                  <div className='h-7 w-2 bg-[#e5e6e4]'></div>
                  <div className='h-7 w-2 bg-[#a6a2a2]'></div>
                  <div className='h-7 w-2 bg-[#847577]'></div>
                  <div className='h-7 w-2 bg-[#fbfbf2]'></div>
                </div>
                <h1>dont know what this is</h1>
            </div>
        </div>
    </div>
  )
}

export default Themes