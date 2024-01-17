import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EcomContextProvider from './components/-projects/own/components/context/ecomContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <EcomContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </EcomContextProvider>
  ,
)
