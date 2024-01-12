import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import iphone from './hero-endframe-cvklg-0-xk-3-w-6-e-large-2.png'
import apple from './px-apple-gray-logo-1.png' 
import pc from './g-27-cq-4500-x-5001.png'
import shopping from './akar-icons-shopping-bag.png'
import computer from './category-computer.png'
import gaming from './category-gamepad.png'
import shoe from './copa-sense-1.png'
import console from './gp-11-prd-31.png'
import jacket from './zah-9-d-56260021000000-light-the-north-face-x-gucci-coat-1.png'
import CategoryList from './CategoryList'
export default function EcomHero(){
  const [inView,setInView] = useState(0)
  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (inView <= 3) {
        setInView((prev) => prev + 1);
      } else {
        setInView(0);
      }
    }, 5000);

    return () => clearTimeout(intervalId); // Clear the timeout on component unmount
  }, [inView]);

 const slide = [
  {
     smallImg:computer,
     title:"LCD Monitors",
     bigTitle:" Up to 20% off Voucher",
     bigImg:pc,
     style:"bg-[#FFD789] text-[#4E4B66]",
    

  },
  {
    smallImg:apple,
    title:"iPhone 14 Series",
    bigTitle:" Up to 10% off Voucher",
    bigImg:iphone,
    style:"bg-[#000000] text-[#f5f5f5]",
    size:"max-h-[280px] "
 },
 {
  smallImg:shopping,
  title:"Adidas Soccer",
  bigTitle:" Up to 15% off Voucher",
  bigImg:shoe,
  style:"bg-[#ED2E7E] text-[#14142B]",
  size:"lg:w-60 lg:h-60"
},
{
  smallImg:gaming,
  title:"HAVIT HV-G92 Gamepad",
  bigTitle:" Up to 10% off Voucher",
  bigImg:console,
  style:"bg-[#34EAB9] text-[#000000]",
  size:"lg:w-40 lg:h-40"
},
{
  smallImg:shopping,
  title:"The north coat",
  bigTitle:" Up to 5% off Voucher",
  bigImg: jacket,
  style:"bg-[#BCA4FF] text-[#14142B]",
  size:"lg:w-60 lg:h-60"
},
 ]
  return (
    <section className=' sm:px-8 flex lg:gap-10 gap-2 w-full flex-col-reverse   lg:flex-row-reverse lg:justify-end  lg:px-[135px]'>
      <div className={`flex  items-center  lg:w-[60%] lg:mr-10 lg:mt-10 relative lg:h-[280px] h-[230px] ${slide[inView].style}`}>
        <div className='flex flex-col gap-5 w-[60%] lg:w-[40%] px-5'>
          <div className='flex items-center gap-3'>
             <img className='sm:h-[40px]  sm:w-[49px]' src={slide[inView].smallImg} alt="" />
             <h2 className='drop-shadow-lg text-xs'>{slide[inView].title}</h2>
          </div>
          <div>
            <h1 className='lg:text-4xl sm:text-2xl text-base font-semibold drop-shadow-lg'>
            {slide[inView].bigTitle}
            </h1>
          </div>
          <div>
            <button>Shop Now</button>
          </div>
        </div>
        <div className='flex items-center w-[40%] lg:w-[60%] flex-1 justify-end pr-[10%]'> 
           <img className={`${slide[inView].size}  `} src={slide[inView].bigImg} alt="iphone" />
           </div>
           <div className="items-center absolute flex left-[50%] transform gap-[12px] bottom-2 -translate-x-[50%] ">
      <div onClick={()=>{setInView(0)}} className={`relative w-[12px]  h-[12px] ${inView===0?"bg-[#212121] border  border-[#212121]":"cursor-pointer bg-[#ffffff]"}  rounded-[6px] opacity-50`} />
      <div onClick={()=>{setInView(1)}} className={`relative w-[12px] h-[12px] ${inView===1?"bg-[#212121] border  border-[#212121]":"cursor-pointer bg-[#ffffff]"}  rounded-[6px] opacity-50`} />
      <div onClick={()=>{setInView(2)}} className={`relative w-[12px] h-[12px] ${inView===2?"bg-[#212121] border  border-[#212121]":"cursor-pointer bg-[#ffffff]"}  rounded-[6px] opacity-50`} />
      <div onClick={()=>{setInView(3)}} className={`relative w-[12px] h-[12px] ${inView===3?"bg-[#212121] border  border-[#212121]":"cursor-pointer bg-[#ffffff]"}  rounded-[6px] opacity-50`} />
      <div onClick={()=>{setInView(4)}} className={`relative w-[12px] h-[12px] ${inView===4?"bg-[#212121] border  border-[#212121]":"cursor-pointer bg-[#ffffff]"}  rounded-[6px] opacity-50`} />
    </div>
      </div>
      <CategoryList/>
    </section>
  )
}

