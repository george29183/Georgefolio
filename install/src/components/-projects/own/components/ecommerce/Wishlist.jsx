import React, { useContext } from 'react'
import Nav2 from '../own-navbar/nav2'
import Footer from './components/footer/Footer'
import { Ecomcontext } from '../context/ecomContext'
import Rectangle from './components/subHero/Rectangle'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import IconDelete from './components/assets/IconDelete'
import SubHeroProduct from './components/subHero/SubHeroProduct'
function Wishlist() {
  const {wishlists,removeFromWishlist,moveAllToBag,setWishlist,addToCart} = useContext(Ecomcontext)
  return (
    <section>
      <Nav2 paths="wishlist"/>
      <div className='lg:px-[135px] max-w-[1600px] xl:mx-auto gap-16 mt-20 px-12'>
        <div className='flex justify-between w-full items-center'>
          <h1 className='text-xl'>wishlist({wishlists.length})</h1>
          <button onClick={()=>{moveAllToBag();setWishlist([])}} className=' py-4 px-12  shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95  justify-center items-center transition-all gap-3 text-[#212121]  border border-gray-800  mt-2'>Move All To Bag</button>
        </div>
        <hr className='w-[80%] mx-auto mt-12'/>
        <div className={` grid-cols-1  sm:grid-cols-2 mt-16 lg:grid-cols-3 ${wishlists.length<=0?"flex justify-center items-center":"grid"} xl:grid-cols-4 select-none w-full   lg:gap-4 gap-2`}>
          {wishlists.length>0?wishlists.map((item,i)=>{
            return (
              <div className={`"lg:w-full w-[75%] sm:w-[90%] mx-auto h-full group  shadow-md`} key={i}>
            <div className='w-full h-[71%] relative cursor-pointer'>
              <Link to={`/project/OWN/E-commerce/product/${item.id}`}><img className='h-full w-full' src={item.images[0]} alt="" /></Link>
                 <button onClick={()=>{removeFromWishlist(item)}} className='absolute rounded-[50%] top-2 p-1 right-2 shadow-md hover:shadow-lg flex hover:scale-105 transition justify-center items-center bg-[#f5f5f5]'>
                      <IconDelete/>
                    </button> 
                    <button onClick={()=>{addToCart(item);removeFromWishlist(item)}} className='absolute   p-1 right-0 bottom-0 left-0 h-12 invisible shadow-md opacity-0 group-hover:opacity-100 group-hover:visible
                    duration-500 ease-in-out hover:shadow-lg flex  text-[#fafafa] justify-center items-center bg-[#0f0f0f]'>
                      Add to Cart
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
            )
          }):<h1 className='text-2xl'>your items will be shown here!</h1>}
        </div>
        <hr className='w-[80%] mx-auto mt-12'/>
      </div>
      <div className='mt-12 max-w-[1600px] xl:mx-auto mb-28 flex gap-20 flex-col lg:px-[135px] px-12'>
      <div className='flex flex-col gap-5'>
      <div className='flex items-center gap-4 text-[#db4444] font-semibold'>
         <Rectangle/>
         <h1>This Month</h1>
      </div>
     <div className='flex lg:flex-row gap-8 flex-col lg:gap-20 lg:justify-between'>
        <h1 className='text-4xl lg:text-5xl'>Just For You</h1>
        <Link onClick={()=>{window.scrollTo(0,0)}} className='self-center' to="/project/OWN/E-commerce/products"><button className='py-4 px-12 bg-[#db4444] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#f5f5f5]  '>See All</button></Link>
        </div>
     </div>
     <SubHeroProduct
     large={true}
     first={26}
     second={45}
     third={73}
     forth={92}
     />
      </div>
       <Footer/>
    </section>
  )
}

export default Wishlist