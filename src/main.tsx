import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/Main'
import Navbar from './components/Navbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('nav') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('main') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)

