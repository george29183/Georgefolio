import React,{useContext,useState} from 'react'
import OwnNavbar from '../own-navbar/own-navbar'
import Nav from '../own-navbar/nav'


export default function EcomNew(){
  return (
    <div>
        <OwnNavbar path="E-commerce" sec="new"/>
        <Nav/>
        
    </div>
  )
}

