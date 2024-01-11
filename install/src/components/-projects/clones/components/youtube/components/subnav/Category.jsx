import React, { useContext } from 'react'
import { Ecomcontext } from '../../../../../own/components/context/ecomContext';

function Category(props) {
    const {aside} = useContext(Ecomcontext)
    const videoCategories = [
       "All",
        "Tech",
        "Health ",
        "Cooking",
        "Travel",
        "Education",
        "Gaming",
        "DIY",
        "Business",
        "Science",
        "Music",
        "Fashion",
        "Lifestyle",
        "Sports",
        "Entertainment",
        "Documentary",
        "Comedy",
        "Home ",
        "Nature",
        "Art ",
        "Productivity",
      ];
  return (
    <div  className={`flex pt-2 px-4 pb-4 gap-3  h-[55px] overflow-hidden bg-[#0f0f0f] ${aside && props.size>1300?"left-[280px]":props.size>1300?"left-24":props.size>792?"left-24":"left-0"} fixed ${window.innerWidth<699?"top-[125px]":"top-32"} z-50  lg:top-44`}>
      {videoCategories.map((item,i)=>{
        return( 
        <button key={i} className={` overflow-hidden ${i===0?"bg-slate-50 hover:bg-slate-600 hover:text-slate-50 text-[#0f0f0f]":"bg-[#303030] text-slate-50 hover:bg-[#212121]"} transition  font-semibold px-[10px] rounded-lg `}>{item}</button> 
        )
      })}
    </div>
  )
}

export default Category