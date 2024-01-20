import React, { useState } from 'react'
import Nav2 from '../../../own-navbar/nav2'
import Footer from '../footer/Footer'
import account from './dl-beatsnoop-1.png'
import IconGoogle from './IconGoogle'
import { Link } from 'react-router-dom'
import {db} from '../../../../../../../../firebaseConfig.js'
import { addDoc, collection } from "firebase/firestore"; 
import {
 GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { Ecomcontext } from '../../../context/ecomContext.jsx'






function SignUp() {
 const [credentials,setCredentials] = useState({
  email:'',
  password:''
 })
 const {sign,setSign,setLoginData} = useContext(Ecomcontext)
 const [loading,setLoading] = useState(false)
 const [signUp,setSignUp] = useState(false)
 const [logIn,setLogIn] = useState(false)
 const [creds,setCreds] = useState(true)
 const navigate = useNavigate();
 let auth = getAuth()
 let googleProvider = new GoogleAuthProvider

 const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true)  
  createUserWithEmailAndPassword(auth,credentials.email,credentials.password)
  .then((res)=>{
    setLoginData([res])
  const me =  setInterval(() => {
      setLoading(false)
      setSign(true)
      navigate('/project/OWN/E-commerce');
    },6000);
    clearInterval(me)
  })
  .catch((err)=>{
    setInterval(() => {
      setLoading(false)
    setCreds(false)
    },6000);
  })
}
const handleLogIn = (e)=>{
  setLoading(true)
   e.preventDefault()
   signInWithEmailAndPassword(auth,credentials.email,credentials.password)
   .then((res)=>{
    setLoginData([res])
 const me =   setInterval(() => {
      setLoading(false)
      setSign(true)
      navigate('/project/OWN/E-commerce');
    },6000);
    clearInterval(me)
  })
  .catch((err)=>{
    setInterval(() => {
      setLoading(false)
    setCreds(false)
    },6000);
  })
}
const googleSignUp = ()=>{
  
   signInWithPopup(auth,googleProvider)
   .then((res)=>{
    setLoginData([res])
    setSign(true)
    navigate('/project/OWN/E-commerce')
  })
  .catch((err)=>{console.log("not 200",err);})
}

  return (
    <section className='relative'>
      <Nav2/>
      <div className='flex max-w-[1600px] xl:mx-auto gap-20 mt-16 mb-32'>
         <img className='hidden h-auto w-[50%] xl:block' src={account} alt="a cart image"/>
         {
          !signUp?(
            <div className='flex self-center lg:items-start justify-center items-center xl:w-auto sm:w-auto w-[80%] mx-auto  flex-col gap-2'>
          <h1 className='text-5xl mb-2'>Create an account</h1>
          <h2 className='text-xl'>Enter your details below</h2>
          {!creds?<h3 className='text-red-700 animate-pulse text-xl mt-5'>invalid email or password</h3>:null}
          <input onChange={(e)=>setCredentials({...credentials,email:e.target.value})} className={`border-b border-gray-600 focus:outline-none mb-5  text-xl mt-1 w-[100%] pb-[2px] pt-4`} type="email" placeholder='Email or Phone Number' />
          <input onChange={(e)=>setCredentials({...credentials,password:e.target.value})} className='border-b border-gray-600 focus:outline-none text-xl w-[100%] pb-[2px] pt-4' type="password" placeholder='Password' />
          <div className='flex w-full justify-between mt-8 items-center'>
            <button onClick={(e)=>{handleSubmit(e)}} className={`py-4 px-12 bg-[#db4444] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#f5f5f5] w-full mt-10 mx-auto `}>Create Account</button>
          </div>
          <button onClick={()=>googleSignUp()} className={`py-4 px-12  shadow-md hover:bg-opacity-95 hover:shadow-lg flex active:scale-95  justify-center items-center transition-all gap-3 text-[#212121] mx-auto w-full mt-2`}>
            <IconGoogle/>
            Sign up with Google</button>
          <div className={`flex self-center  gap-8 mt-8`}>
            <p className=' cursor-pointer'>Already have account?</p>
            <button onClick={()=>setSignUp(true)} className=' underline-offset-8 hover:underline-offset-2 hover:scale-105 transition-all underline'>Log in</button>
          </div>
         </div>
          ):(
            <div className='flex self-center lg:items-start justify-center items-center xl:w-auto sm:w-auto w-[80%] mx-auto  flex-col gap-2'>
          <h1 className='text-5xl mb-2'>Log in to GeorgeFi</h1>
          <h2 className='text-xl'>Enter your details below</h2>
          {!creds?<h3 className='text-red-700 animate-pulse text-xl mt-5'>invalid email or password</h3>:null}
          <input onChange={(e)=>setCredentials({...credentials,email:e.target.value})} className={`border-b border-gray-600 focus:outline-none mb-5  text-xl  w-[100%] pb-[2px] pt-4`} type="email" placeholder='Email or Phone Number' />
          <input onChange={(e)=>setCredentials({...credentials,password:e.target.value})} className='border-b border-gray-600 focus:outline-none text-xl w-[100%] pb-[2px] pt-4' type="password" placeholder='Password' />
          <div className='flex w-full justify-between mt-8 items-center'>
            <button onClick={(e)=>{handleLogIn(e)}} className={`py-4 px-12 bg-[#db4444] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#f5f5f5] w-[50%]`}>Log In</button>
            <h2 className={`text-[#db4444]`}>Forget Password?</h2>
          </div>
          <button onClick={()=>googleSignUp()} className={`py-4 px-12  shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95  justify-center flex items-center transition-all gap-3 text-[#212121] mx-auto w-full mt-2`}>
            <IconGoogle/>
            Sign in with Google</button>
         </div>
          )
         }
        
      </div>
      <Footer/>
      {loading?(<div className='absolute bg-slate-100 top-0 flex justify-center items-center w-full h-full'>
          <div className='loader'></div>
      </div>):null}
    </section>
  )
}

export default SignUp