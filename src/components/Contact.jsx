import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="Contact" className="relative min-h-screen bg-gray-50 py-16">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,119,6,0.15) 2px, transparent 0)',
          backgroundSize: '24px 24px'
        }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-amber-600 mb-6">Contact Us</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Address Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm hover:from-amber-100 hover:to-amber-200 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-amber-600 mb-8 flex items-center">
              <FaMapMarkerAlt className="mr-3 text-xl" />
              Address for Correspondence
            </h2>
            <div className="text-gray-600 space-y-4 flex-grow">
              <p className="font-medium text-lg text-amber-600">Organizing Secretary MATHED 2025</p>
              <div className="space-y-2 pl-1 border-l-2 border-amber-500/30 ml-2">
                <p>Department of Mechanical Engineering</p>
                <p>National Institute of Technology Hamirpur</p>
                <p>Hamirpur-177005, Himachal Pradesh, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm hover:from-amber-100 hover:to-amber-200 transition-all duration-300"
          >
            <div className="space-y-8 flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-amber-600 mb-4 flex items-center">
                  <FaEnvelope className="mr-3 text-lg" />
                  Email
                </h3>
                <a href="mailto:mathed2025@gmail.com" 
                   className="text-gray-600 hover:text-amber-600 transition-colors pl-1 border-l-2 border-amber-300/50 ml-2">
                  mathed2025@gmail.com
                </a>
              </div>

              {/* Contact Persons */}
              <div>
                <h3 className="text-xl font-semibold text-amber-600 mb-4 flex items-center">
                  <FaPhone className="mr-3 text-lg" />
                  Contact Persons
                </h3>
                <div className="space-y-4 pl-1 border-l-2 border-amber-500/30 ml-2">
                  <div className="space-y-1">
                    <p className="font-medium text-amber-300">Dr. Dilshad Ahmad Khan</p>
                    <a href="tel:+919718409294" className="text-gray-600 hover:text-amber-600 transition-colors block">
                      +91-9718409294
                    </a>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-amber-300">Dr. Laxmikant Yadav</p>
                    <a href="tel:+917000201281" className="text-gray-600 hover:text-amber-600 transition-colors block">
                      +91-7000201281
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Registration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-8 text-gray-600"
        >
          <p>For Registration & other details, please visit our website</p>
          <a href="#" className="text-amber-600 hover:text-amber-500 transition-colors font-semibold">
            XXXXX.ac.in
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
