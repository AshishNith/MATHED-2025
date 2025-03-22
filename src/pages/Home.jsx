import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { FaUniversity, FaLightbulb, FaPhone, FaFileUpload, FaCreditCard, FaUsers, FaCalendar } from 'react-icons/fa';
import About from './About';
import Advisory from '../components/Advisory';
import Registration from '../components/Registration';
import { FeaturedImageGallery } from '../components/Gallary';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="hero relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
        <Hero />
      </div>

      <About />
      <FeaturedImageGallery />
      <Advisory />

      <div className="relative z-20 px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
          >
            {/* Organization */}
            <motion.section 
              variants={itemVariants}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <FaUniversity className="text-2xl sm:text-3xl text-amber-300" />
                <h2 className="text-xl sm:text-2xl text-amber-300 font-medium">Organized by</h2>
              </div>
              <div className="space-y-1">
                <p className="text-base sm:text-lg text-gray-300">Department of Mechanical Engineering</p>
                <p className="text-sm sm:text-base text-gray-300">NIT Hamirpur, HP, India</p>
                <a href="https://www.nith.ac.in" className="text-xs sm:text-sm text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">www.nith.ac.in</a>
              </div>
            </motion.section>

            {/* Conference Leadership */}
            <motion.section 
              variants={itemVariants}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <FaUsers className="text-2xl sm:text-3xl text-amber-300" />
                <h2 className="text-xl sm:text-2xl text-amber-300 font-medium">Conference Leadership</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10 hover:from-blue-100/10 hover:to-indigo-100/10 transition-colors shadow-sm">
                  <span className="text-gray-300 text-sm">Chief Patron</span>
                  <p className="font-medium mt-1 text-gray-300">Prof. H. M. Suryawanshi</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10 hover:from-blue-100/10 hover:to-indigo-100/10 transition-colors shadow-sm">
                  <span className="text-gray-300 text-sm">Patron</span>
                  <p className="font-medium mt-1 text-gray-300">Dr. Prashant Kumar</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10 hover:from-blue-100/10 hover:to-indigo-100/10 transition-colors shadow-sm">
                  <span className="text-gray-300 text-sm">Chairman</span>
                  <p className="font-medium mt-1 text-gray-300">Dr. Rajesh Kumar Sharma</p>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10 hover:from-blue-100/10 hover:to-indigo-100/10 transition-colors shadow-sm">
                  <span className="text-gray-300 text-sm">Organizing Secretaries</span>
                  <p className="font-medium mt-1 text-gray-300">Dr. Dilshad Ahmad Khan<br />Dr. Laxmikant Yadav</p>
                </div>
              </div>
            </motion.section>


            {/* Research Themes */}
            <motion.section 
              variants={itemVariants}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <FaLightbulb className="text-2xl sm:text-3xl text-yellow-500" />
                <h2 className="text-xl sm:text-2xl font-medium text-amber-300">Research Themes</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {['Advanced Manufacturing', 'Smart Manufacturing', 'Industry 4.0'].map((theme, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10 hover:from-blue-100/10 hover:to-indigo-100/10 transition-colors text-gray-300">
                    {theme}
                  </div>
                ))}
              </div>
            </motion.section>

                {/* Contact */}
                <motion.section 
              variants={itemVariants}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <FaPhone className="text-2xl sm:text-3xl text-amber-300" />
                <h2 className="text-xl sm:text-2xl font-medium text-amber-300">Contact</h2>
              </div>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <p>
                  <span className="text-gray-300">Email: </span>
                  <a href="mailto:mathed2025@gmail.com" className="text-blue-600 hover:text-blue-800">mathed2025@gmail.com</a>
                </p>
                <p>
                  <span className="text-gray-300">Phone: </span>
                  <span className="text-gray-300">+91-9718409294, +91-7000201281</span>
                </p>
              </div>
            </motion.section>
          </motion.div>

            {/* Call for Papers */}
            <motion.section 
              variants={itemVariants}
              className="backdrop-blur-sm mt-10 bg-white/5 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20 md:col-span-2"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <FaFileUpload className="text-2xl sm:text-3xl text-amber-300" />
                <h2 className="text-xl sm:text-2xl font-medium text-amber-300">Call for Papers</h2>
              </div>
              <p className="text-gray-300 mb-4">
                We invite students, faculty, researchers, scientists, and industry professionals to submit 
                their research abstracts. Submissions are welcome on, but not limited to, the following themes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li>Advanced Manufacturing Processes</li>
                    <li>Sustainable and Green Manufacturing Practices</li>
                    <li>Additive Manufacturing and 3D Printing</li>
                    <li>Robotics and Automation in Manufacturing</li>
                    <li>Industry 4.0 and Smart Manufacturing</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li>Renewable Energy Technologies</li>
                    <li>Refrigeration and HVAC Systems</li>
                    <li>Trigeneration & Polygeneration Systems</li>
                    <li>Advances in Fluid Dynamics and Combustion</li>
                    <li>Heat Transfer and Thermal Management</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                    <li>Product Design and Development</li>
                    <li>Mechanical System Design</li>
                    <li>Structural and Stress Analysis</li>
                    <li>Biomechanical Design and Applications</li>
                    <li>Vibration & Control</li>
                  </ul>
                </div>
              </div>
            </motion.section>

        

             {/* Important Dates */}
             <motion.section 
              variants={itemVariants}
              className="backdrop-blur-sm mt-10 bg-white/5 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20 md:col-span-2"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <FaCalendar className="text-2xl sm:text-3xl text-amber-300" />
                <h2 className="text-xl sm:text-2xl font-medium text-amber-300">Important Dates</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10">
                    <p className="text-sm text-gray-300">Abstract Submission Deadline</p>
                    <p className="text-base font-medium text-amber-300">30/05/2025</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10">
                    <p className="text-sm text-gray-300">Notification of Acceptance of Abstract</p>
                    <p className="text-base font-medium text-amber-300">10/06/2025</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10">
                    <p className="text-sm text-gray-300">Full-Text Paper Submission Deadline</p>
                    <p className="text-base font-medium text-amber-300">10/08/2025</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10">
                    <p className="text-sm text-gray-300">Notification of Acceptance of Paper</p>
                    <p className="text-base font-medium text-amber-300">20/09/2025</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10">
                    <p className="text-sm text-gray-300">Final Paper Submission Deadline</p>
                    <p className="text-base font-medium text-amber-300">20/10/2025</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-50/10 to-indigo-50/10">
                    <p className="text-sm text-gray-300">Last date of Registration</p>
                    <p className="text-base font-medium text-amber-300">20/11/2025</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-br from-amber-500/10 to-red-500/10 rounded-lg">
                <h3 className="text-lg font-medium text-amber-300 mb-3">Important Notes:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                  <li>All accepted and presented papers will be published in the conference proceeding (Collaboration with journal proceedings is currently in progress).</li>
                  <li>Plagiarism must be strictly avoided, and the similarity index should be less than 20%. Manuscripts exceeding this limit may be rejected at any stage of the conference-during peer review, publication, or scheduling.</li>
                </ul>
              </div>
            </motion.section>


          <Registration />
        </div>
      </div>
    </div>
  );
};

export default Home;
