import React from 'react'

function Gamepad(props) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Category-Gamepad" clip-path="url(#clip0_876_809)">
    <path id="Vector" d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z" stroke="black"
    {...props}
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_2" d="M14 28H23.3333M18.6667 23.3334V32.6667" stroke="black" 
    {...props}
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_3" d="M35 25.6666V25.6908" stroke="black"
    {...props}
    stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path id="Vector_4" d="M42 30.3333V30.3574" stroke="black"
    {...props}
    stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_876_809">
    <rect width="56" height="56" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
  )
}

export default Gamepad
