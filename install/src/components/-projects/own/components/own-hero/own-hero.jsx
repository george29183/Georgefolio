import React from 'react'
import { Link } from 'react-router-dom'
import ecom from '../assets/ecom.jpg'
import blogy from '../assets/blog.jpg'
import land from '../assets/land.jpg'
import LogosReact from '../../../components/assets/LogosReact'
import LogosTailwindcssIcon from '../../../components/assets/LogosTailwindcssIcon'
import LogosFramer from '../../../components/assets/LogosFramer'



export default function OwnHero(){
 
 
  const projects = [
    {
      type:'E-commerce',
      img:ecom,
      disc:"This project was quite a journey, covering everything from creating the homepage and navigation bar to figuring out how an e-commerce website should work. I have to admit, the design isn't top-notch, and there are some cool features missing (no excuses here – it's my first big project, done before I learned more awesome skills). I've added some cool stuff already, and I'm still waiting for some great ideas to add more. Even though the design isn't perfect, the website works really well.",
      technologyUsed:["LogosReact","LogosTailwindcssIcon"]
    },
    {
      type:'Blog',
      img:blogy,
      disc:"Back when I first launched 'Bogeyman,' I was still honing my design skills, and I'll admit, the aesthetic might not be what some consider beautiful. While the design doesn't necessarily have that eye-catching appeal, I want to assure you that there's more to the blog than meets the eye. Despite its visual simplicity, the functionality is robust and geared towards providing an excellent reading experience for my audience. I've learned a lot since then and look forward to enhancing both the visual appeal and functionality of 'Bogeyman' in the future. ",
      technologyUsed:["LogosReact","LogosTailwindcssIcon"]
    },
    {
      type:'Landing-Page',
      img:land,
      disc:'Similarly, I affectionately refer to it as my masterpiece, being the last of three projects I completed. I was simultaneously refining my animation skills while working on this endeavor. The concept of incorporating diamonds and creating the visuals were my own, although I constructed the landing page using a design template. This approach was intentional, serving as a demonstration of my proficiency in translating design templates (from Figma, PSD, XD) into a seamlessly responsive website.',
      technologyUsed:["LogosReact","LogosTailwindcssIcon","LogosFramer"]
    },
   
  ]

  const display = projects.map((item,i) => {
    return (
      <div key={item.type} className={`flex mx-3 h-[900px] lg:h-[500px] lg:flex-row flex-col ${i===1?"lg:flex-row-reverse":null} gap-5`}>
        <div className='flex basis-1/2 gap-6 flex-col '>
          <div>
            <h1 className='text-3xl p-3 lg:text-5xl font-bold mb-2'>{item.type}</h1>
            <p className='w-[80%] mx-auto text-xl'>{item.disc}</p>
          </div>
          <div className=' self-center gap-4 flex'>
            <LogosReact className=" drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>
            <LogosTailwindcssIcon className=" drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>
            {i===2?<LogosFramer className=" drop-shadow-lg hover:scale-105 hover:drop-shadow-xl transition-all cursor-pointer"/>:null}
          </div>
        </div>
        <Link className='h-96 mx-auto  basis-1/2 w-96 overflow-hidden m-5' onClick={() => { window.scrollTo(0, 0) }} to={`/project/OWN/${item.type}`}>
          <img className='rounded-xl object-top w-full h-full object-cover hover:lg:object-bottom duration-[4s] ease-in-out delay-1000' src={item.img} alt={item.type} />
        </Link>
      </div>
    );
  });
  
 
  return (
    <section className='flex flex-col items-center'>
        <h2 className='p-4 text-center lg:text-6xl sm:text-2xl text-slate-900 text-bold text-3xl'>My Projects</h2>
        <p className='mx-auto w-[90%] lg:w-[80%] text-center lg:text-2xl text-slate-900'> I have curated all of my projects on this page for your convenience, providing an easy and seamless navigation experience throughout the website. It's important to note that these projects are not commissioned for clients but are meticulously crafted to showcase a diverse portfolio of my work.

Feel free to explore each project in detail and share your thoughts. Your feedback is valuable, so please let me know which project resonates with you.</p>
           <div className='mt-28'>
               {display}
               </div>
          
    </section>
  )
}
