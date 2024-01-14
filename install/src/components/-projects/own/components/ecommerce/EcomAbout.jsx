import React from 'react'
import aboutImg from './components/assets/10536532.jpg'
import Nav2 from '../own-navbar/nav2'
import Footer from './components/footer/Footer'
import Frame891 from './components/assets/Frame891'
function EcomAbout() {
  return (
    <section>
      <Nav2/>
      <div className='mt-10 mb-32 px-2 lg:px-[135px] flex gap-72 sm:gap-[450px] lg:gap-12 flex-col '>
        <h1 className='text-gray-500'>Home / <span className='text-[#212121] font-semibold'>About</span></h1>
        <div className=' flex justify-between gap-12 items-center flex-col lg:flex-row h-[500px]'>
            <div className='flex self-center flex-col lg:w-[40%] w-[80%]  lg:gap-2 '>
              <h1 className='text-5xl mb-4'>Our Story</h1>
              <p className='text-lg'>"Welcome to GeorgeFi! We go beyond being a marketplace; we're a hub where passion and purpose converge. Our mission at GeorgeFi is to offer a seamless online shopping experience. Discover the latest fashion, cutting-edge tech, and everyday essentials with us. Our curated selection, commitment to quality, and customer satisfaction set us apart. Explore convenience and style on our user-friendly platform."</p>
              <p className='text-lg'>"Join us on this digital journey, where shopping transforms into an experience. Every click brings you closer to what you love. Thank you for choosing GeorgeFi, where your satisfaction is our top priority."</p>
            </div>
            <img className='lg:w-[55%] shadow-lg mt-24 ' src={aboutImg} alt="" />
        </div>
        <div className='flex justify-center items-center  mt-32'>
          <Frame891/>
        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default EcomAbout