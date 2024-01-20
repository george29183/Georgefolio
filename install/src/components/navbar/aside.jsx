import React,{useContext, useState} from 'react'
import BiInfoCircle from './icons/BiInfoCircle'
import MaterialSymbolsAndroidContactsOutline from './icons/MaterialSymbolsAndroidContactsOutline'
import Fa6SolidDiagramProject from './icons/Fa6SolidDiagramProject'
import CarbonSkillLevelIntermediate from './icons/CarbonSkillLevelIntermediate'
import { Ecomcontext } from '../-projects/own/components/context/ecomContext'

export default function Aside(){
  const {setmenu} = useContext(Ecomcontext)
  const handleSmoothScroll = (elementId) => {
    setmenu(true)
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }else if(elementId==='home'){
      window.scrollTo({
        top:0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className=' bg-[#f5f5f5] flex overflow-hidden  rounded-md w-full right-0  justify-center items-center h-screen  z-20 lg:hidden lg:text-3xl text-2xl top-[54px] absolute'>
       <ul className='w-[100%] gap-20 text-[#212121] flex items-center flex-col'>
          
          <li onClick={() => handleSmoothScroll('about')} className={`cursor-pointer py-2 border-b-slate-50 border-b transition hover:text-cyan-400 hover:scale-105 relative  flex items-center`}>
            <BiInfoCircle/> About
            </li>
          <li onClick={() => handleSmoothScroll('projects')}
          className={`cursor-pointer py-2 border-b-slate-50 border-b transition hover:text-cyan-400 hover:scale-105 relative  flex items-center`}>
           <Fa6SolidDiagramProject/> Projects
            </li>
            
          <li onClick={() => handleSmoothScroll('skills')} 
          className={`cursor-pointer py-2border-b-slate-50 border-b transition hover:text-cyan-400 hover:scale-105 relative  flex items-center`}>
           <CarbonSkillLevelIntermediate/> Skills
            </li>
        <li onClick={() => handleSmoothScroll('contact')} className={`  cursor-pointer flex items-center  py-3 px-4 gap-2 transition hover:text-cyan-400 hover:scale-105`}>
          <MaterialSymbolsAndroidContactsOutline/>Contact
          </li>

          
        </ul>
    </div>
  )
}

