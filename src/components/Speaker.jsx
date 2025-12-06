import React from 'react';
import { motion } from 'framer-motion';
import anandParey from "../../public/Assets/Speakers/AnandParey.png"
import ProfSudhakarSubudhi from "../../public/Assets/Speakers/ProfSudhakarSubudhi.png"
const MRahman = "https://profmrahman.com/wp-content/uploads/2014/08/index.jpg"
const SalmanAbuMansor = "https://directory.usm.my/photo.php?direktoristaf/photo/mesalman";
import RKBhardwaj from "../../public/Assets/Speakers/RKBhardwaj.jpeg"

const speakers = [
  
  {
    id: 3,
    name: 'Prof. Dr. Mustafizur Rahman',
    title: 'Professor (Retired)',
    university: 'National University of Singapore, Dept. of Mechanical Engineering',
    image: MRahman,
    websiteLink: "https://profmrahman.com/",
    info: "Pioneer in micro/nano machining research, first to propose compound machining processes combining conventional and non-conventional methods. Established the groundbreaking 'extrusion-like mechanism zone' concept and authored the seminal book 'Advanced Machining Processes'. Director of Mikrotools Pte Ltd."
  },
  {
    id: 1,
    name: 'Dr. Anand Parey',
    title: 'Professor (HAG)',
    university: 'IIT Indore',
    image: anandParey,
    websiteLink:"https://people.iiti.ac.in/~meiiti/index.php/2024/09/30/prof-anand-parey/",
    info:"Distinguished expert in mechanical engineering with significant contributions to the field of vibration analysis and machine dynamics."
  },
  {
    id: 2,
    name: 'Dr. Sudhakar Subudhi',
    title: 'Professor',
    university: 'IIT Roorkee',
    image: ProfSudhakarSubudhi,
    websiteLink:"https://iitr.ac.in/Departments/Mechanical%20and%20Industrial%20Engineering%20Department/People/Faculty/100594.html",
    info:"Natural and Forced convection, Natural Ventilation, Unconventional energy systems, Nanofluids, Thermoregulatory mechanism of human body"
  },
  {
    id: 4,
    name: 'Dr. Bansidhar Gouda',
    title: 'Chief Manager (Design), Aero Engine Research and Design Center (AERDC)',
    university: 'Hindustan Aeronautics Limited (HAL), Bengaluru',
    image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=pDhqaf8AAAAJ&citpid=1',
    websiteLink: '',
    info: "Over 18 years at HAL, Dr. Gouda specializes in aero engine test facility design, acoustics, bearings, and noise control. He holds a PhD from IIT Delhi and is a Life Member of the Acoustic Society of India."
  },
  {
    id: 5,
    name: 'Dr. Rakesh Kumar Bhardwaj',
    title: 'Scientist: G & Group Head ( MD&EG)',
    university: 'DRDO',
    image: RKBhardwaj,
    websiteLink:"https://www.linkedin.com/in/dr-rakesh-bhardwaj-44b1a017/?originalSubdomain=in",
    info:"Micro and nano fabrication of electromechanical systems for defence applications"
  },


];

const Speaker = () => {
  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-white via-amber-50/30 to-white">
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,119,6,0.15) 2px, transparent 0)', backgroundSize: '32px 32px'}}></div>
      
      <div className="relative container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{opacity: 0, y: -20}} 
          animate={{opacity: 1, y: 0}} 
          transition={{duration: 0.8}} 
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent mb-4">
            Keynote Speakers
          </h2>
          <p className="text-gray-600 text-lg mb-6">Distinguished experts sharing their insights</p>
          <div className="w-40 h-1.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 mx-auto rounded-full shadow-lg shadow-amber-500/30"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {speakers.map((speaker, index) => (
            <motion.div 
              key={speaker.id}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{duration: 0.6, delay: index * 0.1}}
              whileHover={{ y: -8 }}
              className="w-full max-w-sm group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-100 hover:border-amber-300">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-amber-600/10 z-10"></div>
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-20 shadow-lg">
                    Keynote
                  </div>
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Container */}
                <div className="p-7 bg-gradient-to-br from-white to-amber-50/50">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {speaker.name}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mb-3"></div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-base font-semibold text-amber-700">{speaker.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{speaker.university}</p>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed mb-5 line-clamp-4">
                    {speaker.info}
                  </p>

                  {speaker.websiteLink && (
                    <a 
                      href={speaker.websiteLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-lg font-medium text-sm hover:from-amber-700 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg group/button"
                    >
                      View Profile
                      <svg className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Speaker;
