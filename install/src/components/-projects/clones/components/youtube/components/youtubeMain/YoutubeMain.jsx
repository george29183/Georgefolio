import React, { useContext,useState } from 'react'
import { Ecomcontext } from '../../../../../own/components/context/ecomContext'
import PhDotsThreeVerticalBold from "../assets/PhDotsThreeVerticalBold"

import VideoData from './VideoData'
import { useLayoutEffect } from 'react'

function YoutubeMain() {
    const {aside,setAside} = useContext(Ecomcontext)
   
    const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  console.log(window.innerHeight);
  return (
    <div  onClick={()=>{window.innerWidth<1300?setAside(false):null}} className={`pt-16 text-xl  text-[#f0f0f0] w-[100%] xl:h-[80vh] grid lg:h-[75vh] h-[82vh] overflow-y-scroll ${size[0]>1424 && !aside?"grid-cols-4":size[0]>1100?"grid-cols-3":size[0]>700?" grid-cols-2":"grid-cols-1"} pb-20 gap-4 bg-[#0f0f0f] pl-2 pr-10`}>

       {VideoData.map((item, i) => (
        <div className='m-5 w-[100%] group' key={item.id}>
          <div className='relative group'>
            <img className='w-full h-52 cursor-pointer group-hover:rounded-none rounded-lg' src={item.videoPic} alt={item.name} />
            <div className='bg-[#0f0f0f] text-slate-50  group-hover:opacity-0 transition-all rounded-lg px-[3px] text-base absolute bottom-2 right-2'>{item.time.join(":")}</div>
            <div className=' absolute bottom-0 opacity-0 h-1  group-hover:opacity-100 transition-all left-0 right-0 rounded-lg bg-gray-500'>
              <div className='bg-red-600 absolute left-0 bottom-0 top-0 w-[10%]'>
                <div className='bg-red-600 rounded-[50%] absolute -top-[2px] -right-1 w-2 h-2'></div>
              </div>
            </div>
          </div>
          <div className='flex justify-between'>
          <div className='flex gap-2 '>
           <div className=' w-12 h-12'>
             <img className='rounded-[50%] mt-1 h-10 w-12' src={item.profilePic} alt={item.id} />
           </div>
           <div className='flex flex-col'>
             <h2 className='text-[16px] font-semibold font-sans'>{item.name}</h2>
             <h3 className='text-gray-600 text-sm'>{item.author}</h3>
             <div className='flex text-sm text-gray-600'>
               <p>{item.views}</p>
               <p>-</p>
               <p>{item.date}</p>
             </div>
           </div>
          </div>
          <div className='text-sm group-hover:opacity-100 opacity-0 invisible group-hover:visible transition-all pt-2'>
            <PhDotsThreeVerticalBold/>
          </div>
          </div>
        </div>
      ))}
     <div className={`fixed z-[70] top-0 bottom-0 ${aside && window.innerWidth<1300?"opacity-75":"opacity-0 invisible"} duration-500 right-0 left-0 bg-black `}></div>

    </div>
  )
} 

export default YoutubeMain