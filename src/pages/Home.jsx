import React from 'react'
import Hero from '../components/Hero'
import Advisory from '../components/Advisory';
import ImportantDates from '../components/ImportantDates';
import Contact from '../components/Contact';


const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Advisory />
      <ImportantDates />
      <Contact />

    </div>
  )
}

export default Home