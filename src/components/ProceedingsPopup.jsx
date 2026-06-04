import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProceedingsPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage to see if user has already dismissed this popup
    const isDismissed = localStorage.getItem('mathed_proceedings_popup_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // 1.5 second delay for a smooth entry

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDontShowAgain = () => {
    localStorage.setItem('mathed_proceedings_popup_dismissed', 'true');
    setIsVisible(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/MATHED -2025 ISBN Proceeding.pdf';
    link.download = 'MATHED -2025 ISBN Proceeding.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Popup content container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="relative max-w-lg w-full overflow-hidden bg-gradient-to-br from-gray-950 to-slate-900 rounded-3xl border border-amber-500/30 shadow-2xl shadow-amber-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Glow Effect */}
            <div className="absolute top-0 left-1/4 w-1/2 h-12 bg-amber-500/15 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.15) 1px, transparent 0)',
                backgroundSize: '20px 20px'
              }}
            />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/60 hover:bg-amber-500/20 text-gray-400 hover:text-amber-400 border border-slate-700/50 transition-all duration-300"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
              {/* Gold Medal/Book Icon Header */}
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5 shadow-inner">
                <svg className="w-9 h-9 text-amber-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              {/* Title & Tagline */}
              <span className="text-amber-500 text-xs sm:text-sm font-semibold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-3">
                MATHED 2025 Proceedings
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
                ISBN Proceedings <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Published!</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-sm">
                The official ISBN conference proceedings for the 3rd International Conference on Advances in Manufacturing, Thermal and Design Engineering are now available.
              </p>

              {/* ISBN Card Info */}
              <div className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-4 mb-6 flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <img
                    src="https://isbn.gov.in/assets/images/isbn.png"
                    alt="ISBN Logo"
                    className="h-6 w-auto object-contain opacity-80"
                  />
                  <span className="text-slate-400 text-xs font-semibold">Official Registration</span>
                </div>
                <div className="text-amber-400 font-mono text-sm tracking-wider font-semibold">
                  ISBN: 978-93-5592-487-2
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  Published selection of peer-reviewed research papers
                </div>
              </div>

              {/* Download CTA Button */}
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg shadow-amber-500/20 cursor-pointer transition-all duration-300"
              >
                <svg className="w-6 h-6 stroke-slate-950" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Proceedings (26 MB)
              </motion.button>

              {/* Action Links & Dont Show Again */}
              <div className="flex justify-between items-center w-full mt-6 text-xs text-gray-500 border-t border-slate-800/80 pt-4">
                <button
                  onClick={handleDontShowAgain}
                  className="hover:text-amber-500 transition-colors cursor-pointer"
                >
                  Don't show this again
                </button>
                <button
                  onClick={handleClose}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Close & Explore Site
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProceedingsPopup;
