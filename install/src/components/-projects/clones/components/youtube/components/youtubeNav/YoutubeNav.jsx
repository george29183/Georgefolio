import React from 'react'
import SolarHamburgerMenuOutline from '../assets/SolarHamburgerMenuOutline'
import LogosYoutube from '../assets/LogosYoutube'
import MaterialSymbolsLightSearch from '../assets/MaterialSymbolsLightSearch'
import FluentMicOn48Filled from '../assets/FluentMicOn48Filled'
import PhDotsThreeVerticalBold from '../assets/PhDotsThreeVerticalBold'
import PhUserCircleThin from '../assets/PhUserCircleThin'

function YoutubeNav() {
  return (
    <div className='w-full flex p-4 justify-between items-center sticky top-32 bg-[#0F0F0F]'>
      <div className='flex  relative  items-center gap-2'>
        <SolarHamburgerMenuOutline className=" p-2 cursor-pointer rounded-[50%] transition hover:bg-[#262627]"/>
        <LogosYoutube className="cursor-pointer"/>
        <div className='absolute text-gray-300 scale-90 top-0 -right-2 text-xs'>US</div>
      </div>
      <div className='flex basis-2/4'>
         <input placeholder='Search' className='w-[70%] bg-[#131213] border  placeholder:text-[#7D8988] focus:border-blue-700 focus:outline-none hidden sm:block border-[#303030] rounded-l-full px-4 py-2' type="text" />
         <button className='sm:bg-[#252525] rounded-r-full px-4 '><MaterialSymbolsLightSearch/></button>
         <button className='sm:bg-[#252525] rounded-[50%] py-1 px-2 ml-4'><FluentMicOn48Filled/></button>
      </div>
      <div className=' flex gap-3'>
        <button><PhDotsThreeVerticalBold/></button>
        <button className='flex items-center gap-1 py-2 px-3 rounded-full border border-[#303030] brightness-[1] text-[#4CA0F1]'><PhUserCircleThin/> Sign in</button>
      </div>
    </div>
  )
}

export default YoutubeNav