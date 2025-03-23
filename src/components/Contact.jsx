import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="Contact" className="relative min-h-screen  bg-center bg-no-repeat py-16">
      {/* Decorative pattern */}
      <div className="absolute inset-0 ">
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
          <h1 className="text-4xl font-bold text-amber-400 mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Address Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
              <FaMapMarkerAlt className="mr-3" />
              Address for Correspondence
            </h2>
            <div className="text-gray-300 space-y-2">
              <p className="font-medium">Organizing Secretary MATHED 2025</p>
              <p>Department of Mechanical Engineering</p>
              <p>National Institute of Technology Hamirpur</p>
              <p>Hamirpur-177005, Himachal Pradesh, India</p>
            </div>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm"
          >
            <div className="space-y-6">
              {/* Email */}
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-4 flex items-center">
                  <FaEnvelope className="mr-3" />
                  Email
                </h3>
                <a href="mailto:mathed2025@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors">
                  mathed2025@gmail.com
                </a>
              </div>

              {/* Contact Persons */}
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-4 flex items-center">
                  <FaPhone className="mr-3" />
                  Contact Persons
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <p className="font-medium">Dr. Dilshad Ahmad Khan</p>
                    <a href="tel:+919718409294" className="hover:text-amber-400 transition-colors">
                      +91-9718409294
                    </a>
                  </div>
                  <div>
                    <p className="font-medium">Dr. Laxmikant Yadav</p>
                    <a href="tel:+917000201281" className="hover:text-amber-400 transition-colors">
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
          className="text-center mt-8 text-gray-300"
        >
          <p>For Registration & other details, please visit our website</p>
          <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
            XXXXX.ac.in
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
