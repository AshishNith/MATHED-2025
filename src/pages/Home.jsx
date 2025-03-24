import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';
import Hero from '../components/Hero'
import Advisory from '../components/Advisory';
import ImportantDates from '../components/ImportantDates';
import Contact from '../components/Contact';
import CallForPaper from '../components/CallForPaper';

const Home = () => {
  const location = useLocation();
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      scrollToSection(sectionId);
      // Clean up the state
      window.history.replaceState({}, document.title);
    }
  }, [location.state, scrollToSection]);

  return (
    <div>
      <Hero />
      <div className="relative flex flex-col items-center justify-center py-12">

        
        <div className="backdrop-blur-sm bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-8 border border-amber-500/20 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-400 mb-4 text-center">
            Welcome to MATHED 2025
          </h2>
          <div className="h-1 w-32 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-300 mb-8 text-center text-lg">
            Join us for an enriching academic experience where leading researchers and scholars come together to share knowledge and insights in the fields of Manufacturing, Thermal and Design Engineering.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => window.location.href = '/about'} 
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg font-semibold text-white shadow-lg shadow-amber-500/25 hover:from-amber-600 hover:to-yellow-600 transition-all duration-300"
            >
              Know More About Us
            </button>
          </div>
        </div>
      </div>
      <ImportantDates />
      <CallForPaper />
      <Advisory />
      <Contact />
    </div>
  )
}

export default Home