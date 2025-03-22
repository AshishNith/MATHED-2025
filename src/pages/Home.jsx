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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="hero relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
        <Hero />
      </div>

      <About />

      <div className="relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Organization */}
            <motion.section 
              variants={itemVariants}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg  border border-amber-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <FaUniversity className="text-3xl text-blue-600" />
                <h2 className="text-2xl font-medium">Organized by</h2>
              </div>
              <div className="space-y-1">
                <p className="text-lg text-gray-300">Department of Mechanical Engineering</p>
                <p className="text-gray-300">NIT Hamirpur, HP, India</p>
                <a href="https://www.nith.ac.in" className="text-blue-600 hover:text-blue-800 text-sm" target="_blank" rel="noopener noreferrer">www.nith.ac.in</a>
              </div>
            </motion.section>

            {/* Conference Leadership */}
            <motion.section 
              variants={itemVariants}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg border border-amber-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <FaUsers className="text-3xl text-indigo-600" />
                <h2 className="text-2xl font-medium">Conference Leadership</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10 hover:from-blue-100/10 hover:to-indigo-100/10 transition-colors shadow-sm">
                  <span className="text-gray-300 text-sm">Chief Patron</span>
                  <p className="font-medium mt-1 text-gray-300">Prof. H. M. Suryawanshi</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10 hover:from-blue-100/10 hover:to-indigo-100/10 transition-colors shadow-sm">
                  <span className="text-gray-300 text-sm">Patron</span>
                  <p className="font-medium mt-1 text-gray-300">Dr. Prashant Kumar</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10 hover:from-blue-100/10 hover:to-indigo-100/10 transition-colors shadow-sm">
                  <span className="text-gray-300 text-sm">Chairman</span>
                  <p className="font-medium mt-1 text-gray-300">Dr. Rajesh Kumar Sharma</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10 hover:from-blue-100/10 hover:to-indigo-100/10 transition-colors shadow-sm">
                  <span className="text-gray-300 text-sm">Organizing Secretaries</span>
                  <p className="font-medium mt-1 text-gray-300">Dr. Dilshad Ahmad Khan<br />Dr. Laxmikant Yadav</p>
                </div>
              </div>
            </motion.section>

            {/* Advisory Committee */}
            <motion.section 
              variants={itemVariants}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg border border-amber-500/20 md:col-span-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <FaUsers className="text-3xl text-indigo-600" />
                <h2 className="text-2xl font-medium">Advisory Committee</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-300">National</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Prof. V.K. Jain, IIT Kanpur</li>
                    <li>Prof. J. Ram Kumar, IIT Kanpur</li>
                    <li>Prof. Sarit Kumar Das, IIT Madras</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-3 text-gray-300">International</h3>
                  <ul className="space-y-2 text-gray-300">
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
              className="backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg border border-amber-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <FaLightbulb className="text-3xl text-yellow-500" />
                <h2 className="text-2xl font-medium">Research Themes</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {['Advanced Manufacturing', 'Smart Manufacturing', 'Industry 4.0'].map((theme, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10 hover:from-blue-100/10 hover:to-indigo-100/10 transition-colors text-gray-300">
                    {theme}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Contact */}
            <motion.section 
              variants={itemVariants}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-8 shadow-lg border border-amber-500/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <FaPhone className="text-3xl text-blue-600" />
                <h2 className="text-2xl font-medium">Contact</h2>
              </div>
              <div className="space-y-3">
                <p>
                  <span className="text-gray-300">Email: </span>
                  <a href="mailto:mathed2025@gmail.com" className="text-blue-600 hover:text-blue-800">mathed2025@gmail.com</a>
                </p>
                <p>
                  <span className="text-gray-300">Phone: </span>
                  <span className="text-gray-300">+91-9718409294, +91-7000201281</span>
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
