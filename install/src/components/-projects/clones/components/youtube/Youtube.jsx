import React, { useContext, useState } from 'react'
import YoutubeNav from './components/youtubeNav/YoutubeNav'
import ClonesNav from '../clonesNav/ClonesNav'
import { Ecomcontext } from '../../../own/components/context/ecomContext'
import YoutubeBigAside from './components/youtubeAside/YoutubeBigAside'
import YoutubeSmallAside from './components/youtubeAside/YoutubeSmallAside'
import YoutubeMain from './components/youtubeMain/YoutubeMain'
import { useLayoutEffect } from 'react'
import YoutubeSmallScreenAside from './smallScreenAside/YoutubeSmallScreenAside'

function Youtube() {
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
 
  return (
    <section className='bg-[#0f0f0f] relative'>
        <ClonesNav/>
        <YoutubeNav/>
        <div className='flex'>
          <div className="">
        {size[0]>640?aside?<YoutubeBigAside/>:<YoutubeSmallAside/>:aside?<YoutubeSmallScreenAside/>:null}
        </div>
        <YoutubeMain/>
        </div>
    </section>
  )
}

export default Youtube