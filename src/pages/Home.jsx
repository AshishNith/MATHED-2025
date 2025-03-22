import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { FaUniversity, FaUsers, FaLightbulb, FaPhone } from 'react-icons/fa';
import About from './About';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      <div className="hero">

      <Hero />
      </div>
      <div className="about">
      <About />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-16 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 relative"
        >
          {/* Organization */}
          <motion.section 
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/90 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaUniversity className="text-3xl text-blue-600" />
              <h2 className="text-2xl font-medium">Organized by</h2>
            </div>
            <div className="space-y-1">
              <p className="text-lg">Department of Mechanical Engineering</p>
              <p className="text-gray-600">NIT Hamirpur, HP, India</p>
              <a href="https://www.nith.ac.in" className="text-blue-600 hover:text-blue-800 text-sm" target="_blank" rel="noopener noreferrer">www.nith.ac.in</a>
            </div>
          </motion.section>

          {/* Conference Leadership */}
          <motion.section 
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/90 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaUsers className="text-3xl text-indigo-600" />
              <h2 className="text-2xl font-medium">Conference Leadership</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                <span className="text-gray-600 text-sm">Chief Patron</span>
                <p className="font-medium mt-1">Prof. H. M. Suryawanshi</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                <span className="text-gray-600 text-sm">Patron</span>
                <p className="font-medium mt-1">Dr. Prashant Kumar</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                <span className="text-gray-600 text-sm">Chairman</span>
                <p className="font-medium mt-1">Dr. Rajesh Kumar Sharma</p>
              </div>
              <div className="p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                <span className="text-gray-600 text-sm">Organizing Secretaries</span>
                <p className="font-medium mt-1">Dr. Dilshad Ahmad Khan<br />Dr. Laxmikant Yadav</p>
              </div>
            </div>
          </motion.section>

          {/* Advisory Committee */}
          <motion.section 
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/90 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaUsers className="text-3xl text-indigo-600" />
              <h2 className="text-2xl font-medium">Advisory Committee</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-700">National</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Prof. V.K. Jain, IIT Kanpur</li>
                  <li>Prof. J. Ram Kumar, IIT Kanpur</li>
                  <li>Prof. Sarit Kumar Das, IIT Madras</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-700">International</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Prof. Mustafizur Rahman, Singapore</li>
                  <li>Prof. Kapil Gupta, Johannesburg</li>
                  <li>Dr. Faiz Iqbal, UK</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Research Themes */}
          <motion.section 
            variants={itemVariants}
            className="backdrop-blur-sm bg-white/90 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaLightbulb className="text-3xl text-yellow-500" />
              <h2 className="text-2xl font-medium">Research Themes</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {['Advanced Manufacturing', 'Smart Manufacturing', 'Industry 4.0'].map((theme, index) => (
                <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors">
                  {theme}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Contact with gradient border */}
          <motion.section 
            variants={itemVariants}
            className="relative p-[1px] rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            <div className="backdrop-blur-sm bg-white/90 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <FaPhone className="text-3xl text-blue-600" />
                <h2 className="text-2xl font-medium">Contact</h2>
              </div>
              <div className="space-y-3">
                <p>
                  <span className="text-gray-600">Email: </span>
                  <a href="mailto:mathed2025@gmail.com" className="text-blue-600 hover:text-blue-800">mathed2025@gmail.com</a>
                </p>
                <p>
                  <span className="text-gray-600">Phone: </span>
                  +91-9718409294, +91-7000201281
                </p>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
