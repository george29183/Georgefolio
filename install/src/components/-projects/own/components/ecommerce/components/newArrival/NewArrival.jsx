import React from 'react'
import Rectangle from '../subHero/Rectangle'
import Grid from './grid'
function NewArrival(props) {
  return (
    <div className={`${props.className}`}>
        <div className=' px-2 lg:px-[135px] gap-10 lg:gap-24 flex flex-col'>
    <div className='flex flex-col gap-14'>
      <div className='flex items-center gap-4 text-[#db4444] font-semibold'>
         <Rectangle/>
         <h1>This Month</h1>
      </div>
     <div className='flex lg:flex-row gap-8 flex-col lg:gap-20 lg:justify-between'>
        <h1 className='text-4xl lg:text-5xl'>Best Selling Products</h1>
         </div>
     </div>
        <Grid/>
    </div>
    </div>
  )
}

export default NewArrival