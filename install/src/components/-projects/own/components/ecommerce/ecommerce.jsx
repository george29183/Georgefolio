import React,{useState,useEffect} from 'react'
import OwnNavbar from '../own-navbar/own-navbar'
import EcomHero from './components/hero/ecomHero'
import EcomSubHero from './components/subHero/ecomSubHero'
import EcomProduct from './components/product/ecomProduct'
import Nav from '../own-navbar/nav'
import Nav2 from '../own-navbar/nav2'
import BestSelling from './components/bestselling/BestSelling'
import Ad from './components/ad/Ad'
import ProductPreview from './components/productPreview/ProductPreview'
import NewArrival from './components/newArrival/NewArrival'
import Services from './components/services3/Services'
import Footer from './components/footer/Footer'

export default function Ecommerce(){
  useEffect(() => {
    document.title = 'GeorgeFi';
  }, []);

  return (
    
    <section>
        <Nav2 paths="home"/>
        <div  className='max-w-[1600px] xl:mx-auto'>
        <EcomHero/>
        <EcomSubHero/>
        <EcomProduct/>
        <BestSelling/>
        <Ad className="mt-36"/>
        <ProductPreview className="mt-16"/>
        <NewArrival className="mt-36"/>
        <Services className="mt-36 flex flex-col items-center gap-20 lg:flex-row lg:justify-center"/>
        </div>
        <Footer className="mt-36"/>
        </section>
       
  )
}

