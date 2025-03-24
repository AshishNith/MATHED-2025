import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaIndustry, FaSun, FaCog } from 'react-icons/fa';

const CallForPaper = () => {
  const themes = [
    {
      icon: <FaIndustry />,
      title: "Manufacturing",
      topics: [
        "Advanced Manufacturing Processes",
        "Sustainable and Green Manufacturing Practices",
        "Additive Manufacturing and 3D Printing",
        "Robotics and Automation in Manufacturing",
        "Industry 4.0 and Smart Manufacturing"
      ]
    },
    {
      icon: <FaSun />,
      title: "Thermal Engineering",
      topics: [
        "Renewable Energy Technologies",
        "Refrigeration and HVAC Systems",
        "Trigeneration & Polygeneration Systems",
        "Advances in Fluid Dynamics and Combustion",
        "Heat Transfer and Thermal Management"
      ]
    },
    {
      icon: <FaCog />,
      title: "Design Engineering",
      topics: [
        "Product Design and Development",
        "Mechanical System Design",
        "Structural and Stress Analysis",
        "Biomechanical Design and Applications",
        "Vibration & Control"
      ]
    }
  ];

  return (
    <div id="CallForPaper" className="relative min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,176,0,0.15) 2px, transparent 0)',
          backgroundSize: '32px 32px'
        }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-amber-400 mb-4">Call for Papers</h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We invite students, faculty, researchers, scientists, and industry professionals to submit their research abstracts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm"
            >
              <div className="text-amber-400 text-3xl mb-4">{theme.icon}</div>
              <h3 className="text-xl font-semibold text-amber-400 mb-4">{theme.title}</h3>
              <ul className="space-y-2">
                {theme.topics.map((topic, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (i * 0.1) }}
                    className="text-gray-300 flex items-start"
                  >
                    <span className="text-amber-400 mr-2">•</span>
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
            <FaBook className="mr-3" />
            Submission Guidelines
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-300">
              <h4 className="text-lg font-semibold text-amber-400">Format Requirements</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Abstract length: 250-300 words</li>
                <li>File format: PDF</li>
                <li>Font: Times New Roman, 12pt</li>
                <li>Single spacing</li>
              </ul>
            </div>
            <div className="space-y-4 text-gray-300">
              <h4 className="text-lg font-semibold text-amber-400">Important Dates</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Abstract Submission: September 30, 2025</li>
                <li>Acceptance Notification: October 15, 2025</li>
                <li>Final Paper Submission: November 30, 2025</li>
                <li>Conference Dates: December 26-28, 2025</li>
              </ul>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg font-semibold text-white shadow-lg shadow-amber-500/25"
          >
            Submit Abstract
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CallForPaper;
