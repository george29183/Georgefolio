import React,{useState,useEffect} from 'react'
import OwnNavbar from '../own-navbar/own-navbar'
import EcomHero from './components/hero/ecomHero'
import EcomSubHero from './components/subHero/ecomSubHero'
import EcomProduct from './components/product/ecomProduct'
import Nav from '../own-navbar/nav'
import Nav2 from '../own-navbar/nav2'


export default function Ecommerce(){
  const [opa,setOpa] = useState(0)
  
  useEffect(()=>{
    opacity()
},[])

const opacity = ()=>{
  setInterval(() => {
      setOpa(opa+1)
  },500)
}
  
  return (
    
    <section className={`opacity-${opa} transition-all duration-300`}>
        <OwnNavbar path='E-commerce'/>
        <Nav2/>
        <EcomHero/>
        <EcomSubHero/>
        <EcomProduct/>
      
        </section>
       
  )
}

