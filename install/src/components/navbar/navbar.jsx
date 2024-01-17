import React,{useState} from 'react'
import logo from "../assets/george_black.svg"
import IcBaselineMenu from './IcBaselineMenu'
import RadixIconsCross1 from './RadixIconsCross1'
import MaterialSymbolsKeyboardArrowDown from './MaterialSymbolsKeyboardArrowDown'
import Aside from './aside'
import Over from './over'
import { Link } from 'react-router-dom'


export default function Navbar(){
  const [menu,setmenu] = useState(true)
  const [path,setPath] = useState('home')
 const [over,setOver] = useState(false)
  
  return (
    <nav onMouseLeave={()=>{setOver(false)}} className='select-none  sticky top-0 z-[100] items-center text-slate-900 flex justify-between pr-4 navv h-16 '>
     <Link to='/' ><div className='flex  selection:bg-none relative items-center'>
        <img
      onClick={()=>{setPath('home')}}
    alt='logo'
    className='w-20  mt-3 h-24'
    src={logo}
    />
    <h1 className='text-2xl -gap-2 absolute left-16 text-slate-50'>EORGE</h1>
      </div></Link>
      
    <div className='hidden  text-slate-50 lg:text-xl lg:block'>
     <ul className='flex  gap-4 justify-around'>
          <Link to='/about'><li className=' cursor-pointer transition hover:scale-105'>About</li></Link>
          <li onMouseOver={()=>{setOver(true); setPath('projects')}} 
          className='relative  flex items-center cursor-pointer transition hover:scale-105'>
            Projects
            <MaterialSymbolsKeyboardArrowDown className={`${over&&path==="projects"?"rotate-180 duration-200 transition-all":"rotate-[360deg] transition-all duration-200"}`}/>
            {over && path === 'projects'?<Over value={path}/>:null}
            </li>
            <li onMouseOver={()=>{setOver(true); setPath('skills')}} 
          className='relative  flex items-center cursor-pointer transition hover:scale-105'>
            Skills
           <MaterialSymbolsKeyboardArrowDown  className={`${over&&path==="skills"?"rotate-180 duration-200 transition-all":"rotate-[360deg] transition-all duration-200"}`}/>
            {over && path === 'skills'?<Over value={path}/>:null}
            </li>
         <Link to='/contact'><li className=' cursor-pointer transition hover:scale-105'>Contact</li></Link>
          
     </ul>
    </div>
    <div className='lg:hidden text-slate-50' onClick={()=>{setmenu(!menu)}}>
          {menu ?<IcBaselineMenu/>:<RadixIconsCross1/>}
        </div>
        {menu?null:<Aside/>}
        
    </nav>
  )
}
