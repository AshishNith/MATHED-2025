import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';
import Hero from '../components/Hero'
import Advisory from '../components/Advisory';
import ImportantDates from '../components/ImportantDates';
import Contact from '../components/Contact';
import CallForPaper from '../components/CallForPaper';
import KnowMoreAboutUs from '../components/KnowMoreAboutUs';

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
      <KnowMoreAboutUs />
      <ImportantDates />
      <CallForPaper />
      <Advisory />
      
      <Contact />
    </div>
  )
}

export default Home