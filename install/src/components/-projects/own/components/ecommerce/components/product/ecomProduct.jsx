import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import allProducts from '../assets/allProduct'
import Rectangle from '../subHero/Rectangle'
import CellPhone from './CellPhone'
import Computer from './Computer'
import Watch from './vector2'
import Camera from './Camera'
import Headphone from './Headphone'
import Gamepad from './Gamepad'
export default function EcomProduct(){
  const [category,setCategory] = useState({
    phones:false,
    computers:false,
    watch:false,
    camera:false,
    headphones:false,
    gaming:false
  })
 return(
  <div className=' px-2 lg:px-[135px] gap-10 lg:gap-16 flex flex-col'>
  <div className='flex flex-col gap-5'>
    <div className='flex items-center gap-4 text-[#db4444] font-semibold'>
       <Rectangle/>
       <h1>Categories</h1>
    </div>
   <div className='flex lg:flex-row gap-8 flex-col lg:gap-20 lg:items-end'>
      <h1 className='text-4xl lg:text-5xl'>Browse By Category</h1>
      </div>
      <div className='flex flex-col gap-4  mt-16 lg:flex-row'>
        <button onClick={()=>{setCategory({category:false,phones:true})}} className={`flex flex-col items-center justify-center px-14 ${category.phones?"bg-[#db4444]":null} py-5 border border-gray-500 mx-auto w-[40%] sm:w-[30%] lg:w-[15%]`}><CellPhone stroke={category.phones?"white":"black"}/>
         <h1 className={`${category.phones?"text-white":null}`}>Phones</h1>
        </button>
        <button onClick={()=>{setCategory({category:false,computers:true})}} className={`flex flex-col items-center justify-center px-14 ${category.computers?"bg-[#db4444]":null} py-5 border border-gray-500 mx-auto w-[40%] sm:w-[30%] lg:w-[15%]`}><Computer stroke={category.computers?"white":"black"}/>
        <h1 className={`${category.computers?"text-white":null}`}>Computers</h1>
        </button>
        <button onClick={()=>{setCategory({category:false,watch:true})}} className={`flex flex-col items-center justify-center px-14 ${category.watch?"bg-[#db4444]":null} py-5 border border-gray-500 mx-auto w-[40%] sm:w-[30%] lg:w-[15%]`}><Watch fill={category.watch?"#db4444":"white"} stroke={category.watch?"white":"black"}/>
        <h1 className={`${category.watch?"text-white":null}`}>Watch</h1>
        </button>
        <button onClick={()=>{setCategory({category:false,camera:true})}} className={`flex flex-col items-center justify-center px-14 ${category.camera?"bg-[#db4444]":null} py-5 border border-gray-500 mx-auto w-[40%] sm:w-[30%] lg:w-[15%]`}><Camera stroke={category.camera?"white":"black"}/>
        <h1 className={`${category.camera?"text-white":null}`}>Camera</h1>
        </button>
        <button onClick={()=>{setCategory({category:false,headphones:true})}} className={`flex flex-col items-center justify-center px-14 ${category.headphones?"bg-[#db4444]":null} py-5 border border-gray-500 mx-auto w-[40%] sm:w-[30%] lg:w-[15%]`}><Headphone stroke={category.headphones?"white":"black"}/>
        <h1 className={`${category.headphones?"text-white":null}`}>HeadPhones</h1>
        </button>
        <button onClick={()=>{setCategory({category:false,gaming:true})}} className={`flex flex-col items-center justify-center px-14 ${category.gaming?"bg-[#db4444]":null} py-5 border border-gray-500 mx-auto w-[40%] sm:w-[30%] lg:w-[15%]`}><Gamepad stroke={category.gaming?"white":"black"}/>
        <h1 className={`${category.gaming?"text-white":null}`}>Gaming</h1>
        </button>
      </div>
   </div>
   <hr className='mt-4 w-full mb-20'/>
   </div>
 ) 
 
}

