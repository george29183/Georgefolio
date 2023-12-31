import React, { useState, useEffect } from 'react'
import slide1 from './175858.jpg'
import slide2 from './175860.jpg'
import slide3 from './175867.jpg'
import slide4 from './175881.jpg'
import {motion} from 'framer-motion'
function SlideThird() {
    const [disItem,setDisItem] = useState(0)
    const [imageOpacity, setImageOpacity] = useState(0);

    const slideSmall = [
      {
        name: "Cluster of Diamonds",
        img: slide1,
        disc: "lorem ipsum, sit amet consectetur adipisicing elit. Id perferendis tempore,",
      },
      {
        name: "Purple Diamonds",
        img: slide2,
        disc: "lorem ipsum, sit amet consectetur adipisicing elit. Id perferendis tempore,",
      },
      {
        name: "No Idea What This Is!",
        img: slide3,
        disc: "lorem ipsum, sit amet consectetur adipisicing elit. Id perferendis tempore,",
      },
      {
        name: "A ring Of Diamonds",
        img: slide4,
        disc: "lorem ipsum, sit amet consectetur adipisicing elit. Id perferendis tempore,",
      },
    ];
  
    useEffect(() => {
      // Update opacity when component mounts
      setImageOpacity(1);
  
      const intervalId = setTimeout(() => {
        if (disItem <= 2) {
          setDisItem((prev) => prev + 1);
        } else {
          setDisItem(0);
        }
      }, 5000);
  
      return () => clearTimeout(intervalId); // Clear the timeout on component unmount
    }, [disItem]);
  
    return (
      <div className="bg-[#363F48] p-5">
        <div className="flex relative justify-between bg-slate-800 lg:flex-row-reverse flex-col-reverse w-[80%] mx-auto h-96">
          <motion.img
          key={disItem}
            initial={{
              opacity: imageOpacity,
            }}
            animate={{
              opacity: imageOpacity, // Use the state variable for opacity
            }}
            transition={{
              duration: 2,
            }}
            className={`h-[60%] ${disItem === 3 ? "lg:aspect-[1.7/1]" : null} lg:aspect-[1.4/1] aspect-[1/2] brightness-75 lg:h-96 lg:w-[70%] `}
            src={slideSmall[disItem].img}
            alt=""
          />
            <div className='p-2 pt-3 relative bg-slate-800 lg:absolute bottom-0 left-0 basis-2/3 flex flex-col top-0 justify-center lg:w-[30%]  z-10'>
                <h1 className='lg:text-5xl p-2 text-center lg:text-left  text-4xl'>{slideSmall[disItem].name}</h1>
                <p className='p-2 text-center lg:text-left'>{slideSmall[disItem].disc}</p>
                <div className=' absolute bg-slate-800 w-full h-10 -bottom-10 rounded-b-[50%] left-0 right-0 lg:top-0 lg:bottom-0 lg:left-auto lg:-right-36 lg:h-full lg:rounded-bl-none  lg:rounded-r-[50%] lg:w-40'></div>
            </div>
            <div className='z-10 flex gap-1 justify-center left-0 right-0  absolute bottom-3'>
                <div className={`w-5 ${disItem===0 ?"bg-slate-300 scale-105 -translate-y-1":" bg-[#363f48] scale-95"} h-5 transition-all duration-300 rounded-[50%] `}></div>
                <div className={`w-5 ${disItem=== 1?"bg-slate-300 scale-105 -translate-y-1":" bg-[#363f48] scale-95"} h-5 transition-all duration-300 rounded-[50%] `}></div>
                <div className={`w-5 ${disItem=== 2?"bg-slate-300 scale-105 -translate-y-1":" bg-[#363f48] scale-95"} h-5 transition-all duration-300 rounded-[50%] `}></div>
                <div className={`w-5 ${disItem=== 3?"bg-slate-300 scale-105 -translate-y-1":" bg-[#363f48] scale-95"} h-5 transition-all duration-300 rounded-[50%] `}></div>
            </div>
        </div>
    </div>
  )
}

export default SlideThird