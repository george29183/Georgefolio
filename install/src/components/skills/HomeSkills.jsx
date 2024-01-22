import React, { useEffect, useState } from 'react'
import LogosHtml5 from './icons/LogosHtml5'
import LogosCss3 from './icons/LogosCss3'
import LogosJavascript from './icons/LogosJavascript'
import LogosReacts from './icons/LogosReacts'
import LogosTailwindcssIcon from './icons/LogosTailwindcssIcon'
import LogosNextjsIcon from './icons/LogosNextjsIcon'
import LogosNodejs from './icons/LogosNodejs'
import LogosExpress from './icons/LogosExpress'
import LogosMongodbIcon from './icons/LogosMongodbIcon'
import LogosGitIcon from './icons/LogosGitIcon'
import LogosGithubIcon from './icons/LogosGithubIcon'
import LogosFirebase from './icons/LogosFirebase'
import LogosFigma from './icons/LogosFigma'
import LogosFramer from './icons/LogosFramer'
import LogosStripe from './icons/LogosStripe'
import LineMdConstruction from './icons/LineMdConstruction'
import {motion} from 'framer-motion'
import PercentageLabel from './SkillsArray'


     // Frontend skills with objects
     const frontendSkills = [
      { name: "HTML5", icon:<LogosHtml5 className={`w-[3em] h-[3em]`}/>, professionalism: 89, color:"#E44D26" },
      { name: "CSS3", icon:<LogosCss3 className={`w-[3em] h-[3em]`}/>, professionalism: 88, color:"#264DE4" },
      { name: "JavaScript", icon:<LogosJavascript className={`w-[3em] h-[3em]`}/>, professionalism: 80, color:"#F7DF1E" },
      { name: "React", icon:<LogosReacts className={`w-[3em] h-[3em]`}/>, professionalism: 92, color:"#00D8FF" },
      { name: "Tailwind CSS", icon: <LogosTailwindcssIcon className={`w-[3em] h-[3em]`}/>, professionalism: 79, color:"#2298BD" },
      { name: "Next.js", icon: <LogosNextjsIcon className={`w-[3em] h-[3em]`}/>, professionalism: 20, color:"#000" },
    ];
    
    // Backend skills with objects
    const backendSkills = [
      { name: "Node.js", icon: <LogosNodejs className={`w-[3em] h-[3em]`}/>, professionalism: 80, color:"#41873F" },
      { name: "Express", icon:<LogosExpress className={`w-[3em] h-[3em]`}/>, professionalism: 60, color:"#222" },
      { name: "MongoDB", icon:<LogosMongodbIcon className={`w-[3em] h-[3em]`}/>, professionalism: 25, color:"#01EC64" }
    ];
    
    // Additional skills with objects
    const additionalSkills = [
      { name: "Firebase", icon:<LogosFirebase className={`w-[3em] h-[3em]`}/>, professionalism: 65, color:"#FFC24A" },
      { name: "Framer Motion", icon:<LogosFramer className={`w-[3em] h-[3em]`}/>, professionalism: 70, color:"#000" },
      { name: "Stripe", icon:<LogosStripe className={`w-[3em] h-[3em]`}/>, professionalism: 20, color:"#635BFF" },
      { name: "GitHub", icon:<LogosGithubIcon className={`w-[3em] h-[3em]`}/>, professionalism: 70, color:"#161614" },
      { name: "Figma", icon:<LogosFigma className={`w-[3em] h-[3em]`}/>, professionalism: 68, color:"#0ACF83" },
      { name: "Git", icon:<LogosGitIcon className={`w-[3em] h-[3em]`}/>, professionalism: 70, color:"#DE4C36" }
    ];
function skills() {
 const [skill,setSkill] = useState(frontendSkills)

 const dispaly = skill.map((item,i)=>{
  return <motion.div
            
          className='w-full flex flex-col gap-2 justify-center' key={i}>
         <div className='w-full flex justify-between items-center'>
          <div className=' text-secBackground flex gap-2 items-center'>
          {item.icon}
          <h1>{item.name}</h1>
          </div>
        
          <PercentageLabel percentage={item.professionalism}/>
         </div>
         <div className='w-full h-5 bg-gray-500'>
              <motion.div
              initial={{
                width:0,
                background:item.color
              }}
              animate={{
                width:`${item.professionalism}%`,
                background:item.color
              }} 
              transition={{
                duration:2,
                ease:"backInOut"
              }}
              className={`
               h-full bg-sky-800`}/>
         </div>
         
  </motion.div>
 })

  return (
    <section  className='w-full shadow-2xl h-full pb-40 xl:pt-80 pt-16 bg-background'>
   
       <div id='skills' className='w-full justify-center gap-2 items-center flex-col flex'>
           <h1  className='xl:text-7xl text-textBlack text-5xl pt-14'>Skills</h1>
           <hr className='w-[15%] border-textBlack  mb-10'/>
       </div>
       <div className='flex xl:text-2xl text-lg justify-between text-cardsText  lg:mx-[10%] items-center px-2 '>
           <div>
               <button className='sm:px-10 px-2 py-4 relative bg-secBackground shadow-lg hover:scale-105 active:scale-95 duration-700 ease-in-out ' onClick={()=>setSkill(frontendSkills)}>Frontend {skill===frontendSkills?<motion.div
                 initial={{
                 width:0
                 }}
                 animate={{
                width:'100%'
                 }}
                 transition={{
                  duration:0.5,
                  ease:"backInOut"
                 }}
               className='left-0 right-0 bg-cards h-3 absolute bottom-0'/>:null}</button>
           </div>
           <div>
                <button className='sm:px-10 px-2 py-4 relative bg-secBackground shadow-lg hover:scale-105 active:scale-95 duration-700 ease-in-out ' onClick={()=>setSkill(backendSkills)}>Backend {skill===backendSkills?<motion.div
                  initial={{
                   width:0,
                  }}
               
                  animate={{
                    width:'100%'
                  }}
                  transition={{
                    duration:0.5,
                    ease:"backInOut"
                  }}
                className='left-0 right-0 bg-cards h-3 absolute bottom-0'/>:null}</button>
           </div>
           <div>
                <button className='sm:px-10 px-2 py-4 relative bg-secBackground shadow-lg hover:scale-105 active:scale-95 duration-700 ease-in-out ' onClick={()=>setSkill(additionalSkills)}>Other Skills {skill===additionalSkills?<motion.div
                  initial={{
                   width:0,
                  }}
                  animate={{
                    width:'100%'
                  }}
                  transition={{
                    duration:0.5,
                    ease:"backInOut"
                  }}
                className='left-0 right-0 bg-cards h-3 absolute bottom-0'/>:null}</button>
            </div>
       </div>
       <hr className='w-[80%] mx-auto xl:mb-20 mb-5 mt-10 '/>
       <div className='flex bg-[#ffffff] shadow-xl py-5 xl:py-20 mx-[5%] justify-center'> 
        <motion.div
        
        className='flex flex-col justify-center w-[80%] items-center  gap-10'>
         
            {dispaly}
        </motion.div>
    </div>
   {skill===backendSkills?<div className='flex mt-2 justify-center items-center gap-3'>
          <LineMdConstruction className="w-[4em] h-[4em]"/>
          <h1 className='text-3xl'>Skills Are Under Construction</h1>
         </div>:null}
    </section>
  )
}

export default skills