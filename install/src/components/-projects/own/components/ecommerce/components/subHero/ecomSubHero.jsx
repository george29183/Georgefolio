import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Rectangle from './Rectangle'
import SubHeroProduct from './SubHeroProduct';
export default function EcomSubHero(){
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date('2024-02-01T00:00:00'); // Replace with your target date

    const difference = targetDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='lg:mt-36 mt-16 px-2 lg:px-[135px] gap-10 lg:gap-20 flex flex-col'>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-4 text-[#db4444] font-semibold'>
           <Rectangle/>
           <h1>Today's</h1>
        </div>
       <div className='flex lg:flex-row gap-8 flex-col lg:gap-20 lg:items-end'>
          <h1 className='text-4xl lg:text-5xl'>Flash Sales</h1>
          <div className='flex self-end gap-4'>
        <div className="text-center flex flex-col-reverse ">
          <div className="text-2xl lg:text-4xl font-bold">{timeLeft.days<10?"0"+timeLeft.days:timeLeft.days}</div>
          <div>Days</div>
        </div>
        <div className='flex flex-col py-2 justify-end  gap-1 lg:gap-3'>
          <div className='w-1 h-1 rounded-[50%] bg-[#E07575]'></div>
          <div className='w-1 h-1 rounded-[50%] bg-[#E07575]'></div>
        </div>
        <div className="text-center flex flex-col-reverse">
          <div className="text-2xl lg:text-4xl font-bold">{timeLeft.hours<10?"0"+timeLeft.hours:timeLeft.hours}</div>
          <div>Hours</div>
        </div>
        <div className='flex flex-col justify-end py-2  gap-1 lg:gap-3'>
          <div className='w-1 h-1 rounded-[50%] bg-[#E07575]'></div>
          <div className='w-1 h-1 rounded-[50%] bg-[#E07575]'></div>
        </div>
        <div className="text-center flex flex-col-reverse">
          <div className="text-2xl lg:text-4xl font-bold">{timeLeft.minutes<10?"0"+timeLeft.minutes:timeLeft.minutes}</div>
          <div>Minutes</div>
        </div>
        <div className='flex flex-col justify-end py-2 gap-1 lg:gap-3'>
          <div className='w-1 h-1 rounded-[50%] bg-[#E07575]'></div>
          <div className='w-1 h-1 rounded-[50%] bg-[#E07575]'></div>
        </div>
        <div className="text-center flex flex-col-reverse">
          <div className="text-2xl lg:text-4xl font-bold">{timeLeft.seconds<10?"0"+timeLeft.seconds:timeLeft.seconds}</div>
          <div>Seconds</div>
        </div>
      </div>
    </div>
       </div>
       <SubHeroProduct
       first={6}
       second={23}
       third={63}
       forth={70}
       
       />
       <Link onClick={()=>{window.scrollTo(0,0)}} className='mx-auto' to="/project/OWN/E-commerce/products"><button className='py-4 px-12 bg-[#db4444] shadow-md hover:bg-opacity-95 hover:shadow-lg active:scale-95 transition-all text-[#f5f5f5] '>View All Products</button></Link>

       <hr className='mt-16 w-full mb-20'/>
       </div>
  )
}

