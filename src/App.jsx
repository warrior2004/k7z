import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact  from './pages/Contact'
import './App.css'
import Navbar from './components/Navigation/Navbar'

const Stairs = () => (
  <div className='stairs-container'>
    <div className='stair stair-1'></div>
    <div className='stair stair-2'></div>
    <div className='stair stair-3'></div>
    <div className='stair stair-4'></div>
    <div className='stair stair-5'></div>
  </div>
)

const App = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsAnimating(true)                          // show stairs on route change
    setTimeout(() => setIsAnimating(false), 1500) // hide after 1.5 seconds
  }, [location.pathname])                         // triggers on every route change

  return (
    <div className='app-wrapper'>
      <Navbar />
      {isAnimating && <Stairs />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/agency' element={<Agency />}/>
        <Route path='/projects' element={<Projects />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App