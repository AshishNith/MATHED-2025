import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/FlipCard.module.css';
import Dilshad from "/Assets/Dilshad.jpg";

const Committee = () => {
  const members = [
    {
      position: 'Chief Patron',
      name: 'Prof. H. M. Suryawanshi',  
      title: 'Hon. Director, NIT Hamirpur',
      image: 'https://nith.ac.in/uploads/topics/hms16438810105577.jpg',
    },
    {
      position: 'Patron',
      name: 'Dr. Prashant Kumar',
      image: 'https://portfolios.nith.ac.in/uploads/member_details/111.jpg'  
    },
    {
      position: 'Chairman',
      name: 'Dr. Rajesh Kumar Sharma',
      image: 'https://portfolios.nith.ac.in/uploads/member_details/99.jpg'  
    },
    {
      position: 'Organizing Secretary',
      name: 'Dr. Dilshad Ahmad Khan',
      image: Dilshad,
      email: 'dilshad@nith.ac.in',
      phone: '+91-94598-86738'
    },
    {
      position: 'Organizing Secretary',
      name: 'Dr. Laxmikant Yadav',
      image: 'https://portfolios.nith.ac.in/uploads/member_details/337.jpg',
      email: 'laxmikant@nith.ac.in',
      phone: '+91-94598-86739'  
    },
    {
      position: 'Organizing Secretary',
      name: 'Dr. Param Singh',
      image: 'https://portfolios.nith.ac.in/uploads/member_details/181.jpg',
      email: 'psingh@nith.ac.in',
      phone: '+91-7355477464'  
    },
    {
      position: 'Organizing Secretary',
      name: 'Dr. Niharika Gupta',
      image: 'https://portfolios.nith.ac.in/uploads/member_details/414.jpg',
      email: 'niharikagupta@nith.ac.in',
      phone: '+91-9958114561'  
    },
    {
      position: 'Treasurer',
      name: 'Dr. Deepak Sharma',
      image: 'https://portfolios.nith.ac.in/uploads/member_details/186.jpg',
      email: '	dsharma@nith.ac.in',
      phone: '--'  
    }
  ];

  const categories = [
    {
      title: "Leadership",  
    }
  ];

  return (
    <div className="relative min-h-screen py-16 bg-gray-50">
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-amber-600 mb-6">Organizing Committee</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
        </motion.div>

        {/* Leadership Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {members.filter(m => ["Chief Patron", "Patron", "Chairman"].includes(m.position)).map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.flipCard}
            >
              <div className={styles.flipCardInner}>
                <div className={`${styles.flipCardFront} bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200`}>
                  <img src={member.image} alt={member.name} className={styles.memberImage} />
                  <h3 className="text-amber-600 text-sm font-medium mb-1">{member.position}</h3>
                  <h2 className="text-gray-800 text-xl font-semibold">{member.name}</h2>
                  {member.title && <p className="text-gray-600 text-sm mt-1">{member.title}</p>}
                </div>
                <div className={`${styles.flipCardBack} bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-200`}>
                  <h2 className="text-gray-800 text-xl font-semibold mb-2">{member.name}</h2>
                  <h3 className="text-amber-600 text-sm font-medium mb-4">{member.position}</h3>
                  {member.title && (
                    <div className="space-y-3 text-gray-600">
                      <p className="text-sm">
                        <i className="fas fa-user-tie mr-2"></i>
                        {member.title}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Organizing Secretaries Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl text-amber-600 mb-8 font-semibold">Organizing Secretaries</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.filter(m => m.position === 'Organizing Secretary').map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.flipCard}
              >
                <div className={styles.flipCardInner}>
                  <div className={`${styles.flipCardFront} bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200`}>
                    <img src={member.image} alt={member.name} className={styles.memberImage} />
                    <h3 className="text-amber-600 text-sm font-medium mb-1">{member.position}</h3>
                    <h2 className="text-gray-800 font-semibold">{member.name}</h2>
                  </div>
                  <div className={`${styles.flipCardBack} bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-200`}>
                    <h2 className="text-gray-800 font-semibold mb-2">{member.name}</h2>
                    <h3 className="text-amber-600 text-sm font-medium mb-4">{member.position}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="text-sm">
                        <i className="fas fa-envelope mr-2"></i>
                        {member.email}
                      </p>
                      <p className="text-sm">
                        <i className="fas fa-phone mr-2"></i>
                        {member.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Treasurer Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-2xl text-amber-600 mb-8 font-semibold">Treasurer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.filter(m => m.position === 'Treasurer').map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.flipCard}
              >
                <div className={styles.flipCardInner}>
                  <div className={`${styles.flipCardFront} bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200`}>
                    <img src={member.image} alt={member.name} className={styles.memberImage} />
                    <h3 className="text-amber-600 text-sm font-medium mb-1">{member.position}</h3>
                    <h2 className="text-gray-800 font-semibold">{member.name}</h2>
                  </div>
                  <div className={`${styles.flipCardBack} bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-200`}>
                    <h2 className="text-gray-800 font-semibold mb-2">{member.name}</h2>
                    <h3 className="text-amber-600 text-sm font-medium mb-4">{member.position}</h3>
                    <div className="space-y-2 text-gray-600">
                      <p className="text-sm">
                        <i className="fas fa-envelope mr-2"></i>
                        {member.email || 'email@nith.ac.in'}
                      </p>
                      <p className="text-sm">
                        <i className="fas fa-phone mr-2"></i>
                        {member.phone || '+91-XXXXXXXXXX'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 mt-16 text-center"
        >
          <h3 className="text-amber-600 mb-2 font-medium">Organizing Committee Members</h3>
          <p className="text-gray-600">All Faculties and Staff Members of the Mechanical Engineering Department, NIT Hamirpur</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Committee;
