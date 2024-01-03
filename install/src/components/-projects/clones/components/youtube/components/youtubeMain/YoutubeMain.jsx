import React, { useContext } from 'react'
import { Ecomcontext } from '../../../../../own/components/context/ecomContext'

function YoutubeMain() {
    const {aside,setAside} = useContext(Ecomcontext)
  return (
    <div onClick={()=>{window.innerWidth<640?setAside(false):null}} className={` text-7xl  text-[#f0f0f0]  bg-[#0f0f0f] p-4`}>YoutubeMain
     <div className={`fixed z-50 top-0 bottom-0 ${aside && window.innerWidth<640?"opacity-75":"opacity-0 invisible"} duration-500 right-0 left-0 bg-black `}></div>
    </div>
  )
} 

export default YoutubeMain