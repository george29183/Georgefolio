import React from 'react'
import { Link } from 'react-router-dom'
import StreamlineBrowserWebsite1 from './icons/StreamlineBrowserWebsite1'
import Fa6SolidGears from './icons/Fa6SolidGears'
import IconoirEmojiSatisfied from './icons/IconoirEmojiSatisfied'
import MdiGithub from './icons/MdiGithub'
import MdiFirebase from './icons/MdiFirebase'

export default function Skills(){
  const hover = 'cursor-pointer w-full flex items-center px-4 gap-2 py-2 border-b-slate-50 border-b hover:bg-slate-200 transition-all  hover:text-cyan-400'
  return (
    <div className='asse  absolute flex flex-col justify-around  top-10 -left-16 rounded-lg  text-slate-200 w-48   h-[max-content]'>
  <div className='flex w-full '>
    
      <ul className='flex w-[100%] flex-col'>
      <Link to="/skills/frontend"><li className={hover}><StreamlineBrowserWebsite1/>Frontend</li></Link>
      <Link to="/skills/backend"><li className={hover}><Fa6SolidGears/>Backend</li></Link>
      <Link to="/skills/UIUX"><li className={hover}><IconoirEmojiSatisfied/>UI/UX</li></Link>
      <Link to="/skills/github"><li className={hover}><MdiGithub/>Github</li></Link>
      <Link to="/skills/firebase"><li className={hover}><MdiFirebase/>Firebase</li></Link>
      </ul>
    
  </div>
</div>

  )
}