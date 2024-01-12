import React, { useEffect, useState } from 'react'
import categories from '../assets/categories'
import DropDown from './DropDown'
function CategoryList() {
    const [slide,setSlide] = useState(0)


  return (
    <ul className={` lg:flex-col lg:w-[215px] lg:pt-10 overflow-hidden hidden lg:flex lg:items-start lg:text-xl bg-[#f5f5f5] border-r lg:border-r-black lg:bg-[#ffffff] items-center gap-2 h-8 lg:h-[320px]  relative`}>
        {categories.map((item,i)=>{
        return <button  className={`px-2 lg:bg-[#ffffff] bg-stone-800 lg:text-[#000000] transform rounded-md translate-x-${slide}px] flex-1 text-[#ffffff]`} key={i}>{item}</button>
        })}
    </ul>
  )
}

export default CategoryList