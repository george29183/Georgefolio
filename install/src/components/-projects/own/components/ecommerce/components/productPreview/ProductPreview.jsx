import React, { useState } from 'react'
import SubHeroProduct from '../subHero/SubHeroProduct'
import Rectangle from '../subHero/Rectangle'
import { Link } from 'react-router-dom'
function ProductPreview(props) {
  return (
    <div className={`${props.className}`}>
        <div className=' px-2 lg:px-[135px] gap-10 lg:gap-24 flex flex-col'>
    <div className='flex flex-col gap-5'>
      <div className='flex items-center gap-4 text-[#db4444] font-semibold'>
         <Rectangle/>
         <h1>This Month</h1>
      </div>
     <div className='flex lg:flex-row gap-8 flex-col lg:gap-20 lg:justify-between'>
        <h1 className='text-4xl lg:text-5xl'>Best Selling Products</h1>
        
        </div>
     </div>
     <SubHeroProduct
       large={true}
       first={1}
       second={15}
       third={28}
       forth={32}
       fifth={35}
       sixth={48}
       seventh={53}
       eighth={57}
       />
       <Link onClick={()=>{window.scrollTo(0,0)}} className='mx-auto' to="/project/OWN/E-commerce/products"><button className='py-4 px-12 bg-[#db4444] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#f5f5f5] '>View All Products</button></Link>
     </div>

    </div>
  )
}

export default ProductPreview