import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import {Routes,Route, BrowserRouter} from 'react-router-dom'

import OWN from './components/-projects/own/own'
import Clones from './components/-projects/clones/clones'
import APIs from "./components/-projects/api's/apis"
import Bored from './components/-projects/bored/bored'
import Custom from './components/-projects/custom-web/custom'
import Frontend from './components/-skills/frontend'
import Backend from './components/-skills/backend'
import UIUX from './components/-skills/uiux'
import Firebase from './components/-skills/firebase'
import Github from './components/-skills/github'
import Contact from './pages/contact'
import About from './pages/about'
import Home from './pages/home'

function App() {

  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route> 
      <Route path='/about' element={<About/>}></Route>
      <Route path='/project'>
        <Route path='/project/OWN' element={<OWN/>}></Route>
        <Route path='/project/clones' element={<Clones/>}></Route>
        <Route path="/project/API's" element={<APIs/>}></Route>
        <Route path='/project/when-bored' element={<Bored/>}></Route>
        <Route path='/project/custom' element={<Custom/>}></Route>
      </Route>
      <Route path='/skills'>
        <Route path='/skills/frontend' element={<Frontend/>}></Route>
        <Route path='/skills/backend' element={<Backend/>}></Route>
        <Route path='/skills/UIUX' element={<UIUX/>}></Route>
        <Route path='/skills/github' element={<Github/>}></Route>
        <Route path='/skills/firebase' element={<Firebase/>}></Route>
      </Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
   
    </BrowserRouter>
    </div>
  )
}

export default App
