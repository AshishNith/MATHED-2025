import React from 'react';
import { motion } from 'framer-motion';
import anandParey from "../../public/Assets/Speakers/AnandParey.png"

const speakers = [
  {
    id: 1,
    name: 'Dr. Anand Parey',
    title: 'Professor (HAG)',
    university: 'IIT Indore',
    image: anandParey,
  },
  // {
  //   id: 2,
  //   name: 'Dr. Michael Chang',
  //   title: 'Director of Educational Research',
  //   university: 'MIT',
  //   image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300'
  // },
  // {
  //   id: 3,
  //   name: 'Prof. Emma Williams',
  //   title: 'Head of Mathematics Department',
  //   university: 'Oxford University',
  //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300'
  // }
];

const Speaker = () => {
  return (
    <section className="relative min-h-screen py-16">
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,119,6,0.15) 2px, transparent 0)', backgroundSize: '24px 24px'}}></div>
      <div className="relative container mx-auto px-4 max-w-7xl">
        <motion.div initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amber-600 mb-6">Keynote Speaker</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="flex justify-center items-center">
          {speakers.map((speaker) => (
            <motion.div 
              key={speaker.id}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              className="flex flex-col md:flex-row max-w-4xl bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="md:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 mix-blend-overlay z-10"></div>
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-[400px] md:h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{opacity: 0, x: 20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: 0.3}}
                >
                  <h3 className="text-3xl font-bold text-amber-800 mb-4">{speaker.name}</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mb-6"></div>
                  <p className="text-xl text-amber-700 mb-3">{speaker.title}</p>
                  <p className="text-lg text-amber-600">{speaker.university}</p>
                  <p className="mt-6 text-amber-700/80 leading-relaxed">
                    Distinguished expert in mechanical engineering with significant contributions to the field of vibration analysis and machine dynamics.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaker;
