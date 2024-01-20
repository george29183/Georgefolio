import React from 'react'

export function LineMdConstruction(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round"><g stroke-width="2"><path stroke-dasharray="44" stroke-dashoffset="44" d="M21 21H3V19C3 18 4 17 5 17H19C20 17 21 18 21 19V21Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="44;0"></animate></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M6 17L12 2M18 17L12 2"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.3s" values="18;0"></animate></path></g><path stroke-dasharray="8" stroke-dashoffset="8" d="M8 12L12.5 9.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></animate></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M6 16L13.5 12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M9.5 17L14.5 14.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="8;0"></animate></path></g></svg>
  )
}
export default LineMdConstruction