import React from 'react';

const ImportantDates = () => {
    const dates = [
        { event: 'Abstract Submission Deadline', date: '30/05/2025' },
        { event: 'Notification of Acceptance of Abstract', date: '10/06/2025' },
        { event: 'Full-Text Paper Submission Deadline', date: '10/08/2025' },
        { event: 'Notification of Acceptance of Paper', date: '20/09/2025' },
        { event: 'Final Paper Submission Deadline', date: '20/10/2025' },
        { event: 'Last date of Registration', date: '20/11/2025' },
    ];

    return (
        <div id='importantDate' className="relative py-20 px-4">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-amber-400 mb-4">Important Dates</h2>
                    <div className="w-32 h-1 bg-amber-400 mx-auto"></div>
                </div>

                <div className="grid gap-8">
                    <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm overflow-hidden shadow-xl">
                        {dates.map((item, index) => (
                            <div key={index} className="flex justify-between p-5 border-b border-amber-500/20 last:border-b-0 hover:bg-amber-500/5 transition-colors">
                                <div className="flex-1 font-medium text-white">{item.event}</div>
                                <div className="flex-none pl-4 text-amber-400 font-semibold">{item.date}</div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm shadow-xl">
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-amber-400 mb-6">Note:</h3>
                            <ul className="list-disc pl-6 space-y-4 text-gray-300">
                                <li className="leading-relaxed">All accepted and presented papers will be published in the conference proceeding (Collaboration with journal proceedings is currently in progress).</li>
                                <li className="leading-relaxed">Plagiarism must be strictly avoided, and the similarity index should be less than 20%. Manuscripts exceeding this limit may be rejected at any stage of the conference-during peer review, publication, or scheduling.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImportantDates;
