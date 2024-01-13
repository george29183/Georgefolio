import React, { useContext } from 'react'
import Nav2 from '../own-navbar/nav2'
import Footer from './components/footer/Footer'
import { Ecomcontext } from '../context/ecomContext'
import SubHeroProduct from './components/subHero/SubHeroProduct'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import IconDelete from './components/assets/IconDelete'
function Wishlist() {
  const {wishlists,removeFromWishlist} = useContext(Ecomcontext)
  return (
    <section>
      <Nav2/>
      <div className='lg:px-[135px] gap-16 mt-20 px-12'>
        <div className='flex justify-between w-full items-center'>
          <h1 className='text-xl'>wishlist({wishlists.length})</h1>
          <button className=' py-4 px-12  shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95  justify-center items-center transition-all gap-3 text-[#212121]  border border-gray-800  mt-2'>Move All To Bag</button>
        </div>
        <div className={`grid grid-cols-1 flex-col sm:grid-cols-2 mt-16 lg:grid-cols-3 xl:grid-cols-4 select-none w-full   lg:gap-4 gap-2`}>
          {wishlists.map((item,i)=>{
            return (
              <div className={`"lg:w-full w-[75%] sm:w-[90%] mx-auto h-full  shadow-md`} key={i}>
            <div className='w-full h-[71%] relative cursor-pointer'>
              <Link to={`/project/OWN/E-commerce/product/${item.id}`}><img className='h-full w-full' src={item.images[0]} alt="" /></Link>
                 <button onClick={()=>{removeFromWishlist(item)}} className='absolute rounded-[50%] top-2 p-1 right-2 shadow-md hover:shadow-lg flex hover:scale-105 transition justify-center items-center bg-[#f5f5f5]'>
                      <IconDelete/>
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
          })}
        </div>
      </div>
       <Footer/>
    </section>
  )
}

export default Wishlist