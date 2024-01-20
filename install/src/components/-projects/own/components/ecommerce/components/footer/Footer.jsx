import React from 'react'
import IconSend from './IconSend'
import QrCode from './QrCode'
import IconFacebook from './IconFacebook'
import AppStore from './AppStore'
import Group from './Group'
import GooglePlay from './GooglePlay'
import IconTwitter from './IconTwitter'
import IconLinkedin from './IconLinkedin'
function Footer(props) {
  return (
    <div className={`${props.className} hidden lg:flex bg-black w-full justify-between px-4 max-w-[1600px] xl:mx-auto xl:px-28 lg:px-6 py-16`}>
      <Div1 className="flex flex-col justify-between gap-3 items-start text-[#fafafa]"/>
      <Div2 className="flex flex-col justify-between gap-3 items-start text-[#fafafa]"/>
      <Div3 className="flex flex-col justify-between gap-3 items-start text-[#fafafa]"/>
      <Div4 className="flex flex-col justify-between gap-3 items-start text-[#fafafa]"/>
      <Div5 className="flex flex-col justify-between gap-3 items-start text-[#fafafa]"/>
    </div>
  )
}

const Div1 = (props)=>{
    return (
        <div className={`${props.className}`}>
            <h1 className='text-5xl'>GeorgeFi</h1>
            <button className='text-lg'>Subscribe</button>
            <h2 className='text-gray-500'>
            Get 10% off your first order
            </h2>
            <div className='relative'>
               <input className='py-2 pl-4 pr-9  bg-[#212121] border border-[#fafafa]' type="email" placeholder='Enter Your Email'  /> 
               <IconSend className="absolute cursor-pointer active:scale-95 transition right-2 top-2"/>
            </div>
            
        </div>
    )
}


const Div2 = (props)=>{
    return (
        <div className={`${props.className}`}>
           <h1 className='text-2xl'>Support</h1>
           <p>Nice design</p>
           <p>mohammedrabee183@gmail.com</p>
           <p>+249 90 761 4903</p>
        </div>
    )
}

const Div3 = (props)=>{
    return (
        <div className={`${props.className}`}>
             <h1 className='text-3xl'>Account</h1>
             <p>My Account</p>
             <p>Login / Register</p>
             <p>Cart</p>
             <p>Wishlist</p>
             <p>Shop</p>
        </div>
    )
}

const Div4 = (props)=>{
    return (
        <div className={`${props.className}`}>
          <h1 className='text-3xl'>Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
    )
}

const Div5 = (props)=>{
    return (
        <div className={`${props.className}`}>
         <h1>Download App</h1>
         <p>Save $3 with App New User Only</p>
         <div className='flex gap-2'>
            <div>
                <QrCode/>
            </div>
            <div className='flex gap-1 flex-col'>
              <AppStore/>
              <GooglePlay/>
            </div>
         </div>
         <div className='flex justify-between w-[70%] items-center'>
            <IconFacebook/>
            <IconTwitter/>
            <Group/>
            <IconLinkedin/>
         </div>
        </div>
    )
}

export default Footer
