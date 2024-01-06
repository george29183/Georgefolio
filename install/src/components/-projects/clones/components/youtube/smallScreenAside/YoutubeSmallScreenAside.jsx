import React,{useState,useContext,useEffect} from 'react'
import MaterialSymbolsHome from '../components/youtubeAside/MaterialSymbolsHome'
import MaterialSymbolsLightSubscriptionsOutlineSharp from '../components/youtubeAside/MaterialSymbolsLightSubscriptionsOutlineSharp'
import MaterialSymbolsLightVideoLibrarySharp from '../components/youtubeAside/MaterialSymbolsLightVideoLibrarySharp'
import OcticonHistory24 from '../components/youtubeAside/OcticonHistory24'
import SimpleIconsYoutubeshorts from '../components/youtubeAside/SimpleIconsYoutubeshorts'
import MaterialSymbolsLightHomeOutline from '../components/youtubeAside/MaterialSymbolsLightHomeOutline'
import MaterialSymbolsLightSubscriptionsSharp from '../components/youtubeAside/MaterialSymbolsLightSubscriptionsSharp'
import PhUserCircleThin from '../components/assets/PhUserCircleThin'
import SolarHamburgerMenuOutline from '../components/assets/SolarHamburgerMenuOutline'
import LogosYoutube from '../components/assets/LogosYoutube'
import { Ecomcontext } from '../../../../own/components/context/ecomContext'
import {motion} from 'framer-motion'

function YoutubeSmallScreenAside() {
    
    const {setAside,aside} = useContext(Ecomcontext)
    const [icon,setIcon] = useState({
        home:true,
        subscriptions:false,
        shorts:false,
        you:false,
        history:false,
        trending:false,
        music:false,
        live:false,
        gaming:false,
        sports:false
      })
    
  return (
    
       
 <motion.div  initial={{
        x:-100
    }}
    animate={{
        x:0
    }}
    transition={{
        duration:0.1,
        ease:"easeInOut"
    }} style={{height:`${window.innerHeight}px`}}  className={`left-0  flex gap-1 flex-col  text-xs items-center group text-slate-50  bg-[#0F0F0F]  z-[100]  fixed lg:top-28 top-16 px-2  w-64 `}>
         <button onClick={()=>{setAside(!aside)}} className='flex text-lg bg-[#0f0f0f] px-6 py-3 relative w-full mr-2 items-center gap-2'>
        <SolarHamburgerMenuOutline className=" p-2 cursor-pointer  rounded-[50%] transition hover:bg-[#262627]"/>
        <LogosYoutube className="cursor-pointer"/>
        <div className='absolute  text-gray-300 scale-90 top-3  right-7 text-xs'>US</div>
      </button>
      <div  className={` px-3 overflow-hidden flex flex-col ${window.innerWidth<640?"overflow-y-scroll":"hover:overflow-y-auto"} gap-2 w-full`}>
        <button onClick={()=>{setIcon({
          icon:false,
          home:true
        })}} className='flex hover:bg-[#303030] cursor-pointer w-full py-2 px-[18px] transition rounded-lg  gap-5 items-center'>
         {icon.home?<MaterialSymbolsHome/>:<MaterialSymbolsLightHomeOutline/>}
        <h2 className=' text-base font-semibold'>Home</h2>
      </button>
      <button onClick={()=>{setIcon({
          icon:false,
          shorts:true
        })}} className='flex hover:bg-[#303030] cursor-pointer w-full px-[18px] py-2 transition rounded-lg gap-5 items-center'>
         {icon.shorts?<SimpleIconsYoutubeshorts fill="white" stroke="none"/>:<SimpleIconsYoutubeshorts fill="none" stroke="white"/>}
        <h2 className='text-base font-semibold'>Shorts</h2>
      </button>
      <button onClick={()=>{setIcon({
          icon:false,
          subscriptions:true
        })}} className='flex  hover:bg-[#303030] cursor-pointer w-full py-2 px-[18px] transition rounded-lg gap-5 mb-2 items-center'>
         {icon.subscriptions?<MaterialSymbolsLightSubscriptionsSharp/>:<MaterialSymbolsLightSubscriptionsOutlineSharp/>}
        <h2 className='text-base font-semibold'>Subscriptions</h2>
      </button>
      <hr className='w-[240px] opacity-30'/>
      <button onClick={()=>{setIcon({
          icon:false,
          you:true
        })}} className='flex gap-5 mt-2 hover:bg-[#303030] cursor-pointer w-full py-2 px-[18px] transition rounded-lg items-center'>
         {icon.you?<MaterialSymbolsLightVideoLibrarySharp fill="white" stroke="none"/>:<MaterialSymbolsLightVideoLibrarySharp fill="none" stroke="white"/>}
        <h2 className='text-base font-semibold'>You</h2>
      </button>
      <button onClick={()=>{setIcon({
          icon:false,
          history:true
        })}} className='flex mb-2 gap-5  hover:bg-[#303030] cursor-pointer px-[18px] w-full py-2 transition rounded-lg items-center'>
         {icon.history?<OcticonHistory24 strokeWidth="1px" stroke="white"/>:<OcticonHistory24 fill="none" stroke="none"/>}
        <h2 className='text-base font-semibold'>History</h2>
      </button>
      <hr className='w-[240px] opacity-30'/>
      <div className='my-3 px-2 flex flex-col'>
        <h2 className='text-base'>Sign in to like videos, comment, and subscribe</h2>
        <button  className='flex w-28 items-center gap-1 py-1 px-3 rounded-full border hover:bg-opacity-[0.3] text-base font-semibold mt-2 hover:bg-blue-400  border-[#303030]  text-[#49b3ff]'><PhUserCircleThin fill="#4CA0F1"/> Sign in</button>
      </div>
      <hr className=' opacity-30 w-[240px]'/>
      <div className='self-start flex gap-1 flex-col justify-center mt-2 text-xs w-56'>
        <h2 className='text-lg font-bold pl-4'>Explore</h2>
        <div>
        <button onClick={()=>{setIcon({
          icon:false,
          trending:true
        })}} className='flex hover:bg-[#303030] cursor-pointer w-full py-2 px-4 transition rounded-lg  gap-4 items-center'>
         {icon.trending?<MaterialSymbolsHome/>:<MaterialSymbolsLightHomeOutline/>}
        <h2 className=' text-base font-semibold'>Trending</h2>
      </button>
      <button onClick={()=>{setIcon({
          icon:false,
          music:true
        })}} className='flex hover:bg-[#303030] cursor-pointer w-full px-[18px] py-2 transition rounded-lg gap-5 items-center'>
         {icon.music?<SimpleIconsYoutubeshorts fill="white" stroke="none"/>:<SimpleIconsYoutubeshorts fill="none" stroke="white"/>}
        <h2 className='text-base font-semibold'>Music</h2>
      </button>
      <button onClick={()=>{setIcon({
          icon:false,
          live:true
        })}} className='flex  hover:bg-[#303030] cursor-pointer w-full py-2 px-[18px] transition rounded-lg gap-5 items-center'>
         {icon.live?<MaterialSymbolsLightSubscriptionsSharp/>:<MaterialSymbolsLightSubscriptionsOutlineSharp/>}
        <h2 className='text-base font-semibold'>Live</h2>
      </button>
      <button onClick={()=>{setIcon({
          icon:false,
          gaming:true
        })}} className='flex gap-5 mt-1 hover:bg-[#303030] cursor-pointer w-full py-2 px-[18px] transition rounded-lg items-center'>
         {icon.gaming?<MaterialSymbolsLightVideoLibrarySharp fill="white" stroke="none"/>:<MaterialSymbolsLightVideoLibrarySharp fill="none" stroke="white"/>}
        <h2 className='text-base font-semibold'>Gaming</h2>
      </button>
      <button onClick={()=>{setIcon({
          icon:false,
          sports:true
        })}} className='flex mb-2 gap-5  hover:bg-[#303030] cursor-pointer px-[18px] w-full py-2 transition rounded-lg items-center'>
         {icon.sports?<OcticonHistory24 strokeWidth="1px" stroke="white"/>:<OcticonHistory24 fill="none" stroke="none"/>}
        <h2 className='text-base font-semibold'>Sports</h2>
      </button>
        </div>
      </div>
      <hr className='w-[240px] opacity-30'/>
      <button className='flex my-2 gap-5  hover:bg-[#303030] cursor-pointer px-[18px] w-full py-2 transition rounded-lg  items-center'>
        <MaterialSymbolsLightVideoLibrarySharp fill="none" stroke="white"/>
        <h2 className='text-base font-bold'>Browse Channels</h2>
      </button>
      <hr className='w-[240px] opacity-30'/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, laborum recusandae minus earum tempore, error doloribus magnam autem beatae quas aperiam delectus. Unde, explicabo ipsa suscipit repudiandae expedita sed aliquid!
    
      
      </p>
      </div>
    </motion.div>
    
  )
}

export default YoutubeSmallScreenAside