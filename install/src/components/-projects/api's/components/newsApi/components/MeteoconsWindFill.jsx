import React from 'react'

export function MeteoconsWindFill(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512" {...props}><defs><linearGradient id="meteoconsWindFill0" x1="138.5" x2="224.2" y1="5.1" y2="153.5" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#d4d7dd"></stop><stop offset=".5" stopColor="#d4d7dd"></stop><stop offset="1" stopColor="#bec1c6"></stop></linearGradient><linearGradient id="meteoconsWindFill1" x1="77.7" x2="169" y1="96.2" y2="254.4" href="#meteoconsWindFill0"></linearGradient><symbol id="meteoconsWindFill2" viewBox="0 0 348 240"><path fill="none" stroke="url(#meteoconsWindFill0)" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M267.2 24.3A40 40 0 1 1 296 92H12"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2960"></animate></path><path fill="none" stroke="url(#meteoconsWindFill1)" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M151.2 215.7A40 40 0 1 0 180 148H12"><animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1540"></animate></path></symbol></defs><use width="348" height="240" href="#meteoconsWindFill2" transform="translate(82 136)"></use></svg>
  )
}
export default MeteoconsWindFill