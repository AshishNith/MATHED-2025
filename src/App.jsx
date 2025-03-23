import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Registration from './components/Registration'
import Committee from './pages/Commitee'

const BackgroundPattern = () => (
  <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900/90 to-black/90 bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90">
      <div className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,176,0,0.15) 2px, transparent 0)',
          backgroundSize: '32px 32px'
        }}>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative">
        <BackgroundPattern />
        <Navbar />  
        <main className="container mx-auto relative z-10">
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