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
        <div className="relative min-h-screen  py-16">


            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-amber-400 mb-4">Important Dates</h2>
                    <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm overflow-hidden">
                    {dates.map((item, index) => (
                        <div key={index} className="flex justify-between p-4 border-b border-amber-500/20 last:border-b-0">
                            <div className="flex-2 font-medium text-white">{item.event}</div>
                            <div className="flex-1 text-right text-amber-400">{item.date}</div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/20 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-amber-400 mb-4">Note:</h3>
                    <ul className="list-disc pl-6 space-y-3 text-gray-300">
                        <li className="leading-relaxed">All accepted and presented papers will be published in the conference proceeding (Collaboration with journal proceedings is currently in progress).</li>
                        <li className="leading-relaxed">Plagiarism must be strictly avoided, and the similarity index should be less than 20%. Manuscripts exceeding this limit may be rejected at any stage of the conference-during peer review, publication, or scheduling.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ImportantDates;
