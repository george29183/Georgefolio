import React, { useContext } from 'react'
import Nav2 from '../../own-navbar/nav2'
import Footer from './footer/Footer'
import SubHeroProduct from './subHero/SubHeroProduct'
import { Ecomcontext } from '../../context/ecomContext'
import { Link } from 'react-router-dom'

function Search() {
    const {searchItem} = useContext(Ecomcontext)
  return (
  <section>
    <Nav2/>
    <div className='max-w-[1600px] xl:mx-auto'>
    <Link to="/project/OWN/E-commerce"><button className='py-4 mx-2 sm:mx-12 lg:mx-[135px] mt-32 px-12 bg-[#db4444] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#f5f5f5] '>Return home</button></Link>
    <div className='px-12 flex-col items-center flex gap-20  mb-32 mt-32 lg:px-[135px]'>
    <h1 className='text-4xl text-gray-500'>Results for <span className='font-semibold text-[#212121]'>{searchItem}</span></h1>
       <SubHeroProduct
        category={searchItem}
        large={true}
       />
    </div>
    </div>
    <Footer/>
  </section>
  )
}

export default Search