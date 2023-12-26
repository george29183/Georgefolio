import React, { useEffect, useState } from 'react';
import saladImage1 from '../assets/salad-2756467.jpg';
import saladImage2 from '../assets/fresh-fruits-2305192.jpg';
import saladImage3 from '../assets/salad-1672505.jpg';
import saladImage4 from '../assets/vegetables-752153.jpg';



export default function BlogHero() {
  const imgss = [
    { imge: saladImage1 },
    { imge: saladImage2 },
    { imge: saladImage3 },
    { imge: saladImage4 },
  ];

  const [disImg, setDisImg] = useState(0);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (disImg <= 2) {
        setDisImg(prev => prev + 1);
      } else {
        setDisImg(0);
      }
    }, 5000);

    return () => clearTimeout(intervalId); // Clear the timeout on component unmount
  }, [disImg]);

  

  return (
    <section className={`h-[max-content]  w-full text-slate-50`}>
      <img className='h-full w-full z-10 absolute top-16 lg:top-28' src={imgss[disImg].imge} alt="" />

      <div className='w-full lg:top-28 top-16 absolute h-full justify-center flex-col flex'>
        <div className='bg-gradient-to-r text-transparent z-20 from-slate-950 to-transparent absolute h-full w-full'></div>

        <div className='fonte text-slate-50 z-20 text-center mx-auto drop-shadow-2xl'>
          <h1 className='uppercase lg:text-9xl text-7xl'>my salad</h1>
          <p className='w-[60%] mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      
     </section>
  )
}

