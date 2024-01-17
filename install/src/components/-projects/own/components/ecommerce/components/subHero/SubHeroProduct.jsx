import React, { useContext, useState } from 'react'
import { Ecomcontext } from '../../../context/ecomContext'
import Wishlist from '../../../own-navbar/assets/wishlist'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import MaterialSymbolsAddShoppingCartSharp from '../product/MaterialSymbolsAddShoppingCartSharp'
function SubHeroProduct(props) {
    const {all_Products,wishlists,addToWishlist,removeFromWishlist,addToCart} = useContext(Ecomcontext)
      const [products,setProducts] = useState(true)
    const fourProducts = all_Products.map((item,i)=>{
      
        return i===props.first || i===props.second || i===props.third || i===props.forth ||  i===props.fifth || i===props.sixth || i===props.seventh || i===props.eighth ?(
        <div className={`${props.large?"lg:w-full":"lg:w-[25%]"} hover:scale-105 transition hover:shadow-lg  w-[75%] sm:w-[90%] mx-auto h-full  shadow-md`} key={i}>
            <div className='w-full  max-h-[340px] min-h-[280px] h-[71%] relative  cursor-pointer'>
              <Link  onClick={()=>window.scrollTo(0,0)} to={`/project/OWN/E-commerce/product/${item.id}`}><img className='h-full  max-h-[340px] w-full' src={item.images[0]} alt="" /></Link>
                 <button onClick={()=>{wishlists.includes(item)?removeFromWishlist(item):addToWishlist(item)}} className='absolute rounded-[50%] top-2 p-1 right-2 shadow-md hover:shadow-lg flex hover:scale-105 transition justify-center  items-center bg-[#f5f5f5]'>
                    <Wishlist fill={wishlists.includes(item)?"#db4444":"none"}
                    stroke={wishlists.includes(item)?"none":"black"}/>
                    </button> 
                    <button onClick={()=>{addToCart(item);removeFromWishlist(item)}} className='absolute h-10 px-[10px]  bottom-2 right-2  rounded-[50%] shadow-md hover:scale-105
                    transition-all hover:animate-pulse  hover:shadow-lg flex  text-[#fafafa] justify-center items-center bg-[#fafafa]'>
                      <MaterialSymbolsAddShoppingCartSharp/>
                    </button> 
            </div>
            <Link onClick={()=>window.scrollTo(0,0)} to={`/project/OWN/E-commerce/product/${item.id}`}><div  className='p-1 flex flex-col gap-[2px]'>
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
        ):item.title.toLowerCase().includes(props.category) || item.category.includes(props.category)?(
          <div className={`${props.large?"lg:w-full":"lg:w-[25%]"} hover:scale-[1.025] transition hover:shadow-lg  w-[75%] sm:w-[90%] mx-auto h-full  shadow-md`} key={i}>
          <div className='w-full h-[71%] relative  cursor-pointer'>
            <Link  onClick={()=>window.scrollTo(0,0)} to={`/project/OWN/E-commerce/product/${item.id}`}><img className='h-full  max-h-[340px] w-full min-h-[250px]' src={item.images[0]} alt="" /></Link>
               <button onClick={()=>{wishlists.includes(item)?removeFromWishlist(item):addToWishlist(item)}} className='absolute rounded-[50%] top-2 p-1 right-2 shadow-md hover:shadow-lg flex hover:scale-105 transition justify-center  items-center bg-[#f5f5f5]'>
                  <Wishlist fill={wishlists.includes(item)?"#db4444":"none"}
                  stroke={wishlists.includes(item)?"none":"black"}/>
                  </button> 
                  <button onClick={()=>{addToCart(item);removeFromWishlist(item)}} className='absolute h-10 px-[10px]  bottom-2 right-2  rounded-[50%] shadow-md hover:scale-105
                  transition-all hover:animate-pulse  hover:shadow-lg flex  text-[#fafafa] justify-center items-center bg-[#fafafa]'>
                    <MaterialSymbolsAddShoppingCartSharp/>
                  </button> 
          </div>
          <Link  onClick={()=>window.scrollTo(0,0)} to={`/project/OWN/E-commerce/product/${item.id}`}><div  className='p-1 flex flex-col gap-[2px]'>
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
        ):()=>setProducts(false)
    })
  return (
    <div className={`grid grid-cols-1 flex-col sm:grid-cols-2  ${props.large?"lg:grid-cols-3 xl:grid-cols-4":"lg:flex-row lg:flex lg:h-[400px]"} select-none w-full   lg:gap-4 gap-2`}>
      {products?fourProducts:<div className='text-4xl text-black'>No result</div>}
    </div>
  )
}

export default SubHeroProduct


"fr".t