import React,{useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Ecomcontext } from '../context/ecomContext'
import OwnNavbar from '../own-navbar/own-navbar'
import Nav from '../own-navbar/nav'
import IconParkOutlineCheckCorrect from './components/assets/IconParkOutlineCheckCorrect'

export default function Producty(){
    const {all_Products,setCartItem,addCart,cart,quantity,showPopup,showPopups} = useContext(Ecomcontext)
    
  const {productId} = useParams()
  const product = all_Products[productId-1]
  
  return (
    <>
    <OwnNavbar path="Ecommerce" sec="products" thir={product.title}/>
    <Nav/>
    {showPopup && (
        <div className="sticky flex items-center transition-all lg:top-40 m-0 lg:absolute top-32 bg-slate-300 w-[50%] lg:left-[25%] mx-auto text-white z-[100] px-4 py-2 rounded-md shadow-md">
         <IconParkOutlineCheckCorrect/> Item added successfully!
        </div>
      )}
   
    <div className='lg:flex'>
        <div>
            <img className='rounded-b-xl w-full' src={product.images[0]} alt="" />
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-center uppercase m-4 text-2xl text-bold'>{product.title}</h1>
            <p className='text-center text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint iure porro deleniti! Ut aspernatur reprehenderit dolor repellat quia eaque, nulla voluptatum provident fugit laudantium? Inventore molestiae magnam reprehenderit nam eaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, facilis. Assumenda sequi nobis quo quod, hic officia nulla praesentium laudantium deserunt velit maiores itaque excepturi. Ab accusamus eligendi error labore?</p>
            <div className='text-4xl text m-4 text-center'>${Math.round(product.price-product.price*(product.discountPercentage/100))}</div>
            <div className='text-4xl m-4 text-red-400 line-through text text-center'>${product.price}</div>
            <button className='w-[80%]
     relative py-4 px-8 mt-12 text-black text-base font-bold
           rounded-lg overflow-hidden bg-slate-100 transition-all
            duration-700  ease-in-out shadow-md xl:text-2xl lg:text-xl hover:scale-105
             hover:shadow-xl active:scale-90 before:absolute before:top-0 
             before:-left-full before:w-full before:h-full uppercase before:transition-all
               before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg 
               hover:before:left-0'>  {product.isFavourite?"remove from":"add to"} wishlist</button>

            <button onClick={()=>{setCartItem(prev=> prev+1); 
            showPopups();
                    if(product.quantity === 0 && !cart.includes(product) ){
                         addCart(prev=>[...prev, product])
                         quantity(product)
                    }else{ quantity(product) }}} className='w-[80%]
     relative py-4 px-8 mt-5 text-black text-base font-bold
           rounded-lg overflow-hidden bg-orange-700 transition-all
            duration-700 mb-12 ease-in-out shadow-md xl:text-2xl lg:text-xl hover:scale-105 hover:text-white
             hover:shadow-xl active:scale-90 before:absolute before:top-0 
             before:-left-full before:w-full before:h-full before:bg-gradient-to-r
              before:from-red-800 uppercase before:to-orange-900 before:transition-all
               before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg 
               hover:before:left-0'> add to cart</button>
        </div>
    </div>
    </>
  )
}

