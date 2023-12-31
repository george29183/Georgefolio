import React,{useRef} from 'react'
import fourImages from '../assets/fourImages'
import { useInView} from 'framer-motion'


function SlidesSecond() {
 const img = useRef(null)
 const ImgInView = useInView(img,{once:true})

    const theGrid = fourImages.map((item,i)=>{
        return (
            <div className='' key={i}>
                <img
                 ref={img}
               
                className={`w-[90%] ${ImgInView?"grayscale-0":"grayscale"} duration-700 ease-in-out h-[80%] aspect-square object-cover`} src={item.img} alt={item.name} />
                <h1 className='text-2xl p-2'>{item.name}</h1>
            </div>
        )

    })
  return (
    <div className='bg-[#2B343D] px-[7%] py-10 '>
       <h1 className='text-4xl m-5 text-left
       '>The Beauty of Diamonds</h1>
       <div className='lg:grid gap-5  mt-16 flex flex-col grid-cols-2'>
            {theGrid}
       </div>
    </div>
  )
}

export default SlidesSecond