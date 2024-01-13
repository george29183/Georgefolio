import React from 'react'
import Rectangle from '../subHero/Rectangle'
import SubHeroProduct from '../subHero/SubHeroProduct'
import { Link } from 'react-router-dom'
function BestSelling() {
  return (
    <div className=' px-2 lg:px-[135px] gap-10 lg:gap-24 flex flex-col'>
    <div className='flex flex-col gap-5'>
      <div className='flex items-center gap-4 text-[#db4444] font-semibold'>
         <Rectangle/>
         <h1>This Month</h1>
      </div>
     <div className='flex lg:flex-row gap-8 flex-col lg:gap-20 lg:justify-between'>
        <h1 className='text-4xl lg:text-5xl'>Best Selling Products</h1>
        <Link onClick={()=>{window.scrollTo(0,0)}} className='self-center' to="/project/OWN/E-commerce/products"><button className='py-4 px-12 bg-[#db4444] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#f5f5f5]  '>View All</button></Link>
        </div>
     </div>
     <SubHeroProduct
       first={25}
       second={55}
       third={77}
       forth={83}
       
       />
     </div>
  )
}

export default BestSelling