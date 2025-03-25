import React from 'react'
import { motion } from 'framer-motion';

const KnowMoreAboutUs = () => {
  return (
    <div className="relative py-16 bg-gray-50">
      {/* Background with dual gradients */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,119,6,0.15) 2px, transparent 0)',
          backgroundSize: '24px 24px'
        }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-amber-600 mb-4 text-center"
          >
            Welcome to MATHED 2025
          </motion.h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 mb-8 text-center text-lg max-w-3xl mx-auto"
          >
            Join us for an enriching academic experience where leading researchers and scholars come together to share knowledge and insights in the fields of Manufacturing, Thermal and Design Engineering.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/about'} 
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg font-semibold text-white shadow-lg shadow-amber-500/25 hover:from-amber-700 hover:to-amber-600 transition-all duration-300"
            >
              Know More About Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default KnowMoreAboutUs