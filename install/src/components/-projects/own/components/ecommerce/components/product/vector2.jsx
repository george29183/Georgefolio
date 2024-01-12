import React from 'react'

function vector2(props) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" fill="#828282"/>
<g clip-path="url(#clip0_1_3)">
<rect width="1440" height="5902" transform="translate(-592 -1608)" fill={props.fill}/>
<rect x="-56.5" y="-24.5" width="169" height="144" rx="3.5" stroke="black"
{...props}
stroke-opacity="0.3"/>
<g clip-path="url(#clip1_1_3)">
<path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="black" {...props} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 42V49H35V42" stroke="black" {...props} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 14V7H35V14" stroke="black" {...props} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="24" y1="23" x2="24" y2="34" stroke="black" {...props} stroke-width="2" stroke-linecap="round"/>
<line x1="28" y1="28" x2="28" y2="34" stroke="black" {...props} stroke-width="2" stroke-linecap="round"/>
<line x1="32" y1="26" x2="32" y2="34" stroke="black" {...props} stroke-width="2" stroke-linecap="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_1_3">
<rect width="1440" height="5902" fill="white" transform="translate(-592 -1608)"/>
</clipPath>
<clipPath id="clip1_1_3">
<rect width="56" height="56" fill="white"/>
</clipPath>
</defs>
</svg>

  )
}

export default vector2

