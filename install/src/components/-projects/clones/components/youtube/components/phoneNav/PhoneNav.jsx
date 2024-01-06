import React,{useState} from 'react'
import MaterialSymbolsHome from '../youtubeAside/MaterialSymbolsHome'
import MaterialSymbolsLightHomeOutline from '../youtubeAside/MaterialSymbolsLightHomeOutline'
import SimpleIconsYoutubeshorts from '../youtubeAside/SimpleIconsYoutubeshorts'
import MaterialSymbolsAddCircleOutline from '../youtubeAside/MaterialSymbolsAddCircleOutline'
import MaterialSymbolsLightSubscriptionsSharp from "../youtubeAside/MaterialSymbolsLightSubscriptionsSharp"
import MaterialSymbolsLightSubscriptionsOutlineSharp from "../youtubeAside/MaterialSymbolsLightSubscriptionsOutlineSharp"
import PhUserCircleThin from "../assets/PhUserCircleThin"
function PhoneNav() {
        const [icon,setIcon] = useState({
            home:true,
            subscriptions:false,
            shorts:false,
            you:false,
          })
  return (
    <div className='fixed flex text-slate-50 scr bg-[#0f0f0f] h-12 items-center bottom-0 left-0 right-0'>
       <button onClick={()=>{setIcon({
          icon:false,
          home:true
        })}} className='flex  flex-col text-xs w-full py-2 px-[18px] transition  items-center'>
         {icon.home?<MaterialSymbolsHome/>:<MaterialSymbolsLightHomeOutline/>}
        <h2 className=' text-xs font-semibold'>Home</h2>
      </button>
      <button onClick={()=>{setIcon({
          icon:false,
          shorts:true
        })}} className='flex  flex-col text-xs w-full py-2 px-[18px] transition  items-center'>
         {icon.shorts?<SimpleIconsYoutubeshorts fill="white" stroke="none"/>:<SimpleIconsYoutubeshorts fill="none" stroke="white"/>}
        <h2 className='text-xs font-semibold'>Shorts</h2>
        
      </button>
      <button className='flex  flex-col text-sm w-full py-2 px-[18px] transition  items-center'>
         <MaterialSymbolsAddCircleOutline/>
        </button>
        <button onClick={()=>{setIcon({
          icon:false,
          live:true
        })}} className='flex  flex-col text-xs w-full py-2 px-[18px] transition  items-center'>
         {icon.live?<MaterialSymbolsLightSubscriptionsSharp/>:<MaterialSymbolsLightSubscriptionsOutlineSharp/>}
        <h2 className='text-xs font-semibold'>Live</h2>
      </button>
      <button className='flex  flex-col text-[15px] w-full py-2 px-[18px] transition  items-center'>
         <PhUserCircleThin fill="white"/>
         <h2 className='text-xs font-semibold'>You</h2>
        </button>
    </div>
  )
}

export default PhoneNav