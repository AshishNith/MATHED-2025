import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
// Change the import to use relative path
import brochure from '/Assets/Brochure.pdf'

const Hero = () => {
  // Add download handler function
  const handleDownloadBrochure = () => {
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = brochure;
    link.download = 'MATHED2025_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='Hero' className="relative min-h-screen bg-gradient-to-br from-gray-900/90 to-black/90 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://qph.cf2.quoracdn.net/main-qimg-b228e266db590542dc3d869bea96f976.webp')",
      }}>
      {/* Decorative pattern with increased opacity for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/80">
        <div className="absolute inset-0 opacity-30" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,176,0,0.15) 2px, transparent 0)',
            backgroundSize: '32px 32px'
          }}>
        </div>
      </div>

      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex items-center justify-center">
        <div className="text-center w-full max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-center mt-10  justify-center space-x-2">
              <div className="h-px w-4 sm:w-8 bg-amber-400"></div>
              <span className="text-amber-400 text-sm sm:text-base font-semibold tracking-wider">MATHED 2025</span>
              <div className="h-px w-4 sm:w-8 bg-amber-400"></div>
            </div>

            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold px-2 sm:px-0">
              <span className="text-white block sm:inline">3<sup>rd</sup> International</span>
              <span className="block sm:inline ml-0 sm:ml-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600">
                Conference
              </span>
            </h1>

            <div className="space-y-2 sm:space-y-3 px-2 sm:px-0">
              <p className="text-gray-300 text-base sm:text-xl md:text-4xl max-w-2xl mx-auto">
                on <br className="hidden sm:block" /> 
                <span className="text-amber-400 font-semibold">Advances in Manufacturing, Thermal and Design Engineering</span>
              </p>
{/*               
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto px-2">
                {['Advanced Manufacturing', 'Industry 4.0', 'Smart Materials', 'Thermal Systems', 'Design Innovation', 'Sustainable Engineering'].map((theme) => (
                  <span key={theme} className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    {theme}
                  </span>
                ))}
              </div> */}
            </div>

            <div className="text-gray-400 text-sm sm:text-base space-y-0.5 sm:space-y-1">
              <p>Organized by</p>
              <p className="font-medium  text-gray-300">Department of Mechanical Engineering</p>
              <p>National Institute of Technology Hamirpur</p>
              {/* <p>Hamirpur, Himachal Pradesh, India</p> */}
              <a href="https://www.nith.ac.in" target="_blank" rel="noopener noreferrer" 
                className="text-amber-400 hover:text-amber-300">
                www.nith.ac.in
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
              <Link to="/register" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg font-semibold text-white shadow-lg shadow-amber-500/25"
                >
                  Register Now
                </motion.button>
              </Link>
              <motion.button
                onClick={handleDownloadBrochure}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-amber-500/30 text-amber-400 rounded-lg font-semibold hover:bg-amber-500/10"
              >
                Download brochure 
              </motion.button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-amber-500/20">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-amber-400 text-xs sm:text-sm font-medium">Conference Duration</p>
                    <h3 className="text-white text-sm sm:text-lg font-semibold">26th - 28th December 2025</h3>
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-amber-500/20">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-amber-400 text-xs sm:text-sm font-medium">Location</p>
                    <h3 
                      onClick={() => window.open('https://www.google.com/maps/place/National+Institute+of+Technology,+Hamirpur/@31.7087403,76.5225442,126m/data=!3m1!1e3!4m6!3m5!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.7084291!4d76.5273526!16zL20vMGNybnJ4?hl=es&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D', '_blank')}
                      className="text-white text-sm sm:text-lg font-semibold cursor-pointer hover:text-amber-400 transition-colors"
                    >
                      NIT Hamirpur, India
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm sm:text-lg font-semibold">Hybrid Mode Conference</span>
                  <span className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-amber-500/20 text-amber-400">
                    Online & Offline
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero