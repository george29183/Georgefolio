import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import ecom from './assets/ecomnewest2.jpg'
import LogosReacts from '../skills/icons/LogosReacts'
import LogosTailwindcssIcon from '../skills/icons/LogosTailwindcssIcon'
import LogosFirebase from '../skills/icons/LogosFirebase'
import LogosFigma from '../skills/icons/LogosFigma'
import LogosFramer from '../skills/icons/LogosFramer'
import SimpleIconsNewyorktimes from '../skills/icons/SimpleIconsNewyorktimes'
import FluentWeatherCloudy24Filled from '../skills/icons/FluentWeatherCloudy24Filled'
import MdiApi from '../skills/icons/MdiApi'
import youtube from "./assets/youtube.jpg"
import georgePost from './assets/georgePost.jpg'
function Projects() {
    
  const projects = [
    {
      type:'E-commerce',
      name:"GeorgeFi",
      img:ecom,
      disc:"an e-commerce project I tackled. I built it from the ground up, complete with a smooth cart, efficient search function, wishlist, and authentication,really take your time there are so much detials!. The whole thing was developed from scratch, taking inspiration from an existing Figma design.I think this is just enough for a proof. click on the figma logo to see the design!",
      technologyUsed:["LogosReact","LogosTailwindcssIcon"],
      category:"OWN"
    },
    {
        type:'Youtube',
        name:"GeorgeTube",
        img:youtube,
        disc:"the youtube clone (it's obvious) made some of the frontend logic. I used react and tailwind i had the idea of expanding it more but you know this is youtube.",
        technologyUsed:["LogosReact","LogosTailwindcssIcon"],
        category:"clones"
      },
      {
        type:'News',
        name:"GeorgePost",
        img:georgePost,
        disc:"The API project is quite ironic – I named it 'GeorgePost' while using the New York Times API because 'GeorgeTimes' just didn't sound right. The project features a search function and sorting, all achieved through calls to the NYT API. Additionally, there's a small integration with a weather API at the top, displaying real-time weather for the city of London.",
        technologyUsed:["LogosReact","LogosTailwindcssIcon"],
        category:"API's"
      }
   
  ]
    
  const display = projects.map((item,i) => {
    return (
      <div key={item.type} className={`flex mx-3  lg:h-[500px] flex-col text-cardsText ${i===1 || i===3?"lg:flex-row-reverse":"lg:flex-row "} gap-5`}>
        <div className='flex basis-1/2 gap-6 flex-col '>
          <div>
            <h1 className='text-3xl p-3 lg:text-5xl font-bold text-cardsText mb-2'>{item.name}</h1>
            <p className='w-[80%] mx-auto text-xl'>{item.disc}</p>
          </div>
          <div className=' self-center gap-4 flex'>
            <LogosReacts className=" w-[3em] h-[3em] drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>
            <LogosTailwindcssIcon className=" w-[3em] h-[3em] drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>
            {!(i===1)?<LogosFramer className=" w-[3em] h-[3em] drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>:null}
            {i===0?<Link target='_blank' to="https://www.figma.com/community/file/1219312065205187851"><LogosFigma className=" w-[3em] h-[3em] drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/></Link>:null}
            {i===0?<LogosFirebase className=" w-[3em] h-[3em] drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>:null}
            {i===2?<MdiApi className=" drop-shadow-lg w-[3em] h-[3em] hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>:null}
            {i===2?<SimpleIconsNewyorktimes className=" drop-shadow-lg w-[3em] h-[3em] hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>:null}
            {i===2?<FluentWeatherCloudy24Filled className=" drop-shadow-lg w-[3em] h-[3em] hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>:null}
          </div>
        </div>
        <Link target='_blanck' className='h-96 mx-auto  basis-1/2 w-[80%] overflow-hidden m-5' to={`/project/${item.category}/${item.type}`}>
          <img className='rounded-xl object-top w-full h-96 object-cover hover:lg:object-bottom duration-[7s] ease-in-out delay-400' src={item.img} alt={item.type} />
        </Link>
      </div>
    );
  });
  return (
   <section id='projects' className='h-full w-full flex justify-center relative pb-16 pt-12 bg-secBackground'>
         <div className='absolute -top-20 left-0 right-0 bg-secBackground h-20  rounded-t-full '></div>
         <div className='text-cardsText'>
             <div className='flex flex-col items-center'>
                 <h1 className='text-6xl'>Projects</h1>
                 <hr className='w-[15%] mb-10 mt-4'/>
                 <p className='mx-auto w-[90%] lg:w-[80%] text-center lg:text-2xl '>
                  
Hey, dive into my portfolio—it's a blend of nifty projects like an e-commerce site, a clone project, and a bit of API magic.All are in fact responsive.

These projects aren't just lines of code; they're my way of flexing creativity while nailing the precision. And the journey? Well, it's not hitting the brakes anytime soon. Get ready for more excitement ahead because I'm all in for this ride! 🚀
                 </p>
             </div>
             <div className='mt-28 mb-10'>
                {display}
             </div>
         </div>
         <div className='absolute bottom-0 left-0 right-0 bg-background h-20  rounded-t-full '></div>
   </section>
  )
}

export default Projects