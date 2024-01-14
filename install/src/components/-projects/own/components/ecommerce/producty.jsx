import React,{useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Ecomcontext } from '../context/ecomContext'
import Nav2 from '../own-navbar/nav2'
import Footer from './components/footer/Footer'
import ReactStars from "react-rating-stars-component";
import MdiMinusThick from './components/assets/MdiMinusThick'
import MaterialSymbolsAddRounded from './components/assets/MaterialSymbolsAddRounded'
import Wishlist from '../own-navbar/assets/wishlist'
import Frame911 from './components/assets/Frame911'
import Rectangle from './components/subHero/Rectangle'
import MaterialSymbolsAddShoppingCartSharp from './components/product/MaterialSymbolsAddShoppingCartSharp'
import { Link } from 'react-router-dom'
export default function Producty(){
    const {all_Products,setCartItem,addCart,cart,quantity,showPopup,showPopups,addItem,wishlists,addToWishlist,removeFromWishlist} = useContext(Ecomcontext)
    const [count,setCount] = useState(1)
  const {productId} = useParams()
  const product = all_Products[productId-1]
  
  const fourProducts = all_Products.map((item,i)=>{
      
    return product.category===item.category && product.id!==item.id?(
    <div className={` w-[75%] sm:w-[90%] mx-auto h-full  shadow-md`} key={i}>
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
    <div className='mt-10 mb-32 px-2 lg:px-[135px] flex flex-col select-none gap-10'>
      <h1 className='text-gray-400'>Home / Products / <span className='text-[#212121] font-semibold ml-1'>{product.title}</span></h1>
       <div className='flex lg:flex-row flex-col-reverse gap-20'>
        <div className='grid w-[90%] lg:w-[65%] mx-auto lg:mx-0 grid-cols-4'>
          <div className='col-span-1 row-span-4'>
            {product.images.map((item,i)=>{
              return i>0?<img className='w-40 h-40' key={i} src={item} alt="" />:null
            })}
          </div>
          <div className=' col-span-3 row-span-4 justify-center items-center bg-[#fafafa]'>
             <img  src={product.images[0]} alt="" />
          </div>
         
        </div>
        <div className='lg:w-[35%] mx-auto w-[75%]'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl'>{product.title}</h1>
            <div className='flex items-center gap-1'>
               <ReactStars
               value={product.rating}
               half={true}
                edit={false}
                a11y={false}
               /> 
               <div className='w-[1px] bg-[#212121] h-full'/>
               <p>({product.stock})</p>
               <p className='text-green-500'>In Stock</p>
            </div>
            <h1 className='text-4xl mb-2'>${Math.round(product.price-product.price*(product.discountPercentage/100))}</h1>
            <p>{product.description}</p>
            <hr className='w-full mt-4'/>
          </div>
          <div className='flex flex-col items-center mt-8 gap-16'>
            <div className='flex w-full gap-5 items-center justify-between'>
              <div className='border border-gray-400 rounded-md flex w-[30%] h-[max-content] justify-between'>
                <MdiMinusThick className="border-r border-gray-400 px-2"
                onClick={()=>{count===1?setCount(1):setCount(count-1)}}
                />
                <p className='text-lg'>{count}</p>
                <MaterialSymbolsAddRounded className="border-l border-gray-400 bg-[#db4444] px-2" onClick={()=>{setCount(count+1)}} fill="white"/>
              </div>
              <div className='flex gap-5'>
                <button onClick={()=>{
                  setCartItem(prev=> prev+count); 
                  if(product.quantity === 0 && !cart.includes(product) ){
                       addCart(prev=>[...prev, product])
                       quantity(product,count)
                  }else{ quantity(product,count) }
                }} className='py-2 rounded-lg px-10 bg-[#db4444] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#f5f5f5]  '>Add To Cart</button>
                <button onClick={()=>{wishlists.includes(product)?removeFromWishlist(product):addToWishlist(product)}} className=' top-2 p-1 right-2 shadow-md hover:shadow-lg flex hover:scale-105 transition justify-center  items-center bg-[#f5f5f5]'>
                    <Wishlist fill={wishlists.includes(product)?"#db4444":"none"}
                    stroke={wishlists.includes(product)?"none":"black"}/>
                    </button>
              </div>
             </div>
             <Frame911/>
          </div>
        </div>
      </div>
      <div className='mt-10  flex-col'>
       <div className='flex items-center gap-4 text-[#db4444] mb-16 font-semibold'>
           <Rectangle/>
           <h1>Related Item</h1>
        </div>
        <div className={`grid grid-cols-1 flex-col sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 select-none w-full   lg:gap-4 gap-2`}>
         {fourProducts}
        </div>
      </div>
    </div>
    <Footer/>
  </section>
 )
}

