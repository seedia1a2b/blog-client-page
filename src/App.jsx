import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Navbar from './components/Home/Navbar'
import Footer from './components/Home/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  
  return (
    <div className=''>
      <Toaster />
      <Navbar />
      <div className='pt-20 mx-10 sm:mx-15 lg:mx-20'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog/:id' element={<Blog />}/>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
