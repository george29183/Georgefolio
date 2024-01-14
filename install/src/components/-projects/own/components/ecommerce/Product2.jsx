import React, { useContext, useState } from 'react'
import Wishlist from '../own-navbar/assets/wishlist'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import MaterialSymbolsAddShoppingCartSharp from './components/product/MaterialSymbolsAddShoppingCartSharp';
import Nav2 from '../own-navbar/nav2'
import Footer from './components/footer/Footer'
import SubHeroProduct from './components/subHero/SubHeroProduct'
import { Ecomcontext } from '../context/ecomContext';


function Product2() {
    const [page,setPage] = useState(8)
 const {all_Products,wishlists,addToWishlist,removeFromWishlist,addToCart} = useContext(Ecomcontext)
    const fourProducts = all_Products.map((item,i)=>{
      
        return i<page? (
        <div className={`$ w-[75%] sm:w-[90%] mx-auto h-full lg:w-full shadow-md`} key={i}>
            <div className='w-full h-[71%] relative  cursor-pointer'>
              <Link to={`/project/OWN/E-commerce/product/${item.id}`}><img className='h-full w-full' src={item.images[0]} alt="" /></Link>
                 <button onClick={()=>{wishlists.includes(item)?removeFromWishlist(item):addToWishlist(item)}} className='absolute rounded-[50%] top-2 p-1 right-2 shadow-md hover:shadow-lg flex hover:scale-105 transition justify-center  items-center bg-[#f5f5f5]'>
                    <Wishlist fill={wishlists.includes(item)?"#db4444":"none"}
                    stroke={wishlists.includes(item)?"none":"black"}/>
                    </button> 
                    <button onClick={()=>{addToCart(item);removeFromWishlist(item)}} className='absolute h-10 px-[10px]  bottom-2 right-2  rounded-[50%] shadow-md hover:scale-105
                    transition-all hover:animate-pulse  hover:shadow-lg flex  text-[#fafafa] justify-center items-center bg-[#fafafa]'>
                      <MaterialSymbolsAddShoppingCartSharp/>
                    </button> 
            </div>
            <Link to={`/project/OWN/E-commerce/product/${item.id}`}><div  className='p-1 flex flex-col gap-[2px]'>
               <div >
                <h1 className='text-lg font-semibold'>{item.title}</h1>
               </div>
               <div className='flex gap-4'>
                <h2 className='text-[#DB4444] font-bold text-lg'>${Math.round(item.price-item.price*(item.discountPercentage/100))}</h2>
                <h2 className='text-gray-500 font-bold text-lg line-through decoration-1'>${item.price}</h2>
               </div>
               <div className='flex'>
                <ReactStars
                count={5}
                value={4.5}
                half={true}
                edit={false}
                a11y={false}
                />
                <h2 className='text-gray-500'>({item.rating})</h2>
               </div>
            </div></Link>
        </div>  
        ):null
        })
  return (
    <section>
       <Nav2/>
       <div className='w-full mb-32 px-12 lg:px-[135px] flex justify-center items-center'>
        <h1 className='mt-10 text-5xl'>All Products</h1>
       </div>
       <div className={`grid grid-cols-1 flex-col sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 select-none w-full px-12 lg:px-[135px]   lg:gap-4 gap-2`}>
         {fourProducts}
       </div>
       <div className='w-full flex justify-center items-center'>
        <button className='text-3xl py-2 px-3 bg-[#db4444] text-[#fafafa] rounded-md shadow-md flex justify-center items-center hover:scale-105 transition active:scale-95'>{`<`}</button>
        <h1 className='text-3xl'>{page/10}/9</h1>
        <button className='text-3xl py-2 px-3 bg-[#db4444] text-[#fafafa] rounded-md shadow-md flex justify-center items-center hover:scale-105 transition active:scale-95'>{`>`}</button>
       </div>
       <Footer/>
    </section>
  )
}

export default Product2