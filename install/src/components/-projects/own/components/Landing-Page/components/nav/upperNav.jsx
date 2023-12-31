import React from 'react'
import RiMenu2Fill from '../assets/RiMenu2Fill'

function UpperNav() {
  return (
    <div className='px-2 z-50 py-1 bg-[#363F48]  top-16 border-b border-[#F3F6FB] border-opacity-20 flex justify-between w-full'>
      <div className='lg:hidden'>
        <RiMenu2Fill className="cursor-pointer hover:scale-105 transition-all active:scale-95"/>
      </div>
      <div className='self-end flex  justify-end w-full lg:text-lg text-xl'>
        <button className='py-2 px-4'>sign in</button>
        <button className='py-2 px-4'>sign up</button>
      </div>
    </div>
  )
}

export default UpperNav