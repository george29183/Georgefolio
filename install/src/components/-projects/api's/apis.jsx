import React from 'react'
import ApiNav from './components/apinav/ApiNav'
import ApiHero from './components/apihero/ApiHero'

export default function APIs(){
  return (
    <section className='text-black'>
      <ApiNav/>
      <ApiHero/>
    </section>
  )
}

