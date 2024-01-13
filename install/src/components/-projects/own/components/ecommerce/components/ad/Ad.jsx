import React, { useState, useEffect } from 'react';
import beat from './jblboombox-2-hero-020-x-111.png'
function Ad(props) {
    const calculateTimeLeft = () => {
        const now = new Date();
        const targetDate = new Date('2024-03-01T00:00:00'); // Replace with your target date
    
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
   <div className={`${props.className} lg:px-[135px]`}>
       <div className='flex bg-[#000000] px-5 py-10 -z-20 lg:h-[500px] w-full items-center'>
        <div className='flex flex-col gap-10 items-center justify-center lg:justify-start lg:items-start w-full  lg:w-[50%]'>
           <h2 className='text-[#00FF66]'>Categories</h2>
           <h1 className='lg:text-5xl text-3xl text-[#FAFAFA]'>Enhance Your Music Experience</h1>
           <div className='flex  gap-3 font-semibold w-full justify-center lg:justify-start  text-[#0f0f0f]'>
            <div className=' flex justify-center  items-center   bg-[#fafafa]  px-6 py-2 flex-col rounded-[50%] '>
                <div className='text-2xl lg:text-3xl'>
                    {timeLeft.days<10?"0"+timeLeft.days:timeLeft.days}
                </div>
                <div>
                   days
                </div>
                </div>
            <div className='  flex justify-center flex-col items-center px-5 py-2 bg-[#fafafa] rounded-full '>
                <div className='text-2xl lg:text-3xl'>
                  {timeLeft.hours<10?"0"+timeLeft.hours:timeLeft.hours}
                </div>
                <div>
                    hours
                </div>
            
            </div>
            <div className=' flex justify-center flex-col  items-center px-3 bg-[#fafafa] rounded-full '>
                <div className='text-2xl lg:text-3xl'>
                   {timeLeft.minutes<10?"0"+timeLeft.minutes:timeLeft.minutes}
                </div>
                <div>
                    minutes
                </div>
           
            </div>
            <div className=' flex justify-center items-center flex-col px-3 bg-[#fafafa] rounded-full '>
                <div className='text-2xl lg:text-3xl'>
                  {timeLeft.seconds<10?"0"+timeLeft.seconds:timeLeft.seconds}
                </div>
                <div>
                seconds
                </div>
            
            </div>
           </div>
           <div className='relative z-20'>
            <img className={`lg:invisible lg:opacity-0 lg:w-0 lg:h-0 duration-500 z-10 lg:hidden ease-in-out `} 
             src={beat} alt="iphone" />
             <div className='absolute h-full w-full bg-[#D9D9D9] rounded-[50%] animate-pulse -z-10 top-0 blur-[100px] opacity-[0.52]'/> 
           </div>
           
           <button className='text-[#fff5f5] duration-300 ease-in-out hover:scale-105 lg:group px-12 py-3 hover:rounded-xl hover:bg-gradient-to-r from-[#00FF66] hover:shadow-xl to-[#024c20] active:scale-95 bg-[#00FF66]'>
            <p className=' group-hover:invisible group-hover:opacity-0 
             group-hover:hidden
            duration-500 ease-in-out'>Buy Now!</p>
            <p className=' group-hover:visible 
             group-hover:block
            group-hover:opacity-100
            opacity-0 invisible duration-500 ease-in-out hidden
            '>Dont Miss The chance!</p>
            </button>
        </div>
        <div className='opacity-0 invisible lg:visible lg:opacity-100 duration-500 relative z-20 ease-in-out w-0 lg:w-[50%]'>
         <img className={`z-10 anim`} 
         src={beat} alt="iphone" /> 
         <div className='absolute h-full w-full bg-[#D9D9D9] rounded-[50%] -z-10 animate-pulse top-0 blur-[100px] opacity-[0.54]'/> 
     </div>
    </div>
   </div>
  )
}

export default Ad