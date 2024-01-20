import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import ecom from './assets/ecomnewest2.jpg'
import land from './assets/landing.jpg'
import LogosHtml5 from '../skills/icons/LogosHtml5'
import LogosCss3 from '../skills/icons/LogosCss3'
import LogosJavascript from '../skills/icons/LogosJavascript'
import LogosReacts from '../skills/icons/LogosReacts'
import LogosTailwindcssIcon from '../skills/icons/LogosTailwindcssIcon'
import LogosNextjsIcon from '../skills/icons/LogosNextjsIcon'
import LogosNodejs from '../skills/icons/LogosNodejs'
import LogosExpress from '../skills/icons/LogosExpress'
import LogosMongodbIcon from '../skills/icons/LogosMongodbIcon'
import LogosGitIcon from '../skills/icons/LogosGitIcon'
import LogosGithubIcon from '../skills/icons/LogosGithubIcon'
import LogosFirebase from '../skills/icons/LogosFirebase'
import LogosFigma from '../skills/icons/LogosFigma'
import LogosFramer from '../skills/icons/LogosFramer'
import SimpleIconsNewyorktimes from '../skills/icons/SimpleIconsNewyorktimes'
import FluentWeatherCloudy24Filled from '../skills/icons/FluentWeatherCloudy24Filled'
import MdiApi from '../skills/icons/MdiApi'
import youtube from "./assets/yotube.jpg"
import georgePost from './assets/georgePost.jpg'
function Projects() {
    
  const projects = [
    {
      type:'E-commerce',
      name:"GeorgeFi",
      img:ecom,
      disc:"This project was quite a journey, covering everything from creating the homepage and navigation bar to figuring out how an e-commerce website should work. I have to admit, the design isn't top-notch, and there are some cool features missing (no excuses here – it's my first big project, done before I learned more awesome skills). I've added some cool stuff already, and I'm still waiting for some great ideas to add more. Even though the design isn't perfect, the website works really well.",
      technologyUsed:["LogosReact","LogosTailwindcssIcon"],
      category:"OWN"
    },
    {
      type:'Landing-Page',
      name:"GeorgeMind",
      img:land,
      disc:'Similarly, I affectionately refer to it as my masterpiece, being the last of three projects I completed. I was simultaneously refining my animation skills while working on this endeavor. The concept of incorporating diamonds and creating the visuals were my own, although I constructed the landing page using a design template. This approach was intentional, serving as a demonstration of my proficiency in translating design templates (from Figma, PSD, XD) into a seamlessly responsive website.',
      technologyUsed:["LogosReact","LogosTailwindcssIcon","LogosFramer"],
      category:"OWN"
    },
    {
        type:'Youtube',
        name:"GeorgeTube",
        img:youtube,
        disc:"This project was quite a journey, covering everything from creating the homepage and navigation bar to figuring out how an e-commerce website should work. I have to admit, the design isn't top-notch, and there are some cool features missing (no excuses here – it's my first big project, done before I learned more awesome skills). I've added some cool stuff already, and I'm still waiting for some great ideas to add more. Even though the design isn't perfect, the website works really well.",
        technologyUsed:["LogosReact","LogosTailwindcssIcon"],
        category:"clones"
      },
      {
        type:'News',
        name:"GeorgePost",
        img:georgePost,
        disc:"This project was quite a journey, covering everything from creating the homepage and navigation bar to figuring out how an e-commerce website should work. I have to admit, the design isn't top-notch, and there are some cool features missing (no excuses here – it's my first big project, done before I learned more awesome skills). I've added some cool stuff already, and I'm still waiting for some great ideas to add more. Even though the design isn't perfect, the website works really well.",
        technologyUsed:["LogosReact","LogosTailwindcssIcon"],
        category:"API's"
      }
   
  ]
    
  const display = projects.map((item,i) => {
    return (
      <div key={item.type} className={`flex mx-3  lg:h-[500px] flex-col text-[#f5f5f5] ${i===1 || i===3?"lg:flex-row-reverse":"lg:flex-row "} gap-5`}>
        <div className='flex basis-1/2 gap-6 flex-col '>
          <div>
            <h1 className='text-3xl p-3 lg:text-5xl font-bold mb-2'>{item.name}</h1>
            <p className='w-[80%] mx-auto text-xl'>{item.disc}</p>
          </div>
          <div className=' self-center gap-4 flex'>
            <LogosReacts className=" w-[3em] h-[3em] drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>
            <LogosTailwindcssIcon className=" w-[3em] h-[3em] drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>
            {!(i===2)?<LogosFramer className=" w-[3em] h-[3em] drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>:null}
            {i===0?<LogosFigma className=" w-[3em] h-[3em] drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>:null}
            {i===0?<LogosFirebase className=" w-[3em] h-[3em] drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>:null}
            {i===3?<MdiApi className=" drop-shadow-lg w-[3em] h-[3em] hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>:null}
            {i===3?<SimpleIconsNewyorktimes className=" drop-shadow-lg w-[3em] h-[3em] hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>:null}
            {i===3?<FluentWeatherCloudy24Filled className=" drop-shadow-lg w-[3em] h-[3em] hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>:null}
          </div>
        </div>
        <Link target='_blanck' className='h-96 mx-auto  basis-1/2 w-[80%] overflow-hidden m-5' to={`/project/${item.category}/${item.type}`}>
          <img className='rounded-xl object-top w-full h-96 object-cover hover:lg:object-bottom duration-[7s] ease-in-out delay-400' src={item.img} alt={item.type} />
        </Link>
      </div>
    );
  });
  return (
   <section id='projects' className='h-full w-full flex justify-center relative pb-16 pt-12 bg-sky-800'>
         <div className='absolute -top-20 left-0 right-0 bg-sky-800 h-20  rounded-t-full '></div>
         <div className='text-[#f5f5f5]'>
             <div className='flex flex-col items-center'>
                 <h1 className='text-6xl'>Projects</h1>
                 <hr className='w-[15%] mb-10 mt-4'/>
                 <p className='mx-auto w-[90%] lg:w-[80%] text-center lg:text-2xl text-[#f5f5f5]'> I have curated all of my projects on this page for your convenience, providing an easy and seamless navigation experience throughout the website. It's important to note that these projects are not commissioned for clients but are meticulously crafted to showcase a diverse portfolio of my work.

                 Feel free to explore each project in detail and share your thoughts. Your feedback is valuable, so please let me know which project resonates with you.</p>
             </div>
             <div className='mt-28 mb-10'>
                {display}
             </div>
         </div>
         <div className='absolute bottom-0 left-0 right-0 bg-[#f5f5f5] h-20  rounded-t-full '></div>
   </section>
  )
}

export default Projects