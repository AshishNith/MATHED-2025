import React from 'react';
import { motion } from 'framer-motion';

const Committee = () => {
  const members = [
    {
      position: 'Chief Patron',
      name: 'Prof. H. M. Suryawanshi',
      title: 'Director, NIT Hamirpur',
      image: 'https://lh6.googleusercontent.com/0hSisadVYALjwFnd2bE-1EMi6mWDF4Oki3syPjGmpJC3soO9Y2KBNykWshqSWKZDVydL-f24LpigLtZ12r-DI35DHN1icgXK5TnjZr6DFya9P9M7peQl-ffGLQWu7HPpRA=w1280' // Add actual image path
    },
    {
      position: 'Patron',
      name: 'Dr. Prashant Kumar',
      image: 'https://lh5.googleusercontent.com/lZQRkcMubtV7wpK8bAB48FKyEzDf776rMAIuUa_tRiLRzE_FgOvaY1C-VJB7JFmDUulzmZI3Aiy0m0XZhWD2Fjse1jhfQgupobLLCvoWehHog9BD8Vn9Bej_EWMRbHWc2g=w1280' // Add actual image path
    },
    {
      position: 'Chairman',
      name: 'Dr. Rajesh Kumar Sharma',
      image: '/images/members/chairman.jpg' // Add actual image path
    },
    {
      position: 'Organizing Secretary',
      name: 'Dr. Dilshad Ahmad Khan',
      image: '/images/members/organizing_secretary1.jpg' // Add actual image path
    },
    {
      position: 'Organizing Secretary',
      name: 'Dr. Laxmikant Yadav',
      image: '/images/members/organizing_secretary2.jpg' // Add actual image path
    },
    {
      position: 'Treasurer',
      name: 'Dr. Deepak Sharma',
      image: '/images/members/treasurer.jpg' // Add actual image path
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900/90 to-black/90 bg-cover bg-center bg-no-repeat py-16">
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
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-amber-400 text-center mb-4"
        >
          Organizing Committee
        </motion.h1>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm"
              key={index}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-amber-400/30">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/128?text=Member';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-amber-500/20 flex items-center justify-center">
                      <span className="text-3xl text-amber-400">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-amber-400 mb-2 font-medium">{member.position}</h3>
                <h2 className="text-white text-xl mb-2">{member.name}</h2>
                {member.title && <p className="text-gray-400">{member.title}</p>}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm mt-8"
        >
          <h3 className="text-amber-400 mb-2 font-medium">Organizing Committee Members</h3>
          <p className="text-gray-300">All Faculties and Staff Members of the Mechanical Engineering Department, NIT Hamirpur</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Committee;
