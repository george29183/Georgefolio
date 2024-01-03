import React, { useContext, useState } from 'react'
import SolarHamburgerMenuOutline from '../assets/SolarHamburgerMenuOutline'
import LogosYoutube from '../assets/LogosYoutube'
import MaterialSymbolsLightSearch from '../assets/MaterialSymbolsLightSearch'
import FluentMicOn48Filled from '../assets/FluentMicOn48Filled'
import PhDotsThreeVerticalBold from '../assets/PhDotsThreeVerticalBold'
import PhUserCircleThin from '../assets/PhUserCircleThin'
import { Ecomcontext } from '../../../../../own/components/context/ecomContext'
import {motion} from "framer-motion"


function YoutubeNav() {
  const {setAside,aside} = useContext(Ecomcontext)
  const [search,setSearch] = useState(false)
  return (
    <div className='w-full flex z-30 px-[18px] py-2 justify-between items-center sticky top-16 bg-[#0F0F0F]'>
      <button onClick={()=>{setAside(!aside)}} className='flex  relative  items-center gap-2'>
        <SolarHamburgerMenuOutline className=" p-2 cursor-pointer rounded-[50%] transition hover:bg-[#262627]"/>
        <LogosYoutube className="cursor-pointer"/>
        <div className='absolute text-gray-300 scale-90 top-0 -right-2 text-xs'>US</div>
      </button>
      <div className=' hidden  justify-center mx-20 flex-1 sm:flex'>
      <button className={`bg-[#131213] ${search?"opacity-100 visible":"invisible opacity-0"} border-blue-700 border-t border-b border-l relative group rounded-l-full px-4 `}><MaterialSymbolsLightSearch/>
         </button>
         <input 
      
         placeholder='Search' className={`w-[55%] bg-[#131213] border 
         rounded-l-full placeholder:text-[#7D8988] focus:border-blue-700 focus:outline-none  border-[#303030]  px-4 py-2`} type="text" />
         <button className='bg-[#252525] relative group rounded-r-full px-4 '><MaterialSymbolsLightSearch/>
           <div className={`bg-[#717171] invisible  px-3 py-2 opacity-0 duration-200 group-hover:visible ease-in-out rounded-lg transition group-hover:opacity-100 left-0 -bottom-12 absolute`}>
            <h2 className='text-sm text-slate-50'>Search</h2>
           </div>
         </button>
         <button  className={`bg-[#252525] group hover:bg-[#303030] relative  rounded-[50%] py-1 px-2 ml-4`}><FluentMicOn48Filled/>
         <div className={`bg-[#717171] invisible opacity-0 group-hover:visible group-hover:opacity-100 px-3 py-2 rounded-lg duration-200 ease-in-out w-44 -left-16 -bottom-12 absolute`}>
            <h2 className='text-sm  text-slate-50'>Search with your voice</h2>
           </div>
         </button>
      </div>
      <div className='  justify-end flex sm:gap-3 gap-1'>
      <button  className='group sm:hidden hover:bg-[#303030] relative rounded-[50%] p-2 '><MaterialSymbolsLightSearch/>
      <div className={`bg-[#717171] group-hover:visible group-hover:opacity-100 px-3 py-2 rounded-lg opacity-0 invisible  duration-200 ease-in-out  -left-2 -bottom-12 absolute`}>
            <h2 className='text-sm  text-slate-50'>Search</h2>
           </div>
      </button>
         <button 
         className='sm:hidden group rounded-[50%] relative hover:bg-[#303030]   p-2 '><FluentMicOn48Filled/>
         <div className={`bg-[#717171] group-hover:visible group-hover:opacity-100 invisible opacity-0  px-3 py-2 rounded-lg duration-200 ease-in-out w-44 -left-16 -bottom-12 absolute`}>
            <h2 className='text-sm  text-slate-50'>Search with your voice</h2>
           </div>
         </button>
        <button className='relative group'><PhDotsThreeVerticalBold/>
        <div className={`bg-[#717171] group-hover:visible group-hover:opacity-100 opacity-0 invisible   px-3 py-2 rounded-lg duration-200 ease-in-out -left-5 -bottom-12 absolute`}>
            <h2 className='text-sm  text-slate-50'>Settings</h2>
           </div>
        </button>
        <button  className='flex justify-center items-center gap-1 py-1 px-3 rounded-full border hover:bg-opacity-[0.3] hover:bg-blue-400  border-[#303030]  text-[#49b3ff]'><PhUserCircleThin/> Sign in</button>
      </div>
    </div>
  )
}

export default YoutubeNav