import React from 'react'
import { Link } from 'react-router-dom';
import georgePost from './georgePost.jpg'
function ApiHero() {
    const projects = [
        {
          type:'News',
          img:georgePost,
          disc:"This project was quite a journey, covering everything from creating the homepage and navigation bar to figuring out how an e-commerce website should work. I have to admit, the design isn't top-notch, and there are some cool features missing (no excuses here – it's my first big project, done before I learned more awesome skills). I've added some cool stuff already, and I'm still waiting for some great ideas to add more. Even though the design isn't perfect, the website works really well.",
          technologyUsed:["LogosReact","LogosTailwindcssIcon"]
        }
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
              </div>
            </div>
            <Link className='h-96 mx-auto  basis-1/2 w-96 overflow-hidden m-5' onClick={() => { window.scrollTo(0, 0) }} to={`/project/API's/${item.type}`}>
              <img className='rounded-xl object-top w-full h-full object-cover hover:lg:object-bottom duration-[4s] ease-in-out delay-1000' src={item.img} alt={item.type} />
            </Link>
          </div>
        );
      });
      
     
      return (
        <section className='flex flex-col items-center'>
            <h2 className='p-4 text-center lg:text-6xl sm:text-2xl text-slate-900 text-bold text-3xl'>My API's</h2>
            <p className='mx-auto w-[90%] lg:w-[80%] text-center lg:text-2xl text-slate-900'> I have curated all of my clones on this page for your convenience, providing an easy and seamless navigation experience throughout the website. It's important to note that these clones are not commissioned projects but rather meticulous reproductions crafted to showcase my ability to recreate popular applications and websites.
      Feel free to explore each clone in detail and share your thoughts. Your feedback is valuable, so please let me know which clone resonates with you.</p>
               <div className='mt-28'>
                   {display}
                   </div>
              
        </section>
      )
}

export default ApiHero