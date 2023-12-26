import React,{useState} from 'react'
import MaterialSymbolsKeyboardArrowDown from './MaterialSymbolsKeyboardArrowDown'
import { Link } from 'react-router-dom'
import BiInfoCircle from './icons/BiInfoCircle'
import Fa6RegularClone from './icons/Fa6RegularClone'
import TablerShieldCode from './icons/TablerShieldCode'
import CarbonApi1 from './icons/CarbonApi1'
import MdiLightSleep from './icons/MdiLightSleep'
import GridiconsCustomize from './icons/GridiconsCustomize'
import StreamlineBrowserWebsite1 from './icons/StreamlineBrowserWebsite1'
import Fa6SolidGears from './icons/Fa6SolidGears'
import IconoirEmojiSatisfied from './icons/IconoirEmojiSatisfied'
import MdiGithub from './icons/MdiGithub'
import MdiFirebase from './icons/MdiFirebase'
import MaterialSymbolsAndroidContactsOutline from './icons/MaterialSymbolsAndroidContactsOutline'
import Fa6SolidDiagramProject from './icons/Fa6SolidDiagramProject'
import CarbonSkillLevelIntermediate from './icons/CarbonSkillLevelIntermediate'

export default function Aside(){
  const [projectA,setProjectA] = useState(false)
  const [skillsA,setSkillsA] = useState(false)
  const hovers = ' cursor-pointer w-full flex items-center gap-2 py-3 px-4 border-b-slate-50 border-b hover:bg-slate-200 active:bg-slate-200 active:text-cyan-400  hover:scale-105 transition hover:text-cyan-400'
  return (
    <div className='asse flex overflow-hidden  rounded-md w-[60%] right-0  h-[max-content]  z-20 lg:hidden lg:text-3xl text-2xl top-16 absolute'>
       <ul className='w-[100%]  text-slate-200 flex items-start flex-col'>
          
          <Link to='/about'><li className={`${hovers}`}>
            <BiInfoCircle/> About<span className='invisible'>hfhfhfhfhfhgkgkkkhjkhkhkhhkhkhkhihighthth</span>
            </li></Link>
          <li onClick={()=>{setProjectA(!projectA); setSkillsA(false)}} 
          className={`cursor-pointer py-2 ${hovers} border-b-slate-50 border-b transition hover:text-cyan-400 hover:scale-105 relative  flex items-center`}>
           <Fa6SolidDiagramProject/> Projects
           <MaterialSymbolsKeyboardArrowDown className={`${projectA?"rotate-180 duration-200 transition-all":"rotate-[360deg] transition-all duration-200"}`}/>
            </li>
            {projectA?<><Link to='/project/OWN'><li className={hovers}><TablerShieldCode/>OWN<span className='invisible'>hfhfhfhfhfhgkgkkkhjkhkhkhhkhkhkhifbfbfbffbhi</span></li></Link>
      <Link to='/project/clones'><li className={hovers}><Fa6RegularClone/>clones<span className='invisible'>hfhfhfhfhfhgkgkkkhjkhkfbfbsfbhkhhkhkhkhihi</span></li></Link>
      <Link to="/project/API's"><li className={hovers}><CarbonApi1/>API's<span className='invisible'>hfhfhfhfhfhgkgkkkhjkhkhbfsfbbbfbkhhkhkhkhihi</span></li></Link>
      <Link to='/project/when-bored'><li className={hovers}><MdiLightSleep/>Bored<span className='invisible'>hfhfhfhfhfhgkgkkkhfbfbsbbfbdfjkhkhkhhkhkhkhihi</span></li></Link>
      <Link to='/project/custom'><li className={hovers}><GridiconsCustomize/>Custom<span className='invisible'>hfhfhfhfhfhgkgkbfsbfbbkkhjkhkhkhhkhkhkhihi</span></li></Link></>:null}
          <li onClick={()=>{setSkillsA(!skillsA); setProjectA(false)}} 
          className={`cursor-pointer py-2 ${hovers} border-b-slate-50 border-b transition hover:text-cyan-400 hover:scale-105 relative  flex items-center`}>
           <CarbonSkillLevelIntermediate/> Skills
           <MaterialSymbolsKeyboardArrowDown className={`${skillsA?"rotate-180 duration-200 transition-all":"rotate-[360deg] transition-all duration-200"}`}/>
            </li>
            {skillsA?<><Link to="/skills/frontend"><li className={hovers}><StreamlineBrowserWebsite1/>Frontend<span className='invisible'>hfhfhfhfhfhgkgkkkhjkhkhkhhkhkhkhihi</span></li></Link>
      <Link to="/skills/backend"><li className={hovers}><Fa6SolidGears/>Backend<span className='invisible'>hfhfhfhfhfhgkgkkkhjkhkhkhhkhkhkhihi</span></li></Link>
      <Link to="/skills/UIUX"><li className={hovers}><IconoirEmojiSatisfied/>UI/UX<span className='invisible'>hfhfhfhfhfhgkgkkkhjkhkhkhhkhkhkhihi</span></li></Link>
      <Link to="/skills/github"><li className={hovers}><MdiGithub/>Github<span className='invisible'>hfhfhfhfhfhgkgkkkhjkhkhkhhkhkhkhihi</span></li></Link>
      <Link to="/skills/firebase"><li className={hovers}><MdiFirebase/>Firebase<span className='invisible'>hfhfhfhfhfhgkgkkkhjkhkhkhhkhkhkhihi</span></li></Link></>:null}
        <Link to='/contact'><li className={`hover:bg-slate-200  cursor-pointer flex items-center  py-3 px-4 gap-2 transition hover:text-cyan-400 hover:scale-105`}>
          <MaterialSymbolsAndroidContactsOutline/>Contact
          <span className='invisible'>hfhfhfhfhfhgkgkhhihihihihhihihhihhih</span>
          </li></Link>

          
        </ul>
    </div>
  )
}

