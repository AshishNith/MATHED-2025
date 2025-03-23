import React from 'react';
import { FaMapMarkerAlt, FaUniversity, FaCogs, FaImages } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id='About' className="relative min-h-screen bg-gradient-to-br from-gray-900/90 to-black/90 bg-cover bg-center bg-no-repeat py-16">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/80">
        <div className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,176,0,0.15) 2px, transparent 0)',
            backgroundSize: '32px 32px'
          }}>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-amber-400 mb-4">About Us</h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-8">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
              <FaUniversity className="text-amber-400 mr-3" />
              NIT Hamirpur
            </h2>
            <div className="prose text-gray-300 prose-invert prose-p:text-gray-300 prose-li:text-gray-300 max-w-none">
              <p>
                National Institute of Technology Hamirpur is one of the premier technical institutions of the country. 
                Established in 1986, NIT Hamirpur has consistently maintained high academic standards, research output, 
                and innovation in technology.
              </p>
              <p>
                The institute offers comprehensive programs in:
              </p>
              <ul className="grid grid-cols-2 gap-4">
                <li>Engineering</li>
                <li>Sciences</li>
                <li>Humanities</li>
                <li>Management Studies</li>
              </ul>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
              <FaMapMarkerAlt className="text-amber-400 mr-3" />
              Location & Accessibility
            </h2>
            <div className="prose text-gray-300 prose-invert prose-p:text-gray-300 prose-li:text-gray-300 max-w-none">
              <p>
                Hamirpur is well connected by road to major cities including Chandigarh, Delhi, and Shimla. 
                The nearest airports are:
              </p>
              <ul className="grid grid-cols-2 gap-4">
                <li>Dharamshala Airport (80 km)</li>
                <li>Chandigarh International Airport (200 km)</li>
              </ul>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
              <FaCogs className="text-amber-400 mr-3" />
              Department
            </h2>
            <div className="prose text-gray-300 prose-invert prose-p:text-gray-300 prose-li:text-gray-300 max-w-none">
              <p>The Department of Mechanical Engineering offers:</p>
              <ul className="grid grid-cols-2 gap-4">
                <li>B.Tech in Mechanical Engineering</li>
                <li>M.Tech in Design Engineering</li>
                <li>M.Tech in Thermal Engineering</li>
                <li>Ph.D. Program</li>
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
