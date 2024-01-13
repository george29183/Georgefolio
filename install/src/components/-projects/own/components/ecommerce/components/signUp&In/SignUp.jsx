import React from 'react'
import Nav2 from '../../../own-navbar/nav2'
import Footer from '../footer/Footer'
import account from './dl-beatsnoop-1.png'
import IconGoogle from './IconGoogle'
function SignUp(props) {
  return (
    <section>
      <Nav2/>
      <div className='flex gap-20 mt-16 mb-32'>
         <img className='hidden h-auto w-[50%] xl:block' src={account} alt="a cart image"/>
         <div className='flex self-center lg:items-start justify-center items-center xl:w-auto sm:w-auto w-[80%] mx-auto  flex-col gap-2'>
          <h1 className='text-5xl mb-2'>{props.signUp?"Create an account":"Log in to GeorgeFi"}</h1>
          <h2 className='text-xl'>Enter your details below</h2>
          <input className={`border-b border-gray-600 mt-8 focus:outline-none mb-5  text-xl ${props.signUp?"block":"hidden"} w-[100%] pb-[2px] pt-4`} type="text" placeholder='Name'/> 
          <input className={`border-b border-gray-600 focus:outline-none mb-5  text-xl ${props.signUp?null:"mt-8"} w-[100%] pb-[2px] pt-4`} type="text" placeholder='Email or Phone Number' />
          <input className='border-b border-gray-600 focus:outline-none text-xl w-[100%] pb-[2px] pt-4' type="text" placeholder='Password' />
          <div className='flex w-full justify-between mt-8 items-center'>
            <button className={`py-4 px-12 bg-[#db4444] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#f5f5f5] ${props.signUp?"w-full mt-10 mx-auto":"w-[50%]"}   `}>{props.signUp?"Create Account":"Log In "}</button>
            <h2 className={`${props.signUp?"hidden":"block"} text-[#db4444]`}>Forget Password?</h2>
          </div>
          <button className={`py-4 px-12  shadow-md hover:bg-opacity-95 hover:shadow-lg ${props.signUp?"flex":"hidden"} active:scale-95  justify-center items-center transition-all gap-3 text-[#212121] mx-auto w-full mt-2`}>
            <IconGoogle/>
            Sign up with Google</button>
          <div className={`${props.signUp?"flex":"hidden"} self-center  gap-8 mt-8`}>
            <p className=' cursor-pointer'>Already have account?</p>
            <button className=' underline-offset-8 hover:underline-offset-2 hover:scale-105 transition-all underline'>Log in</button>
          </div>
         </div>
      </div>
      <Footer/>
    </section>
  )
}

export default SignUp