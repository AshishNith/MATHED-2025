import React from 'react';
import { motion } from 'framer-motion';
import anandParey from "../../public/Assets/Speakers/AnandParey.png"
import ProfSudhakarSubudhi from "../../public/Assets/Speakers/ProfSudhakarSubudhi.png"
const MRahman = "https://profmrahman.com/wp-content/uploads/2014/08/index.jpg"
const SalmanAbuMansor = "https://directory.usm.my/photo.php?direktoristaf/photo/mesalman";

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
  // {
  //   id: 4,
  //   name: 'Dr. Mohd Salman Abu Mansor',
  //   title: 'Associate Professor',
  //   university: 'School of Mechanical Engineering, USM',
  //   image: SalmanAbuMansor,
  //   websiteLink:"https://experts.usm.my/cv_path/MGQzMmQwYjJiZWYwZWQyZjY3NGY1ZWVmN2Q1NmI4ODg3MWMxZWZmYzY0NWI1MTZhNDBmMzc1YzZiM2Y0MTM5MTY1NDM2NDJmYzYxMDY4YTY1Y2ExODNmMTg0ZmQ1NWY0Y2ZmZGYyMTJmZTlmM2YyNmNjYjI3OTUyYzg1NmJiNmRYY2lQcHE4VHRJK1dTaHhFZ1JFN3p5N29RLzkyOGhoSm1lWW5VV3JFTmVFPQ==/1",
  //   info:"His research interests include Computer Aided Design/Computer Aided Manufacturing (CAD/CAM), Computer Aided Process Planning (CAPP), Reverse Engineering (RE), Product Design & Development (PDD) and Advanced Manufacturing Technology & Systems Management (AMTSM). Personal Website: http://productdesign.eng.usm.my"
  // },


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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {speakers.map((speaker) => (
            <motion.div 
              key={speaker.id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{duration: 0.5}}
              className="w-full max-w-sm bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 mix-blend-overlay z-10"></div>
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-contain object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-amber-800 mb-2">{speaker.name}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mb-4"></div>
                <p className="text-lg text-amber-700 mb-1">{speaker.title}</p>
                <p className="text-md text-amber-600">{speaker.university}</p>
                <p className="mt-4 text-amber-700/80 leading-relaxed text-sm">
                  {speaker.info}
                  </p>
                {speaker.websiteLink && (
                  <a 
                    href={speaker.websiteLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-amber-700 hover:text-amber-900 text-sm underline"
                  >
                    View Profile
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Speaker;
