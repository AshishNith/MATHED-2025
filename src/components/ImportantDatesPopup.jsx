import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImportantDatesPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    const dates = [
        { 
            event: 'Abstract Submission Deadline',
            date: '15/08/2025',
            note: 'Authors may directly submit their full-length papers until 15 October 2025'
        },
        { event: 'Notification of Acceptance of Abstract', date: '31/08/2025' },
        { event: 'Full-length Paper (Manuscript) Submission Deadline', date: '15/10/2025' },
        { event: 'Notification of Acceptance of full-length paper (Manuscript)', date: '10/11/2025' },
        { event: 'Last date of Registration & Final Paper Submission Deadline', date: '10/12/2025' },
    ];

    // Helper to check if date is expired
    const isExpired = (dateStr) => {
        const [day, month, year] = dateStr.split('/').map(Number);
        const dateObj = new Date(year, month - 1, day);
        const today = new Date();
        today.setHours(0,0,0,0);
        return dateObj < today;
    };

    // Show popup on component mount (page load/reload)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000); // Show after 1 second for better UX

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsVisible(false);
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
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={closePopup}
                    />
                    
                    {/* Popup content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative max-w-2xl w-full max-h-[80vh] overflow-y-auto bg-gradient-to-br from-gray-900/95 to-black/95 rounded-2xl border border-amber-500/30 backdrop-blur-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Background pattern matching website theme */}
                        <div className="absolute inset-0 opacity-20 rounded-2xl" 
                            style={{ 
                                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,176,0,0.15) 2px, transparent 0)',
                                backgroundSize: '24px 24px'
                            }}>
                        </div>
                        
                        {/* Close button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 hover:text-amber-300 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="relative p-8">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="flex items-center justify-center space-x-2 mb-4">
                                    <div className="h-px w-8 bg-amber-400"></div>
                                    <span className="text-amber-400 text-sm font-semibold tracking-wider">MATHED 2025</span>
                                    <div className="h-px w-8 bg-amber-400"></div>
                                </div>
                                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mb-2">
                                    Important Dates
                                </h2>
                                <p className="text-gray-300 text-sm">
                                    Stay updated with conference deadlines
                                </p>
                            </div>

                            {/* Dates list */}
                            <div className="space-y-4">
                                {dates.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm"
                                    >
                                        <div className="flex justify-between items-start gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-white font-medium text-sm mb-1">
                                                    {item.event}
                                                </h3>
                                                {item.note && (
                                                    <p className="text-amber-400 text-xs font-medium mt-2 px-2 py-1 rounded bg-amber-500/20">
                                                        {item.note}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex-shrink-0">
                                                {isExpired(item.date) ? (
                                                    <div className="text-right">
                                                        <p className="text-red-400 line-through text-sm font-semibold">
                                                            {item.date}
                                                        </p>
                                                        <span className="text-red-400 text-xs">(Closed)</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-amber-400 text-sm font-semibold bg-amber-500/20 px-3 py-1 rounded-full">
                                                        {item.date}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Conference info */}
                            <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-amber-500/5 to-yellow-500/5 border border-amber-500/20">
                                <div className="text-center">
                                    <p className="text-amber-400 text-sm font-medium mb-2">Conference Date</p>
                                    <p className="text-white text-lg font-semibold">26th - 28th December 2025</p>
                                    <p className="text-gray-300 text-sm mt-1">NIT Hamirpur, India</p>
                                </div>
                            </div>

                            
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ImportantDatesPopup;