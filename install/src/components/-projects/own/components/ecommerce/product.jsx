import React,{useContext, useState} from 'react'
import Nav from '../own-navbar/nav'
import OwnNavbar from '../own-navbar/own-navbar'
import { Ecomcontext } from '../context/ecomContext'
import { Link } from 'react-router-dom'

export default function Product(){
    const {setCartItem,addCart,quantity,allProducts} = useContext(Ecomcontext)
    const collections = allProducts.map((item,i)=>{
      
        const isLastTwo = i >= allProducts.length -2
        
        
         return(
            <Link onClick={(e)=>{e.stopPropagation(); window.scrollTo(0,0); console.log("link");}} key={item.id + item.name} to={`/project/OWN/E-commerce/product/${item.id}`}><div  key={item.id + item.name} className={` cursor-pointer mx-auto  w-[100%] items-center h-[428px]  flex flex-col relative py-2 px-8 mt-12 text-black text-base font-bold
            rounded-lg overflow-hidden ${isLastTwo?`lg:col-span-1 lg:col-start-2`:null} transition-all
             duration-700 ease-in-out shadow-md xl:text-3xl lg:text-2xl hover:scale-105
              hover:shadow-lg  before:absolute before:top-0 
              before:-left-full before:w-full before:h-full before:transition-all
              active:scale-95
                before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg 
                hover:before:left-0`}>
              <div className=' mx-auto w-full h-80 bg-slate-300 rounded-xl'>
                <img className='h-full relative bg-cover w-full rounded-xl' src={item.image} />
               
              </div>
                <div className='flex flex-col w-full'>
                  <div className='flex justify-between px-2 w-full'>
                    <p className='text-lg text-slate-950'>{item.name}</p>
                  <div className='text-lg text-orange-700'>${item.new_price}
                  </div>
                  </div>
                  <div className='w-[100%] h-16 pl-5 text-xs text-slate-500 flex justify-between'>
                    <p className='w-[50%]'>{item.disc}</p>
                    <p className='text-xl pr-2 line-through'>${item.old_price}</p>
                  </div>
                  
                </div>
           
            </div></Link>
    
         )
        })
  return (
    <>
    <OwnNavbar  path="E-commerce" sec="product"/>
    <Nav/>
    
    <section>
        <h1 className='text-center text-2xl text-bold'>OUR PRODUCTS</h1>
        <p className='text-center text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis totam earum voluptate porro explicabo eum reiciendis, non veritatis, similique ea reprehenderit fuga, facilis id. Similique in aut atque blanditiis nobis?</p>
        <div className='mx-auto px-4 gap-4 grid w-[90%] lg:w-full grid-cols-1 sm:grid-cols-2 mb-10 xl:grid-cols-4 lg:grid-cols-3'>
            {collections}
        </div>
    </section>
    </>
  )
}

