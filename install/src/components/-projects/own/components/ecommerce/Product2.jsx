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
    const [page,setPage] = useState(0)
    const [next,setNext] = useState(8)
    const [loading, setLoading] = useState(false);
 const {all_Products,wishlists,addToWishlist,removeFromWishlist,addToCart} = useContext(Ecomcontext)
    const fourProducts = all_Products.map((item,i)=>{
      
        return i>=page && i<next? (
        <div className={`$ w-[75%] hover:scale-105 transition hover:shadow-lg sm:w-[90%] mx-auto h-full  lg:w-full shadow-md`} key={i}>
            <div className='w-full  h-[70%] relative  cursor-pointer'>
              <Link  onClick={()=>window.scrollTo(0,0)} to={`/project/OWN/E-commerce/product/${item.id}`}><img className='h-full max-h-[340px] min-h-[250px] w-full' src={item.images[0]} alt="" /></Link>
                 <button onClick={()=>{wishlists.includes(item)?removeFromWishlist(item):addToWishlist(item)}} className='absolute rounded-[50%] top-2 p-1 right-2 shadow-md hover:shadow-lg flex hover:scale-105 transition justify-center  items-center bg-[#f5f5f5]'>
                    <Wishlist fill={wishlists.includes(item)?"#db4444":"none"}
                    stroke={wishlists.includes(item)?"none":"black"}/>
                    </button> 
                    <button onClick={()=>{addToCart(item);removeFromWishlist(item)}} className='absolute h-10 px-[10px]  bottom-2 right-2  rounded-[50%] shadow-md hover:scale-105
                    transition-all hover:animate-pulse  hover:shadow-lg flex  text-[#fafafa] justify-center items-center bg-[#fafafa]'>
                      <MaterialSymbolsAddShoppingCartSharp/>
                    </button> 
            </div>
            <Link  onClick={()=>window.scrollTo(0,0)} className=' ' to={`/project/OWN/E-commerce/product/${item.id}`}><div  className='flex pb-4 px-2 flex-col gap-[2px]'>
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
        const handlePage = (inc)=>{
          setLoading(true)
          switch (inc) {
            case 1:
              setNext(next-8);setPage(page-8)
                break;
            case 0:
              setNext(next+8);setPage(page+8)
              break;

            default:
                break;
        }
          setTimeout(() => {
             
              setLoading(false)
          }, 2000)
        
        }
  return (
    <section>
       <Nav2 paths="products"/>
       <div className='w-full mb-32 px-2 sm:px-12 lg:px-[135px] flex justify-center items-center'>
        <h1 className='mt-10 text-5xl'>All Products</h1>
       </div>
       <div className={`grid grid-cols-1 flex-col sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 select-none w-full sm:px-12 px-2 lg:px-[135px] max-w-[1600px] xl:mx-auto  lg:gap-4 gap-2`}>
         {loading?all_Products.map((item,i)=>{
      
      return i>=page && i<next?(
          <div key={i} className=' animate-pulse mb-10 gap-4 flex h-[340px] w-full'>
          <div className="flex flex-col gap-2 w-full">
            <div className='bg-gray-300 h-60  mb-2'></div>
            <div className='bg-gray-300 h-5 w-[60%]'></div>
            <div className='bg-gray-300 h-5 w-[70%]'></div>
            <div className='bg-gray-300 h-5 w-[70%]'></div>
          </div>
        </div>
         ):null
        })
         :fourProducts}
       </div>
       <div className='w-full mb-32 flex mt-32 justify-center gap-10 items-center'>
        <button onClick={page>0?()=>handlePage(1):null} className='text-3xl py-2 px-3 bg-[#db4444] text-[#fafafa] rounded-md shadow-md flex justify-center items-center hover:scale-105 transition active:scale-95'>{`<`}</button>
        <h1 className='text-3xl'>{page/8+1}/13</h1>
        <button onClick={page<90?()=>handlePage(0):null} className='text-3xl py-2 px-3 bg-[#db4444] text-[#fafafa] rounded-md shadow-md flex justify-center items-center hover:scale-105 transition active:scale-95'>{`>`}</button>
       </div>
       <Footer/>
    </section>
  )
}

export default Product2


