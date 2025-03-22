import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />  
        <main className="container mx-auto ">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/schedule" element={<div>Schedule Page</div>} />
            <Route path="/speakers" element={<div>Speakers Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App