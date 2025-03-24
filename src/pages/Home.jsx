import React from 'react'
import Hero from '../components/Hero'
import Advisory from '../components/Advisory';
import ImportantDates from '../components/ImportantDates';
import Contact from '../components/Contact';
import About from './About';


const Home = () => {
  return (
    <div className=''>
      <Hero />
      {/* <About /> */}
      <ImportantDates />
      <Advisory />
      <Contact />

    </div>
  )
}

export default Home