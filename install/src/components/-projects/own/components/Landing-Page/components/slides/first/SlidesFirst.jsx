import React,{useRef, useState} from 'react'
import {motion,AnimatePresence, useInView} from 'framer-motion'
import slideImages from '../assets/slideImages';
import MaterialSymbolsArrowBackIosRounded from '../assets/MaterialSymbolsArrowBackIosRounded'
import MaterialSymbolsArrowForwardIosRounded from '../assets/MaterialSymbolsArrowForwardIosRounded'
import { wrap } from "popmotion";


const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};


function SlidesFirst() {
  const h1 = useRef(null)
  const div = useRef(null)
  const divInView = useInView(div,{once:true})
   const h1InView = useInView(h1,{once:true})
      const [[page, direction], setPage] = useState([0, 0]);
    
      
    
      const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
      };
    const TheSlide = (props)=>{
        
      const imageIndex = wrap(0, slideImages.length, (page+props.no));

     return (
        <AnimatePresence key={page} initial={false} custom={direction}>
        <motion.img
          key={page}
          src={slideImages[imageIndex].img}
          className={`w-[400px] rounded-md h-60 ${props.classNames} aspect-[3/1]  p-2`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { ease:"backInOut", stiffness: 300, damping: 30,duration:5 },
            opacity: { duration: 2 },
            ease:"easeInOut"
          }}
         
         
        />
      </AnimatePresence>
        )  }
    
    return (
      <div className='bg-[#363F48] flex p-5 flex-col'>
        <h1
        ref={h1}
        
        className={`text-4xl ${h1InView?"opacity-100":"opacity-0"} duration-1000 ease-in-out text-center`}>Scroll These Images</h1>
        <div
        ref={div}
        className={`flex items-center ${divInView?"opacity-100 translate-y-0":"translate-y-full opacity-0"} lg:max-w-none my-10 transform delay-1000 duration-1000 ease-in-out max-w-[490px] w-[80%] mx-auto`}>
            <button onClick={() => paginate(-1)} className='bg-[#2B343D] hover:scale-105 transition-all active:scale-95  hover:bg-slate-600 duration-200 ease-in-out rounded-[50%] flex items-center justify-center pl-5 pr-3  py-2 m-2'><MaterialSymbolsArrowBackIosRounded/></button>
            <div 
            className='flex gap-10 w-[70%] lg:w-[90%] overflow-hidden justify-center items-center over mx-auto' >
              <TheSlide classNames="lg:w-[300px] lg:h-40 w-[400px] h-60 " no={-1}/>
          <TheSlide classNames="w-[400px] h-60" no={0}/>
          <TheSlide classNames="lg:w-[300px] lg:h-40 w-[400px] h-60 " no={1}/>
            </div>
            <button onClick={() => paginate(1)} className='bg-[#2B343D] hover:scale-105 transition-all active:scale-95  hover:bg-slate-600 duration-200 ease-in-out rounded-[50%] flex items-center justify-center px-4 py-2 m-2'><MaterialSymbolsArrowForwardIosRounded /></button>
        </div>
        
        <p
        ref={div}
        className={`text-center ${divInView?"translate-y-0 opacity-100":"opacity-0 translate-y-full"} delay-[2s] duration-1000 ease-in-out w-[70%] mx-auto`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid inventore cupiditate tenetur quaerat deleniti, eligendi ullam. Minus porro qui unde suscipit itaque architecto reprehenderit nemo cupiditate ipsam dolorum. Possimus, dolores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem quaerat delectus quae quidem dolore.</p>
        </div>
    )
}

export default SlidesFirst