import React from 'react';
import { motion } from 'framer-motion';

const speakers = [
  { id: 1, placeholder: true },
  { id: 2, placeholder: true },
  { id: 3, placeholder: true }
];

const Speaker = () => {
  return (
    <section className="relative min-h-screen py-16">
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,119,6,0.15) 2px, transparent 0)', backgroundSize: '24px 24px'}}></div>
      <div className="relative container mx-auto px-4 max-w-7xl">
        <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-600 mb-6">Keynote Speakers</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative">
          {speakers.map((_, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.2}}
              className="rounded-xl overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm shadow-lg"
            >
              <div className="w-full h-[300px] bg-gradient-to-br from-amber-200 to-amber-100"></div>
              <div className="p-6">
                <div className="h-6 w-2/3 bg-amber-200/50 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-amber-100/50 rounded mb-1"></div>
                <div className="h-4 w-1/3 bg-amber-100/50 rounded"></div>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{delay: 0.5}}
            className="absolute inset-0 backdrop-blur-sm bg-white/30 rounded-xl flex items-center justify-center"
          >
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-amber-50/90 to-amber-100/90 border border-amber-200 shadow-xl">
              <h3 className="text-3xl font-bold text-amber-600 mb-4">Coming Soon!</h3>
              <p className="text-gray-600">Our distinguished keynote speakers will be revealed shortly. Stay tuned for updates!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
