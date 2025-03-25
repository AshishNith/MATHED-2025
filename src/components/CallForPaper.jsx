import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaIndustry, FaSun, FaCog } from 'react-icons/fa';

const CallForPaper = () => {
  const themes = [
    {
      icon: <FaIndustry />,
      title: "Manufacturing",
      topics: [
        "Advanced Manufacturing",
        "Sustainable and Green Manufacturing Practices",
        "Additive Manufacturing",
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
    <div id="CallForPaper" className="relative min-h-screen py-16 bg-gray-50">
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
          <h1 className="text-5xl font-bold text-amber-600 mb-6">Call for Papers</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We invite students, faculty, researchers, scientists, and industry professionals to submit their research abstracts.
            The conference welcomes submissions across all areas of mechanical engineering, not limited to the themes listed below.
          </p>
        </motion.div>

        {/* Theme Cards in Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm hover:from-amber-100 hover:to-amber-200 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-amber-600 text-3xl p-2 bg-amber-100 rounded-lg">
                  {theme.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-600 ml-3">{theme.title}</h3>
              </div>
              <ul className="space-y-2">
                {theme.topics.map((topic, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (i * 0.1) }}
                    className="text-gray-600 flex items-center space-x-2 hover:text-amber-600 transition-colors text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    <span>{topic}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Guidelines Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="md:col-span-2 p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-amber-600 mb-6 flex items-center">
              <FaBook className="mr-3" />
              Submission Guidelines
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-gray-600">
                <h4 className="text-lg font-semibold text-amber-600">Format Requirements</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Abstract length: 250-300 words</li>
                  <li>File format: PDF</li>
                  <li>Font: Times New Roman, 12pt</li>
                  <li>Single spacing</li>
                </ul>
              </div>
              <div className="space-y-4 text-gray-600">
                <h4 className="text-lg font-semibold text-amber-600">Important Dates</h4>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Abstract Submission: May 30, 2025</li>
                  <li>Abstract Acceptance: June 10, 2025</li>
                  <li>Full Paper Submission: August 10, 2025</li>
                  <li>Paper Acceptance: September 20, 2025</li>
                  <li>Final Paper Submission: October 20, 2025</li>
                  <li>Last Date of Registration: November 20, 2025</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg font-semibold text-white shadow-lg shadow-amber-500/25 text-lg"
            >
              Submit Abstract
            </motion.button>
            <p className="text-gray-500 mt-4 text-center text-sm">
              Submit your abstract before the deadline to participate in the conference
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallForPaper;
