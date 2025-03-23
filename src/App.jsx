import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Registration from './components/Registration'
import Committee from './pages/Commitee'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-900/90 to-black/90 bg-cover bg-center bg-no-repeat"
      >
        <Navbar />  
        <main className="container mx-auto ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/committee" element={<Committee />} />
            {/* <Route path="/schedule" element={<div>Schedule Page</div>} />
            <Route path="/speakers" element={<div>Speakers Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App