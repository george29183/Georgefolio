import React, { useContext } from 'react'
import Nav2 from '../own-navbar/nav2'
import Footer from './components/footer/Footer'
import { Ecomcontext } from '../context/ecomContext'

function Account() {
    const {loginData} = useContext(Ecomcontext)
    console.log(loginData);
  return (
    <section>
        <Nav2/>
        <div className='mt-10 mb-32 max-w-[1600px] xl:mx-auto px-2 lg:px-[135px] gap-10 flex flex-col sm:px-12'>
          <h1 className='text-gray-400 text-lg'>Home / <span className='text-[#212121] font-semibold'>Account</span></h1>
          <div className='flex gap-20'>
            <div>
                <img className='rounded-[50%]' src={loginData[0].user.photoURL} alt="" />
            </div>
            <div className='flex flex-col gap-5'>
                <div>
                    <h1>Name</h1>
                    <h1>{loginData[0].user.displayName}</h1>
                </div>
                <div>
                    <h1>email</h1>
                    <h1>{loginData[0].user.email}</h1>
                </div>
                <div></div>
            </div>
          </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Account