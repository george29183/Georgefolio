import React, { useContext } from 'react'
import Navbar from './components/navbar/navbar'
import {Routes,Route, BrowserRouter} from 'react-router-dom'

import OWN from './components/-projects/own/own'
import Clones from './components/-projects/clones/clones'
import APIs from "./components/-projects/api's/apis"
import Bored from './components/-projects/bored/bored'
import Custom from './components/-projects/custom-web/custom'

import Contact from './pages/contact'
import About from './pages/about'
import Home from './pages/home'
import Ecommerce from './components/-projects/own/components/ecommerce/ecommerce'
import Blog from './components/-projects/own/components/blog/blog'
import  { Ecomcontext } from './components/-projects/own/components/context/ecomContext'

import Product from './components/-projects/own/components/ecommerce/product'
import Cart from './components/-projects/own/components/ecommerce/cart'
import Producty from './components/-projects/own/components/ecommerce/producty'
import OwnContact from './components/-projects/own/components/ecommerce/contact'
import LandingPage from './components/-projects/own/components/Landing-Page/LandingPage'
import Youtube from './components/-projects/clones/components/youtube/Youtube'
import  EcomAbout from './components/-projects/own/components/ecommerce/EcomAbout'
import NewsApi from './components/-projects/api\'s/components/newsApi/NewsApi'
import Wishlist from './components/-projects/own/components/ecommerce/Wishlist'
import SignUp from './components/-projects/own/components/ecommerce/components/signUp&In/SignUp'
import Cart2 from './components/-projects/own/components/ecommerce/Cart2'
import Checkout from './components/-projects/own/components/ecommerce/Checkout'
import Product2 from './components/-projects/own/components/ecommerce/Product2'
import Search from './components/-projects/own/components/ecommerce/components/Search'
import Account from './components/-projects/own/components/ecommerce/Account'

function App() {
   const {sign} = useContext(Ecomcontext)
  return (
    <div >
      
    <BrowserRouter>
    <Navbar/>
    <div className='max-w-[1600px] xl:mx-auto'>
    <Routes>
      <Route path='/' element={<Home/>}></Route> 
      <Route path='/about' element={<About/>}></Route>
      <Route path='/project'>
        <Route path='/project/OWN' element={<OWN/>}></Route>
        <Route path='/project/OWN/E-commerce' element={<Ecommerce/>}></Route>
        <Route path='/project/OWN/E-commerce/products' element={<Product2/>}>
        </Route>
        <Route path='/project/OWN/E-commerce/product' element={<Producty/>}>
          <Route path=':productId' element={<Producty/>}/>
        </Route>
        <Route path='/project/OWN/E-commerce/contact' element={<OwnContact/>}>
        </Route>
        <Route path='/project/OWN/E-commerce/cart' element={<Cart2/>}></Route>
        <Route path='/project/OWN/E-commerce/cart/checkout' element={<Checkout/>}></Route>
        <Route path='/project/OWN/E-commerce/about' element={< EcomAbout/>}></Route>
        <Route path='/project/OWN/E-commerce/account' element={sign?<Account/>:<SignUp/>}></Route>
        <Route path='/project/OWN/E-commerce/wishlist' element={<Wishlist/>}></Route>
        <Route path='/project/OWN/E-commerce/search' element={<Search/>}></Route>

          <Route path='/project/OWN/Blog' element={<Blog/>}></Route>
          <Route path='/project/OWN/Landing-Page' element={<LandingPage/>}></Route>
        <Route path='/project/clones' element={<Clones/>}></Route>
        <Route path='/project/clones/Youtube' element={<Youtube/>}></Route>
        <Route path="/project/API's" element={<APIs/>}></Route>
        <Route path="/project/API's/News" element={<NewsApi/>}></Route>
        <Route path='/project/when-bored' element={<Bored/>}></Route>
        <Route path='/project/custom' element={<Custom/>}></Route>
      </Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App
