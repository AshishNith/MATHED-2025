import React from 'react';
import { motion } from 'framer-motion';

const ImportantDates = () => {
    const dates = [
        { event: 'Abstract Submission Deadline', date: '15/07/2025' },
        { event: 'Notification of Acceptance of Abstract', date: '31/07/2025' },
        { event: 'Full-Text Paper Submission Deadline', date: '10/08/2025' },
        { event: 'Notification of Acceptance of Paper', date: '20/09/2025' },
        { event: 'Final Paper Submission Deadline', date: '20/10/2025' },
        { event: 'Last date of Registration', date: '20/11/2025' },
    ];

    return (
        <div id='importantDate' className="relative py-20 px-4 bg-gray-50">
            {/* Background with dual gradients */}
            <div className="absolute inset-0 bg-white"></div>
            <div className="absolute inset-0 opacity-30" 
                style={{ 
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,119,6,0.15) 2px, transparent 0)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            <div className="relative container max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl font-bold text-amber-600 mb-6">Important Dates</h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
                </motion.div>

                <div className="grid gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm overflow-hidden shadow-xl hover:from-amber-100 hover:to-amber-200 transition-all duration-300"
                    >
                        {dates.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={index} 
                                className="flex justify-between p-5 border-b border-amber-200 last:border-b-0 hover:bg-amber-100/50 transition-colors"
                            >
                                <div className="flex-1 font-medium text-gray-700">{item.event}</div>
                                <div className="flex-none pl-4 text-amber-600 font-semibold">{item.date}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm shadow-xl hover:from-amber-100 hover:to-amber-200 transition-all duration-300"
                    >
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-amber-600 mb-6">Note:</h3>
                            <ul className="list-disc pl-6 space-y-4 text-gray-700">
                                <li className="leading-relaxed">All accepted and presented papers will be published in the conference proceeding (Collaboration with journal proceedings is currently in progress).</li>
                                <li className="leading-relaxed text-red-600">Plagiarism must be strictly avoided, and the similarity index should be less than 20%. Manuscripts exceeding this limit may be rejected at any stage of the conference-during peer review, publication, or scheduling.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ImportantDates;
