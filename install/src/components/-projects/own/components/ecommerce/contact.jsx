import React from 'react'
import IconsMail from './components/assets/IconsMail'
import IconsPhone from './components/assets/IconsPhone'
import Nav2 from '../own-navbar/nav2'
import Footer from './components/footer/Footer'

export default function OwnContact(){
  return (
    <section>
      <Nav2/>
      <div className='px-2 lg:px-[135px] flex flex-col gap-20 mt-10 mb-32'>
       <h1 className='text-gray-400'>Home / <span className='text-[#212121] font-semibold ml-1'>Contact</span></h1>
       <div className='flex flex-col-reverse lg:flex-row items-center gap-8'>
        <div className='bg-[#fafafa] w-[80%] lg:w-[25%] shadow-md h-[max-content] flex flex-col gap-5 px-2 py-5'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-4 mb-2 items-center'>
                <IconsPhone/>
                <h1 className='text-2xl '>Call Us</h1>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +77338800223311</p>
            </div>
            <hr />
            <div  className='flex flex-col gap-4'>
            <div className='flex gap-4 items-center'>
                <IconsMail/>
                <h1 className='text-2xl'>Mail To Us</h1>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
        </div>
        <div className='flex flex-col gap-8 w-[75%]'>
          <div className='flex flex-col lg:flex-row justify-between gap-6 lg:gap-0 items-center w-full'>
            <input placeholder='Your Name' className=' w-[100%] lg:w-[30%] py-3 px-4 bg-[#f5f5f5] shadow-sm rounded-md' type="text" required/>
            <input placeholder='Your Email' className=' w-[100%] lg:w-[30%] py-3 px-4 bg-[#f5f5f5] shadow-sm rounded-md' type="text" />
            <input placeholder='Your Phone' className=' w-[100%] lg:w-[30%] py-3 px-4 bg-[#f5f5f5] shadow-sm rounded-md' type="text" />
          </div>
          <textarea className='px-4 py-2 shadow-sm bg-[#f5f5f5]' name="comment" cols="30" rows="10" placeholder='Your Comment'></textarea>
          <button className='py-4 px-12 bg-[#db4444] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all self-end text-[#f5f5f5]  '>
          Send Massage
          </button>
        </div>
       </div>
      </div>
      <Footer/>
    </section>
    )
}

