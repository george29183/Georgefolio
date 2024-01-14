import React,{useContext} from 'react'
import Nav2 from '../own-navbar/nav2'
import Footer from './components/footer/Footer'
import { Ecomcontext } from '../context/ecomContext'
import MdiMinusThick from './components/assets/MdiMinusThick'
import MaterialSymbolsAddRounded from './components/assets/MaterialSymbolsAddRounded'
import MaterialSymbolsDeleteRounded from './components/assets/MaterialSymbolsDeleteRounded'
import { Link } from 'react-router-dom'

function Cart2() {
    const {cart,total,allTotal,deleteItem,shippingFee,addItem,completeDelete} = useContext(Ecomcontext)

    const cartView = cart.map((item,i)=>{
      if(item.quantity>0){
        return   <div key={i} className='flex py-2 shadow-md items-center'>
             <div className='flex items-center w-[25%] gap-1'>
                <img className='h-[40px] w-[50px]' src={item.images[0]} alt="" />
                <h1>{item.title}</h1>
             </div>
             <h1 className='ml-24 w-[25%]'>${Math.round(item.price-item.price*(item.discountPercentage/100))}</h1>
             <div className='h-[50%] flex gap-2 items-center ml-16 w-[25%]'>
               <h1>{item.quantity}</h1>
               <div className='flex flex-col-reverse gap-1'>
               <MdiMinusThick onClick={()=>{deleteItem(item)}}  className="p-2 bg-slate-200 rounded-lg hover:scale-105 active:scale-95 transition-all cursor-pointer hover:bg-slate-400"/>
                      <MaterialSymbolsAddRounded onClick={()=>{addItem(item)}} className="p-2 bg-slate-200 rounded-lg hover:scale-105 active:scale-95 cursor-pointer transition-all hover:bg-slate-400"/>
               </div>
             </div>
             <h1 className='ml-24 '>${total(item)}</h1>
             <div className=''><MaterialSymbolsDeleteRounded className="hover:scale-105 active:scale-95 transition-all cursor-pointer" onClick={()=>{completeDelete(item)}}/></div>
        </div>
    }})
  return (
    <section >
       <Nav2/>
       <div className='flex px-2 select-none sm:px-12 lg:px-[135px] mb-32 flex-col mt-20 gap-20'>
          <h1 className='text-gray-400'>Home / <span className='text-[#212121] font-semibold ml-1'>Cart</span></h1>
          <div className='flex flex-col gap-20'>
            <div className='flex flex-col gap-10'>
                <div className='flex items-center justify-between text-xl font-semibold'>
                    <h1>Product</h1>
                    <h1>Price</h1>
                    <h1>Quantity</h1>
                    <h1>Subtotal</h1>
                </div>
                <div className={`flex  ${cart.length===0?"flex-row items-center justify-center":"flex-col"} gap-10`}>
                    <hr className='w-[80%] mx-auto'/>
                     {cart.length===0?<h1 className='text-2xl'>Your Item Will Be Shown Here!</h1>:cartView}
                     <hr className='w-[80%] mx-auto'/>
                </div>
                <div className='flex items-center justify-center'>
                    <Link to='/project/OWN/E-commerce'><button className='py-4 px-12 bg-[#f0f0f0] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#0f0f0f]'>Return To Shop</button></Link>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col items-center lg:justify-between gap-32 lg:gap-0 lg:items-start '>
                <div className='flex items-center gap-4'>
                    <input className='py-4 px-4 border border-[#f0f0f0] w-[50%] bg-[#fafafa]' placeholder='Coupon Code' type="text" />
                    <button className='py-4 px-12 bg-[#db4444] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#fafafa]'>Apply Coupon</button>
                </div>
                <div className='flex flex-col border border-[#212121] px-8 gap-3 py-5 w-[80%] lg:w-[40%]'>
                    <h1 className='text-3xl'>Cart Total</h1>
                    <div className='flex px-2 text-xl justify-between items-center'>
                       <h1>Subtotal</h1>
                       <h1>${allTotal()}</h1>
                    </div>
                    <hr className='w-full'/>
                    <div className='flex px-2 text-xl justify-between items-center'>
                       <h1>Shipping</h1>
                       <h1>${shippingFee()}</h1>
                    </div>
                    <hr className='w-full'/>
                    <div className='flex px-2 text-xl justify-between items-center'>
                       <h1>Total</h1>
                       <h1>${allTotal()?allTotal()+shippingFee():"0"}</h1>
                    </div>
                    
                    <Link className='w-[80%] mx-auto' to="/project/OWN/E-commerce/cart/checkout"><button className='py-4 px-12 bg-[#db4444] shadow-md hover:bg-opacity-95 mt-10 hover:shadow-lg w-full active:scale-95 transition-all text-[#fafafa]'>Procees to checkout</button></Link>
                </div>
            </div>
          </div>
       </div>
       <Footer/>
    </section>
  )
}

export default Cart2