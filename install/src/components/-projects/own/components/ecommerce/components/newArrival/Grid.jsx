import React from 'react'
import ps5 from './ps-5-slim-goedkope-playstation-large-1.png'
import gucci from './e-82-cd-70-aa-6522-dd-785109-a-455904-c.png'
import woman from './attractive-woman-wearing-hat-posing-black-background-1.png'
import echo from './amazon-echo-png-clipart-transparent-amazon-echo-png-1.png'
function Grid() {
  return (
    <div className='w-full  text-[#fafafa] flex flex-col lg:grid lg:gap-8 lg:grid-cols-4'>
        <div className='flex justify-center items-end col-span-2  bg-black relative row-span-2'>
            <img  src={ps5} alt="" /> 
            <div className='absolute flex flex-col justify-start items-start lg:w-[50%] gap-4 bottom-8 left-8'>
                <h1 className='text-4xl lg:text-3xl'>PlayStation 5</h1>
               <p className='text-lg lg:text-sm lg:w-[70%]'>Black and White version of the PS5 coming out on sale.</p>
               <button className='text-[#ffffff] text-xl lg:text-lg'>Shop Now</button>
            </div>
        </div>
        <div className='flex justify-end bg-[#0D0D0D] relative  col-span-2 '>
            <img  src={woman} alt="" />
            <div className='absolute flex flex-col justify-start items-start lg:w-[50%] bottom-5 left-4'>
                <h1 className='text-4xl lg:text-3xl mb-3'>Women’s Collections</h1>
               <p className='text-lg lg:text-sm mb-4'>Featured woman collections that give you another vibe.</p>
               <button className='text-[#ffffff] text-xl lg:text-lg'>Shop Now</button>
            </div>
        </div>
        <div  className='bg-black flex justify-center items-end z-20  relative'>
           <img src={echo} alt="" /> 
           <div className='absolute h-full w-full bg-[#D9D9D9E5]  rounded-[50%] -z-10 opacity-[0.3] top-0 blur-[100px] '/> 
           <div className='absolute flex flex-col justify-start items-start lg:w-[70%]  bottom-2 left-5'>
                <h1 className='text-4xl lg:text-2xl mb-1'>Speakers</h1>
               <p className='text-lg lg:text-sm mb-2'>Amazon wireless speakers</p>
               <button className='text-[#ffffff] text-xl lg:text-lg'>Shop Now</button>
            </div>
        </div>
        <div className='bg-black flex justify-center py-3 lg:py-0 items-end z-20 relative col-span-1 '>
            <img className=''  src={gucci} alt="" />
            <div className='absolute h-full w-full bg-[#D9D9D9E5] rounded-[50%] -z-10 opacity-[0.6] top-0 blur-[100px] '/> 
            <div className='absolute flex flex-col justify-start items-start lg:w-[70%]  bottom-2 left-5'>
                <h1 className='text-4xl lg:text-2xl mb-1'>Perfume</h1>
               <p className='text-lg lg:text-sm mb-2'>GUCCI INTENSE OUD EDP</p>
               <button className='text-[#ffffff] text-xl lg:ext-lg'>Shop Now</button>
            </div>
        </div>
     
      
      
      
    </div>
  )
}

export default Grid