import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import { Ecomcontext } from '../context/ecomContext'
import MaterialSymbolsRemoveShoppingCart from '../ecommerce/MaterialSymbolsRemoveShoppingCart'
import MdiDotsGrid from '../ecommerce/components/assets/MdiDotsGrid'
import RadixIconsCross1 from '../../../../navbar/RadixIconsCross1'
import OwnAside from '../ownAside'

export default function Nav(props){
    const [ownMenu,setOwnMenu] = useState(true)
   const {cartItem} = useContext(Ecomcontext)
  return (
    <div className='select-none z-30 sticky top-16 bg-slate-50 w-full h-16 py-4 gap-2 justify-between items-center p-3 flex'>
    <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce"><h1 className='text-bold text-xl hover:scale-105 cursor-pointer'>GeorgeFi</h1></Link>
    <ul className=' hidden lg:flex gap-8 xl:gap-12'>
        <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce"><li className='hover:scale-105 transition cursor-pointer '>Home</li></Link>
        <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/products"><li className='hover:scale-105 transition cursor-pointer '>Products</li></Link>
       <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/contact"> <li className='hover:scale-105 transition cursor-pointer '>Contact</li></Link>
    </ul>
    <div className='relative flex'>
    <Link onClick={()=>{window.scrollTo(0,0)}} to="/project/OWN/E-commerce/cart"><button className={` relative py-2 px-3 text-slate-700 font-bold
        rounded-lg h-12 transition-all
        duration-400 ease-in-out shadow-md hover:scale-110 
         hover:shadow-lg ${props.yes?"hidden":null} hover:shadow-slate-900 active:scale-90 xl:text-3xl lg:text-2xl text-xl `}><MaterialSymbolsRemoveShoppingCart/><div className='absolute -top-1 -right-1 rounded-full w-5 bg-red-800 text-sm text-slate-50 text-center'>{cartItem}</div></button></Link>
           
           <div className='lg:hidden cursor-pointer' onClick={()=>{setOwnMenu(!ownMenu)}}>
      {ownMenu ?<MdiDotsGrid/>:<RadixIconsCross1/>}
    </div>
           </div>
       {ownMenu?null:<OwnAside/>}
    </div>
  )
}

