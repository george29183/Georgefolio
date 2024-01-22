import React,{useState} from 'react'
import logo from "../assets/george.svg"
import IcBaselineMenu from './IcBaselineMenu'
import RadixIconsCross1 from './RadixIconsCross1'
import Aside from './aside'
import { useContext } from 'react'
import { Ecomcontext } from '../-projects/own/components/context/ecomContext'
import MdiThemeLightDark from './icons/MdiThemeLightDark'
import Themes from './Themes'



export default function Navbar(){
  const {menu,setmenu} = useContext(Ecomcontext)
  const [theTheme,setTheTheme] = useState(false)
  const handleSmoothScroll = (elementId) => {
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
    <nav onMouseLeave={()=>setTheTheme(false)}  className='select-none  sticky top-0 z-[100] items-center bg-navbg bg-opacity-90 flex justify-between pr-4 navv h-14 '>
    <div className='flex  selection:bg-none relative items-center'>
        <img
    alt='logo'
    className='w-20  mt-3 h-24'
    src={logo}
    />
    <h1 onClick={() => handleSmoothScroll('home')} className='text-2xl -gap-2 absolute left-16 text-cardsText'>EORGE</h1>
      </div>
      
    <div className='hidden  text-slate-50 lg:text-xl lg:block'>
    <ul className='flex lg:gap-20 justify-around'>
      <li onClick={() => handleSmoothScroll('about')} className='cursor-pointer transition hover:scale-105'>
        About
      </li>
      <li onClick={() => handleSmoothScroll('skills')} className='relative flex items-center cursor-pointer transition hover:scale-105'>
        Skills
      </li>
      <li onClick={() => handleSmoothScroll('projects')} className='relative flex items-center cursor-pointer transition hover:scale-105'>
        Projects
      </li>
      <li onClick={() => handleSmoothScroll('contact')} className='cursor-pointer transition hover:scale-105'>
        Contact
      </li>
    </ul>
    </div>
    <div className='flex items-center gap-5'>
     <MdiThemeLightDark onClick={()=>setTheTheme(!theTheme)} className=" cursor-pointer hover:scale-105 active:scale-95 transition"/>
     {theTheme?<Themes/>:null}
    <div className='lg:hidden text-slate-50' onClick={()=>{setmenu(!menu)}}>
          {menu ?<IcBaselineMenu/>:<RadixIconsCross1/>}
        </div>
        {menu?null:<Aside/>}
    </div>
 
        
    </nav>
  )
}
