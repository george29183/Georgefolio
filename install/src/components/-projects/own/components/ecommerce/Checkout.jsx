import React, { useContext, useState } from 'react'
import Nav2 from '../own-navbar/nav2'
import Footer from './components/footer/Footer'
import IconCheckbox from './components/assets/IconCheckbox'
import { Ecomcontext } from '../context/ecomContext'
import Visa from './components/assets/LogosVisa'
import Mastercard from './components/assets/LogosMastercard'
function Checkout() {
    const [check,setCheck] = useState(false)
		const {cart,total,allTotal,shippingFee} = useContext(Ecomcontext)
		const [pay,setPay] = useState({
			bank:false,
			cash:false
		})

		const lastView = cart.map((item,i)=>{
			return <div key={i} className='flex justify-between items-center'>
         <div className='flex items-center gap-2'>
					<img className='w-[50px] h-[39px]' src={item.images[0]} alt="" />
					<h1>{item.title}(x{item.quantity})</h1>
				 </div>
				 <h1>${total(item)}</h1>
			</div>
		})
  return (
    <section>
        <Nav2/>
        <div className='max-w-[1600px] xl:mx-auto select-none flex px-12 lg:px-[135px] mb-32 mt-10 gap-10 flex-col'>
            <h1 className='text-gray-500'>Home / Cart / <span className='text-[#212121] font-semibold ml-1'>Checkout</span></h1>
            <div className='flex justify-between lg:flex-row flex-col  items-center'>
                <div className='lg:w-[50%] flex  items-start flex-col gap-8'>
                    <h1 className='text-3xl mt-4'>Billing Details</h1>
                    <div className='flex flex-col w-full gap-2'>
                        <label className='text-gray-600' htmlFor="First Name">First Name<span className='text-[#db4444]'>*</span></label>
                        <input className='w-full bg-[#f5f5f5] px-4 py-2' type="text" name='First Name' />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <label className='text-gray-600' htmlFor="Company Name">Company Name</label>
                        <input className='w-full bg-[#f5f5f5] px-4 py-2' type="text" name='Company Name' />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <label className='text-gray-600' htmlFor="Street Address">Street Address<span className='text-[#db4444]'>*</span></label>
                        <input className='w-full bg-[#f5f5f5] px-4 py-2' type="text" name='Street Address' />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <label className='text-gray-600' htmlFor="Apartment, floor, etc. (optional)">Apartment, floor, etc. (optional)</label>
                        <input className='w-full bg-[#f5f5f5] px-4 py-2' type="text" name='Apartment, floor, etc. (optional)' />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <label className='text-gray-600' htmlFor="Town/City">Town/City<span className='text-[#db4444]'>*</span></label>
                        <input className='w-full bg-[#f5f5f5] px-4 py-2' type="text" name='Town/City' />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <label className='text-gray-600' htmlFor="Phone Number">Phone Number<span className='text-[#db4444]'>*</span></label>
                        <input className='w-full bg-[#f5f5f5] px-4 py-2' type="text" name='Phone Number' />
                    </div>
                    <div className='flex flex-col w-full gap-2'>
                        <label className='text-gray-600' htmlFor="Email Address*">Email Address<span className='text-[#db4444]'>*</span></label>
                        <input className='w-full bg-[#f5f5f5] px-4 py-2' type="text" name='Email Address*' />
                    </div>
                    <div className='flex items-center gap-2'>
                         <div onClick={()=>{setCheck(!check)}}>
                            {check?<IconCheckbox className="w-5 h-5 cursor-pointer"/>:
                            <div className='w-5 h-5 shadow-md rounded-md cursor-pointer border border-[#212121]'/>}
                         </div>
                        <label htmlFor="Save this information for faster check-out next time">Save this information for faster check-out next time</label>
                    </div>
                </div>
                <div className=' pt-20 w-[100%] lg:w-[35%] sm:w-[60%] flex flex-col gap-8'>
                  <div className='flex flex-col gap-3'>
                     {lastView}
									</div>
									<div className='flex flex-col gap-2'>
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
									</div>
									<div className='flex justify-between items-center'>
										<div className='flex items-center gap-2'>
											<input onClick={()=>{
												setPay({bank:true,cash:false})
											}} className={` appearance-none border  border-[#212121]  ${pay.bank?"bg-[#212121]":null} w-3  cursor-pointer h-3 rounded-full ring ring-[#212121]`} value="bank" name='bank' type="checkbox" /><label htmlFor="bank">bank</label>
										</div>
                    <div className='flex items-center gap-8'>
                      <Visa/>
											<Mastercard/>
										</div>
									</div>
									<div className='flex items-center gap-2'>
									<input  onClick={()=>{
												setPay({bank:false,cash:true})
											}} className={` appearance-none border  border-[#212121] ${pay.cash?"bg-[#212121]":null} w-3 cursor-pointer h-3 rounded-full ring ring-[#212121]`} name='Cash on delivery' type="checkbox" /><label htmlFor="Cash on delivery">Cash on delivery</label>
									</div>
									<div className='flex justify-between'> 
									<input className='py-4 px-4 border border-[#f0f0f0] w-[50%] bg-[#fafafa]' placeholder='Coupon Code' type="text" />
                    <button className='py-4 sm:px-10 px-2  shadow-md border-2 border-[#212121] hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#0f0f0f]'>Apply Coupon</button>
									</div>
									<button className='py-4 px-12 bg-[#db4444] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#fafafa]'>Place Order</button>
                </div>
            </div>
         </div>
        <Footer/>
    </section>
  )
}

export default Checkout