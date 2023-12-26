import React from 'react'
import OwnNavbar from '../own-navbar/own-navbar'
import BlogNav from './components/navbar/BlogNav'
import BlogHero from './components/hero/BlogHero'
import Progress from './components/progress/Progress'
import Article from './components/subHero/Article'

export default function Blog(){
  return (
    <section className='text-slate-50'>
    <OwnNavbar path='Blog'/>
    <BlogNav/>
    <BlogHero/>
    <Progress/>
    <Article/>
    </section>
  )
}

