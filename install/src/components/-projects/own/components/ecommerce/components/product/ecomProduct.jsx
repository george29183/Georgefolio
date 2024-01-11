import React from 'react'
import { Link } from 'react-router-dom'
import allProducts from '../assets/allProduct'

export default function EcomProduct(){
   const collection = allProducts.map((item,i)=>{
    
    if(i>6 &&i<11){
     return(
       <Link key={item.id} onClick={()=>{window.scrollTo(0,0)}} to={`/project/OWN/E-commerce/product/${item.id}`}> <div  className='group cursor-pointer mx-auto lg:w-full  w-[80%] items-center h-[max-content]  flex flex-col relative py-2 px-8 mt-12 text-black text-base font-bold
        rounded-lg overflow-hidden transition-all
         duration-700 ease-in-out shadow-md xl:text-3xl lg:text-2xl hover:scale-105
          hover:shadow-lg  before:absolute before:top-0 
          before:-left-full before:w-full before:h-full before:transition-all
          active:scale-95
            before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg 
            hover:before:left-0'>
          <div className=' mx-auto w-full h-80 bg-slate-300 rounded-xl'>
            <img className='h-full relative bg-cover w-full rounded-xl' src={item.images[0]} />
          </div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between px-2 w-full'>
                <p className='text-lg text-slate-950'>{item.title}</p>
              <div className='text-lg text-orange-700'>${Math.round(item.price-item.price*(item.discountPercentage/100))}
              </div>
              </div>
              <div className='w-[100%] h-16 pl-5 text-xs text-slate-500 flex justify-between'>
                <p className='w-[50%]'>{item.description}</p>
                <p className='text-xl pr-2 line-through'>${item.price}</p>
              </div>
              
            </div>
       
        </div></Link>
        
     )}else{null}
    })

  return (
    <section className='bg-slate-100 flex flex-col h-[max-content] pt-16 '>
    <div>
        <h1 className='text-center lg:text-3xl xl:text-5xl text-bold text-slate-950 text-2xl'>OUR PRODUCTS</h1>
        <p className='mx-auto text-center mt-2 lg:text-xl  text-slate-950 sm:w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam recusandae minus nobis odit impedit quos molestiae, quidem voluptate consequuntur eligendi itaque hic optio, unde sequi fugit? Quidem dolore dolorem similique?</p>
    </div>
    <hr className='border-t-2 border-slate-900 w-[30%]  mx-auto mt-10'/>
    <div className=' pt-10  gap-5 lg:flex grid grid-cols-1 mx-5 '>
       {collection}
    </div>
    <Link className='self-center' to="/project/OWN/E-commerce/products"><button onClick={()=>{window.scrollTo(0,0)}} className='self-center mx-auto
     relative py-2 px-8 mt-12 text-black text-base font-bold
           rounded-lg overflow-hidden bg-slate-50 transition-all
            duration-700 mb-12 ease-in-out shadow-md xl:text-3xl lg:text-2xl hover:scale-105 hover:text-white
             hover:shadow-lg active:scale-90 before:absolute before:top-0 
             before:-left-full before:w-full before:h-full before:bg-gradient-to-r
              before:from-slate-900 before:to-slate-500 before:transition-all
               before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg 
               hover:before:left-0'>More Products</button></Link>
    </section>
  )
}

