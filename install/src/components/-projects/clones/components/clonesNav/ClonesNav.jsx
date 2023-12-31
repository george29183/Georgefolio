import React from 'react'
import { Link } from 'react-router-dom'

function ClonesNav(props) {
  return (
    <div>
        <div className=' z-40 hidden lg:block bg-slate-400 text-slate-50 p-2'> <h1 className='text-2xl'><Link onClick={()=>{window.scrollTo(0,0)}} to='/'>Home</Link> &gt; Projects &gt; <Link onClick={()=>{window.scrollTo(0,0)}} to='/project/clones'>clones</Link> {props.path?'>':null} {props.path} {props.sec?'>':null} {props.sec} {props.thir?'>':null} {props.thir}</h1></div>
    </div>
  )
}

export default ClonesNav