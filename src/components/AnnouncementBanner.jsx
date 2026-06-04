import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner only if the user hasn't dismissed it in the current session
    // And add a slight delay so it doesn't clash with the main popup
    const isDismissed = sessionStorage.getItem('mathed_banner_dismissed');
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000); // Show 3 seconds after load (after popup if it appears)

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('mathed_banner_dismissed', 'true');
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
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-40 max-w-sm w-[calc(100vw-3rem)] bg-gradient-to-br from-gray-950 to-slate-900 text-white rounded-2xl border border-amber-500/30 shadow-2xl shadow-amber-500/10 p-5 font-sans overflow-hidden"
        >
          {/* Ambient Gold glow inside the card */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 blur-2xl rounded-full pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1.5 rounded-lg text-gray-500 hover:text-amber-400 hover:bg-amber-500/10 transition-all duration-300 cursor-pointer"
            aria-label="Dismiss banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col gap-3">
            {/* Header / Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 text-xxs font-bold text-amber-500 uppercase tracking-widest">
                Publication
              </span>
              <span className="text-[10px] text-gray-500 font-medium">ISBN Published</span>
            </div>

            {/* Content */}
            <div>
              <h4 className="text-sm font-bold text-white mb-1">
                Conference Proceedings Available
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed">
                MATHED-2025 official proceedings (ISBN: 978-93-5592-487-2) are ready for download.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-1">
              <button
                onClick={handleDownload}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 text-xs font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer"
              >
                <span>Download PDF (26MB)</span>
                <svg className="w-3.5 h-3.5 stroke-slate-950" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
              
              <button
                onClick={handleDismiss}
                className="px-3 py-2 bg-slate-900 border border-slate-800 hover:border-amber-500/30 text-gray-400 hover:text-amber-400 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Dismiss
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBanner;
