import React from 'react'
import { Link } from 'react-router-dom'
import TablerShieldCode from './icons/TablerShieldCode'
import Fa6RegularClone from './icons/Fa6RegularClone'
import CarbonApi1 from './icons/CarbonApi1'
import MdiLightSleep from './icons/MdiLightSleep'
import GridiconsCustomize from './icons/GridiconsCustomize'

export default function Projects(){
  const hover = 'cursor-pointer w-full flex items-center px-4 gap-2 py-2 border-b-slate-50 border-b hover:bg-slate-200   transition hover:text-cyan-400'
  return (
    <div className='asse absolute flex flex-col justify-around  top-10 -left-12 rounded-lg text-slate-200 w-48  delay-1000  h-[max-content]'>
  <div className='flex  w-full '>
    
      <ul className='flex w-[100%] flex-col'>
      <Link to='/project/OWN'><li className={hover}><TablerShieldCode/>OWN</li></Link>
      <Link to='/project/clones'><li className={hover}><Fa6RegularClone/>clones</li></Link>
      <Link to="/project/API's"><li className={hover}><CarbonApi1/>API's</li></Link>
      <Link to='/project/when-bored'><li className={hover}><MdiLightSleep/>Bored</li></Link>
      <Link to='/project/custom'><li className='cursor-pointer w-full px-4 flex items-center gap-2 py-3  hover:bg-slate-200   transition hover:text-cyan-400'><GridiconsCustomize/>Custom</li></Link>
      </ul>
    
  </div>
</div>

  )
}
