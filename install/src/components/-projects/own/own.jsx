import React, { useEffect, useState } from 'react'
import OwnNavbar from './components/own-navbar/own-navbar'
import OwnHero from './components/own-hero/own-hero'
import LoadingSkeleton from '../../loadingSkeleton/LoadingSkeleton'


export default function OWN(){
const [loading, setLoading] = useState(true);

useEffect(() => {
  // Simulate a delay (e.g., API request) to showcase the loading skeleton
  const timeoutId = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => clearTimeout(timeoutId);
}, []);

  return (
    <section>
    {loading ? (
      <LoadingSkeleton />
    ) : (<>
      <OwnNavbar/>
      <OwnHero/>
      </>
    )}
     </section>
  )
}


   
   

