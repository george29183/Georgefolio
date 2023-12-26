import React,{useEffect,useState} from 'react'
import MaterialSymbolsLightMenuRounded from '../assets/MaterialSymbolsLightMenuRounded'

export default function BlogNav(){
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyDiv = document.getElementById('stickyDiv');
      const offset = stickyDiv.offsetHeight;
      if (window.scrollY > offset+235) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className={`${isSticky?"bg-opacity-100":"bg-opacity-0 "} z-50 text-slate-50 w-full flex  items-center duration-200 transition-all bg-red-700 justify-between p-2 h-16 sticky top-16`}>
      <div>
        <h1 className='text-2xl cursor-pointer font-semibold  w-[max-content] mr-4'>MY BLOG</h1>
      </div>
    
      <div>
        <div className='flex z-50 gap-1'>
            <button className=' py-2 px-6 border border-yellow-500 hover:bg-red-500 transition-all rounded-md hover:text-slate-900 duration-300'>Sign Up</button>
        <MaterialSymbolsLightMenuRounded className="hover:scale-105 transition-all cursor-pointer"/>
        </div>
       
      </div>
      <div id='stickyDiv' className={`hidden
       ${isSticky?" opacity-100":"opacity-0 "} h-16 text-transparent transition-all`}>s</div>
    </section>
  )
}

