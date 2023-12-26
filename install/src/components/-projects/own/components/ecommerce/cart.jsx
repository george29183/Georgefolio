import React, { useState } from 'react'
import OwnNavbar from '../own-navbar/own-navbar'
import Nav from '../own-navbar/nav'
import { useContext } from 'react'
import { Ecomcontext } from '../context/ecomContext'
import MaterialSymbolsDeleteRounded from './components/assets/MaterialSymbolsDeleteRounded'
import MdiMinusThick from './components/assets/MdiMinusThick'
import MaterialSymbolsAddRounded from './components/assets/MaterialSymbolsAddRounded'

export default function Cart(){
    const {cart,total,allTotal,deleteItem,shippingFee,addItem,completeDelete} = useContext(Ecomcontext)
  return (
    <>
    <OwnNavbar path="E-commerce" sec="cart"/>
    <Nav yes={true}/>
    <div className='flex flex-col mt-10 w-full gap-4 lg:flex-row'>
      <div className='flex basis-1/2 ml-4 gap-3 flex-col'>
        <h1 className='text-center text-2xl'>your items will be shown here</h1>
        <hr className='w-[30%] mx-auto'/>
      {
        cart.map((item,i)=>{
            if(item.quantity>0){
                return ( <div key={item.id+i+item.name}>
                <div className="w-full h-[max-content]  mr-36 gap-24 flex justify-between">
                  <div className='relative basis-2/3 flex w-[240px] gap-2 h-[max-content]'>
                    <img src={item.image} className='rounded-xl h-[200px]  w-[200px]'/>
                    <div className='absolute bottom-0 left-0 p-1 gap-2 flex'>
                      <MdiMinusThick onClick={()=>{deleteItem(item)}}  className="p-2 bg-slate-200 rounded-lg hover:scale-105 active:scale-95 transition-all hover:bg-slate-400"/>
                      <MaterialSymbolsAddRounded onClick={()=>{addItem(item)}} className="p-2 bg-slate-200 rounded-lg hover:scale-105 active:scale-95 transition-all hover:bg-slate-400"/>
                    </div>
                    <div className='flex flex-col'>
                    <p className='text-lg   p-1 text-bold'>{item.name}</p>
                    <p className='text-xl p-1 line-through text-red-600'>${item.old_price}</p>
                     <p className='text-xl p-1'>${item.new_price}</p>
                  </div>
                  </div>
                  
                  <div className='flex items-center basis-1/3 ml-2 flex-col'>
                    <p className='text-xl p-1'>Quantity</p>
                    <p className=' text-2xl text-emerald-800'>{item.quantity}</p>
                    <p className='text-xl p-1'>Total</p>
                    <p className='text-2xl'>${total(item)}</p>
                    <div className='m-2'><MaterialSymbolsDeleteRounded className="hover:scale-105 active:scale-95 transition-all cursor-pointer" onClick={()=>{completeDelete(item)}}/></div>
                  </div>
                </div>
                 <hr/>
               </div>)
            }else{null}

        })
      }
      <hr className='w-[30%] mt-28 mx-auto'/>
      </div>
      <div className=' lg:mx-36 basis-1/2 mx-auto w-[60%]'>
        <div className='mb-10 flex flex-col'>
          <h1 className='text-center uppercase text-bold mb-10 text-2xl'>Cart Totals</h1>
          <div>
            <div className='flex flex-col gap-3'>
              <p className='text-bold  text-xl'>Subtotal</p>
              <p className='pl-4 text-xl mb-2'>${allTotal()}</p>
            </div>
            <hr/>
            <div className='flex flex-col gap-3'>
             <p className='text-bold text-xl'>Shipping Fee</p>
             <p className='pl-4 text-xl mb-2'>${shippingFee()}</p>
            </div>
            <hr/>
            <div className='flex flex-col gap-3'>
             <h3 className='text-bold text-2xl'>Total</h3>
             <h3 className='text-bold pl-2 text-xl'>${allTotal()?allTotal()+shippingFee():"0"}</h3>
            </div>
          </div>
          <button className='mx-auto
     relative py-4 px-8 mt-12 text-black text-base font-bold
           rounded-lg overflow-hidden bg-orange-700 transition-all
            duration-700 mb-12 ease-in-out shadow-md xl:text-2xl lg:text-xl hover:scale-105 hover:text-white
             hover:shadow-xl active:scale-90 before:absolute before:top-0 
             before:-left-full before:w-full before:h-full before:bg-gradient-to-r
              before:from-red-800 before:to-orange-900 before:transition-all
               before:duration-500 before:ease-in-out before:z-[-1] before:rounded-lg 
               hover:before:left-0'>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
    </>
  )
}

