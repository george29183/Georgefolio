import React, { useState } from 'react'
import MaterialSymbolsHome from './MaterialSymbolsHome'
import MaterialSymbolsLightSubscriptionsOutlineSharp from './MaterialSymbolsLightSubscriptionsOutlineSharp'
import MaterialSymbolsLightVideoLibrarySharp from './MaterialSymbolsLightVideoLibrarySharp'
import OcticonHistory24 from './OcticonHistory24'
import SimpleIconsYoutubeshorts from './SimpleIconsYoutubeshorts'
import MaterialSymbolsLightHomeOutline from './MaterialSymbolsLightHomeOutline'
import MaterialSymbolsLightSubscriptionsSharp from './MaterialSymbolsLightSubscriptionsSharp'
function YoutubeSmallAside() {
  const [icon,setIcon] = useState({
    home:true,
    subscriptions:false,
    shorts:false,
    you:false,
    history:false,
  })
  return (
    <div className='sticky w-[78px] left-0 flex  flex-col  text-xs text-slate-50  bg-[#0F0F0F] py-1 top-32'>
      <button onClick={()=>{setIcon({
          icon:false,
          home:true
        })}} className='flex hover:bg-[#303030] cursor-pointer px-5 py-4 transition rounded-lg flex-col gap-2 items-center'>
         {icon.home?<MaterialSymbolsHome />:<MaterialSymbolsLightHomeOutline />}
        <h2 className=''>Home</h2>
      </button>
      <button onClick={()=>{setIcon({
          icon:false,
          shorts:true
        })}} className='flex flex-col  hover:bg-[#303030] cursor-pointer w-full py-4 transition rounded-lg gap-2 items-center'>
         {icon.shorts?<SimpleIconsYoutubeshorts className="w-[2em]" fill="white" stroke="none"/>:<SimpleIconsYoutubeshorts className="w-[2em]" fill="none" stroke="white"/>}
        <h2>Shorts</h2>
      </button>
      <button onClick={()=>{setIcon({
          icon:false,
          subscriptions:true
        })}} className='flex flex-col  hover:bg-[#303030] cursor-pointer w-full py-4 transition rounded-lg gap-2 items-center'>
         {icon.subscriptions?<MaterialSymbolsLightSubscriptionsSharp className="w-[2.3em]"/>:<MaterialSymbolsLightSubscriptionsOutlineSharp className="w-[2.3em]"/>}
        <h2 className='px-1'>Subscriptions</h2>
      </button>
      <button onClick={()=>{setIcon({
          icon:false,
          you:true
        })}} className='flex flex-col gap-2  hover:bg-[#303030] cursor-pointer w-full py-4 transition rounded-lg items-center'>
         {icon.you?<MaterialSymbolsLightVideoLibrarySharp fill="white" stroke="none"/>:<MaterialSymbolsLightVideoLibrarySharp fill="none" stroke="white"/>}
        <h2>You</h2>
      </button>
      <button onClick={()=>{setIcon({
          icon:false,
          history:true
        })}} className='flex flex-col gap-2  hover:bg-[#303030] cursor-pointer w-full py-4 transition rounded-lg items-center'>
         {icon.history?<OcticonHistory24 strokeWidth="1px" stroke="white"/>:<OcticonHistory24 fill="none" stroke="none"/>}
        <h2>History</h2>
      </button>
    </div>
  )
}

export default YoutubeSmallAside