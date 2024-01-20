import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import noImg from './components/rename.png'
import MaterialSymbolsCalendarMonthSharp from './components/MaterialSymbolsCalendarMonthSharp'
import MaterialSymbolsLightAttachFile from './components/MaterialSymbolsLightAttachFile'
import { motion} from 'framer-motion'
import WeatherApp from './weatherApi/Weather';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },


};
function NewsApi() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Relevance');

  const handleRadioChange = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    setLoading(true)
    setTimeout(() => {
      setSort(item)
      }, 8000);
   
    
  };
  const [articles, setArticles] = useState([]);
  const [sort,setSort] = useState("")
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('covid');
  const [input,setInput] = useState(null)
  const [numberOfPages,setNumberOfPages] = useState(0)
  const [currentPage,setCurrentPage] = useState(0)
  const [fq,setFq] = useState('')
  const sortingTerms = ['Oldest', 'Newest', 'Relevance'];
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual New York Times API key
        const apiKey = 'wGO6AeqzA3fGVnLua8Hf8Zj4f8mC1pYS';
        const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&sort=${sort.toLowerCase()}&page=${currentPage}&fq=${fq}&api-key=${apiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setNumberOfPages(data.response.meta.hits)
        setArticles(data.response.docs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [query,currentPage,sort]);
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handlePage = (inc)=>{
    setLoading(true)
    setTimeout(() => {
        switch (inc) {
            case 1:
                setCurrentPage(currentPage+1)
                break;
            case 0:
            setCurrentPage(currentPage-1)
              break;
            default:
                break;
        }
        
    }, 8000);
  }
  useEffect(() => {
    document.title = 'GeorgePost';
  }, []);
  return (
    <div className="">
         <div className='w-full bg-[#b8b8b8] px-2 flex py-3 gap-2 justify-between max-w-[1600px] xl:mx-auto items-center'>
         <h1 className='text-5xl w-[40%] font-bold post'>Georgepost</h1>
         <div className='w-[40%] flex gap-2 '>
           <input
        className='w-full px-2 py-2 shadow-lg '
          type="text"
          id="searchInput"
          placeholder='Search'
          onChange={handleInputChange}
        />
        <button className="bg-stone-800 px-2 py-3 font-semibold text-[#f0f0f0] hover:bg-stone-900 hover:shadow-xl  active:scale-95 transition shadow-lg rounded-md" onClick={()=>{setQuery(input);setCurrentPage(0)}}>Search</button>
         </div>
         <WeatherApp className="basis-1/3 flex flex-col h-full justify-center w-[20%] items-center"/>
      </div>
      <div className='lg:w-[60%] max-w-[1600px] xl:mx-auto bg-[#f0f0f0] lg:mx-auto'>
        <div className='flex  w-full items-start'>
          <div className='flex basis-1/3 justify-self-start justify-center items-center flex-col p-5'>
          <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="flex justify-center flex-col items-center">
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-stone-700 flex items-center text-white gap-16 shadow-lg p-2 rounded"
      >
        sort by {selectedItem}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className="overflow-hidden p-4 bg-orange-900 mt-2"
      >
        {sortingTerms.map((item, index) => (
          <motion.li key={index} variants={itemVariants} className="mb-2 text-slate-300">
            <label className="checkbox-label flex items-center">
              <input
                type="radio"
                value={item}
                checked={selectedItem === item}
                onChange={() => handleRadioChange(item)}
                className="mr-2 indeterminate:bg-gray-300 appearance-none checked:bg-stone-600 "
              />
              {item}
            </label>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
          </div>
        <div className='flex basis-1/3 flex-col pt-5 items-center justify-center '>
           <h1 className='text-5xl '>{query}</h1>
           <p className='text-xl'>results</p>
           <p className='text-lg text-stone-500 text'>{numberOfPages}</p>
        </div>
       
        </div>
      <div className='flex gap-4 mb-10 mr-3 items-center justify-center pt-4'>
        <button disabled={currentPage===0 || loading} className={`px-3 disabled:opacity-50  py-2 bg-slate-50 hover:bg-stone-400 transition active:scale-95 rounded-lg `} onClick={()=>{handlePage(0)}}>Previous</button>
        <p>{currentPage+1}/{Math.round(numberOfPages/10)+1}</p>
        <button disabled={loading} className={`px-3 py-2 bg-slate-50 disabled:opacity-50  hover:bg-stone-400 transition active:scale-95 rounded-lg`} onClick={()=>{handlePage(1)}}>next</button>
        </div>
      {loading ?articles.map(()=>{
        return(  <div className=' animate-pulse mb-10 gap-4 flex h-full w-full'>
          <div className="flex flex-col gap-2 w-3/5">
           <div className='bg-gray-300 h-10 w-72'></div>
            <div className='bg-gray-300 h-60  mb-2'></div>
            <div className='bg-gray-300 h-5 w-[60%]'></div>
            <div className='bg-gray-300 h-5 w-[70%]'></div>
          </div>
          <div class="bg-gray-300 rounded-lg self-center h-48 w-2/5 mb-2"></div>
        </div>)
      })
              
            
       : (
        <ul className='flex flex-col gap-10'>
          {articles.map((article,i) => (
            <li className='flex flex-col gap-5 ' key={article._id}>
                <div className='w-full justify-between px-8 flex flex-col items-center gap-5 sm:flex-row'>
                <div className='basis-2/3'>
                 <h3 className='text-2xl text-semibold'> {article.headline.main}</h3>
                 <p>{article.snippet}</p>
                 <p>{article.lead_paragraph}</p>
                 <div className='flex flex-col font-semibold text-xs gap-5'>
                    <div className='flex gap-2 items-center'>
                        <p><MaterialSymbolsCalendarMonthSharp/></p>
                     <p className=''>{article.pub_date.slice(0,10)}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p><MaterialSymbolsLightAttachFile/></p>
                     <p>{article.section_name}</p>
                    </div>
                  
                 
                 </div>
                </div>
           
              {article.multimedia && article.multimedia.length > 0 && article.multimedia[1]?(
             <Link className=' basis-1/3 w-60 h-40' target='_blank' to={article.web_url}><img className='w-full h-full rounded-lg' src={`https://www.nytimes.com/${article.multimedia[1].url}`} alt="no image" /></Link>):(
                <Link className='basis-1/3 w-60 h-60' target='_blank' to={article.web_url}><img className='w-full h-full rounded-lg' src={noImg} alt="no-image" /></Link>
             )}
             </div>
             <hr className='w-[80%] mx-auto border-stone-950'/>
            </li>
            
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}

export default NewsApi;
