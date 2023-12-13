import React from 'react'
import Projects from './projects'
import Skills from './skills'

export default function Over(props){
 const display = ()=>{ switch (props.value) {
            case 'projects':
            return <Projects/>    
            
        case 'skills':
            return <Skills/>
            default:
                null
                break;
        }}
    
  return (
       <div>
        {display()}
    </div>
  )
}

