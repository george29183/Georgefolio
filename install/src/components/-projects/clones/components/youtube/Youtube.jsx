import React, { useContext, useState,useEffect } from 'react'
import YoutubeNav from './components/youtubeNav/YoutubeNav'
import ClonesNav from '../clonesNav/ClonesNav'
import { Ecomcontext } from '../../../own/components/context/ecomContext'
import YoutubeBigAside from './components/youtubeAside/YoutubeBigAside'
import YoutubeSmallAside from './components/youtubeAside/YoutubeSmallAside'
import YoutubeMain from './components/youtubeMain/YoutubeMain'
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useLayoutEffect } from 'react'
import YoutubeSmallScreenAside from './smallScreenAside/YoutubeSmallScreenAside'
import Category from './components/subnav/Category'
import PhoneNav from './components/phoneNav/PhoneNav'

function Youtube() {
  useLockBodyScroll()
  const {aside} = useContext(Ecomcontext)
  const [size, setSize] = useState([0, 0]);
 
  useLayoutEffect(() => {
   
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  useEffect(() => {
    document.title = 'GeorgeTube';
  }, []);
  
  return (
    <section className={`bg-[#0f0f0f] h-screen`}>
        <YoutubeNav size={size[0]}/>
        <div className='max-w-[1600px] xl:mx-auto'>
        <Category size={size[0]}/>
        <div className='flex relative '>
         <div className=''>
        {size[0]>1300?aside?<YoutubeBigAside/>:<YoutubeSmallAside/>:size[0]>792?aside?<YoutubeSmallScreenAside />:<YoutubeSmallAside/>:aside?<YoutubeSmallScreenAside />:null}
        </div>
          <YoutubeMain/>
        </div>
        {size[0]<699?<PhoneNav/>:null}
        </div>
    </section>
  )
}

export default Youtube