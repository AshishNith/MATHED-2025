import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div id="home" className="relative h-full w-full flex h-screen items-center bg-cover bg-center bg-no-repeat px-15 py-20" 
           style={{ 
             backgroundImage: 'url("https://qph.cf2.quoracdn.net/main-qimg-b228e266db590542dc3d869bea96f976.webp")',
             backgroundAttachment: 'fixed',
             backgroundSize: 'cover'
           }}>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 via-black/50 to-transparent"></div>
        
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-200 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col lg:flex-row gap-16 items-center"
          >
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex gap-2 items-center justify-center lg:justify-start"
              >
                <span className="h-[1px] w-10 bg-white"></span>
                <span className="text-white font-bold tracking-wider">MATHED 2025</span>
                <span className="h-[1px] w-10 bg-white"></span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                3<sup>rd</sup> International
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  Conference
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl">
                on Advances in Manufacturing, Thermal and Design Engineering
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300"
              >
                Register Now
              </motion.button>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-amber-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500/20 rounded-lg">
                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="text-sm text-amber-300">Date</div>
                    <div className="text-lg font-semibold">26th - 28th December 2025</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-yellow-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500/20 rounded-lg">
                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="text-sm text-amber-300">Location</div>
                    <div className="text-lg font-semibold">NIT Hamirpur, India</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="md:col-span-2 p-6 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 backdrop-blur-md rounded-xl border border-amber-500/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl text-white font-semibold">Hybrid Mode Conference</span>
                  <span className="px-4 py-1 bg-white/20 rounded-full text-sm text-white">Online & Offline</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero