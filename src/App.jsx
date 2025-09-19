import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Registration from './components/Registration'
import Committee from './pages/Commitee'
import Sponsors from './pages/Sponsors'
import ImportantDatesPopup from './components/ImportantDatesPopup'

const BackgroundPattern = () => (
  <div className="fixed inset-0 -z-10 bg-gray-50">
    <div className="absolute inset-0 ">
      <div className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,119,6,0.15) 2px, transparent 0)',
          backgroundSize: '32px 32px'
        }}>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative text-gray-800">
        <BackgroundPattern />
        <Navbar />  
        <main className="container mx-auto relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/sponsors" element={<Sponsors />} />
            {/* <Route path="/schedule" element={<div>Schedule Page</div>} />
            <Route path="/speakers" element={<div>Speakers Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} /> */}
          </Routes>
        </main>
        <Footer />
        <ImportantDatesPopup />
      </div>
    </BrowserRouter>
  )
}

export default App