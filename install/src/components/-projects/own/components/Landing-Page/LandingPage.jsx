import React,{useEffect} from 'react'
import OwnNavbar from '../own-navbar/own-navbar'
import LandingNav from './components/nav/LandingNav'
import UpperNav from './components/nav/upperNav'
import LandingHero from './components/hero/LandingHero'
import LandingSubHero from './components/subhero/LandingSubHero'
import LandingBody from './components/body/LandingBody'
import LandingSlides from './components/slides/LandingSlides'
import LandingLast from './components/last/LandingLast'
import LandingFooter from './components/footer/LandingFooter'



export default function LandingPage(){
  useEffect(() => {
    document.title = 'GeorgeMine';
  }, []);
  return (
    <section className=' overflow-hidden  text-[#F3F6FB]'>
        <UpperNav/>
        <LandingNav/>
        <div className='max-w-[1600px] xl:mx-auto'>
        <LandingHero/>
        <LandingSubHero/>
        <LandingBody/>
        <LandingSlides/>
        <LandingLast/>
        </div>
        <LandingFooter/>
    </section>
  )
}

