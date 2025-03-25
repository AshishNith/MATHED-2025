import React, { useState } from 'react';

const Advisory = () => {
  const [expandNational, setExpandNational] = useState(false);
  const [expandInternational, setExpandInternational] = useState(false);

  const nationalCommittee = [
    { "name": "Prof. V.K. Jain", "affiliation": "IIT Kanpur (Rtd)" },
    { "name": "Prof. Sunil Jha", "affiliation": "IIT Delhi" },
    { "name": "Prof. J. Ram Kumar", "affiliation": "IIT Kanpur" },
    { "name": "Prof. Sudarsan Ghosh", "affiliation": "IIT Delhi" },
    { "name": "Prof. Sarit Kumar Das", "affiliation": "IIT Madras" },
    { "name": "Prof. Andallib Tariq", "affiliation": "IIT Roorkee" },
    { "name": "Prof. Rajiv Tiwari", "affiliation": "IIT Guwahati" },
    { "name": "Prof. Raj K. Pandey", "affiliation": "IIT Delhi" },
    { "name": "Prof. M.F. Wan", "affiliation": "NIT Srinagar" },
    { "name": "Prof. S. Aravindan", "affiliation": "IIT Delhi" },
    { "name": "Prof. Naveen Kumar", "affiliation": "IIT Ropar" },
    { "name": "Prof. Rajiv Kumar", "affiliation": "IIT Mandi" },
    { "name": "Prof. Z. K. Yusufzai", "affiliation": "IIT-BHU" },
    { "name": "Dr. Prabhakaran RT", "affiliation": "IIT Jammu" },
    { "name": "Prof. S. Tangellapalli", "affiliation": "NIT Jalandhar" },
    { "name": "Prof. Faisal Hasan", "affiliation": "ZHCET, AMU" },
    { "name": "Dr. Pawan Sharma", "affiliation": "IIT-BHU" },
    { "name": "Prof. Atul Dhar", "affiliation": "IIT Mandi" },
    { "name": "Dr. Dinesh Setti", "affiliation": "IIT Palakkad" },
    { "name": "Dr. Z. Alam", "affiliation": "IIT (ISM) Dhanbad" },
    { "name": "Dr. Ajay M. Sidpara", "affiliation": "IIT Kharagpur" },
    { "name": "Dr. M. Srivastava", "affiliation": "Scientist C, DST" },
    { "name": "Prof. Nadeem Hasan", "affiliation": "ZHCET, AMU" },
    { "name": "Prof. Arshad Noor Siddique", "affiliation": "JMI Delhi" },
    { "name": "Dr. Avadhesh Yadav (DDG)", "affiliation": "NISE" },
    { "name": "Dr. Vijay Bajpai", "affiliation": "NIT Kurukshetra" },
    { "name": "Dr. Ravi Pratap Singh", "affiliation": "NIT Jalandhar" },
    { "name": "Dr. Rajesh Kumar", "affiliation": "NIT Kurukshetra" },
    { "name": "Dr. Manoj Sinha", "affiliation": "NIT Kurukshetra" },
    { "name": "Dr. Neeraj Bhanot", "affiliation": "Scientist CSIR" },
    { "name": "Dr. Sarvesh Misra", "affiliation": "IIT Kanpur" },
    { "name": "Dr. Parmod Kumar", "affiliation": "IIT Mandi" },
    { "name": "Dr. Qasim Murtaza", "affiliation": "DTU" },
    { "name": "Prof. R. K. Sehgal", "affiliation": "In-House" },
    { "name": "Prof. Sunand Kumar", "affiliation": "In-House" },
    { "name": "Prof. Anoop Kumar", "affiliation": "In-House" },
    { "name": "Dr. Rajesh Sharma", "affiliation": "In-House" },
    { "name": "Dr. Rajiv Sharma", "affiliation": "In-House" },
    { "name": "Dr. Somesh Sharma", "affiliation": "In-House" },
    { "name": "Dr. Siddhartha", "affiliation": "In-House" },
    { "name": "Dr. Varun", "affiliation": "In-House" },
    { "name": "Dr. Pardeep Kumar Sood", "affiliation": "In-House" },
    { "name": "Dr. Debasish Das", "affiliation": "In-House" },
    { "name": "Dr. Mohit Pant", "affiliation": "In-House" },
    { "name": "Dr. Deepak Sharma", "affiliation": "In-House" },
    { "name": "Dr. Param Singh", "affiliation": "In-House" },
    { "name": "Dr. Ajoy Debbarma", "affiliation": "In-House" },
    { "name": "Dr. Akhilesh Choudhary", "affiliation": "In-House" },
    { "name": "Dr. Dilshad Ahmad Khan", "affiliation": "In-House" },
    { "name": "Dr. Laxmikant Yadav", "affiliation": "In-House" },
    { "name": "Dr. Anshul Sharma", "affiliation": "In-House" },
    { "name": "Dr. Niharika Gupta", "affiliation": "In-House" }
  ];

  const internationalCommittee = [
    { "name": "Prof. Mustafizur Rahman", "affiliation": "Singapore" },
    { "name": "Prof. Kapil Gupta", "affiliation": "University of Johannesburg" },
    { "name": "Prof. Sridhar Idapalapati", "affiliation": "NTU Singapore" },
    { "name": "Dr. Faiz Iqbal", "affiliation": "Lincoln University, U.K" },
    { "name": "Dr. Binnur Sagbas", "affiliation": "Yildiz Technical University, Turkey" },
    { "name": "Dr. Ana Pilar Valerga", "affiliation": "University of Cádiz, Spain" },
    { "name": "Dr. Roque Aguado Molina", "affiliation": "Universidad de Jaén, Spain" }
  ];

  const DisplayCommittee = ({ members, isExpanded, toggleExpand }) => {
    const displayMembers = isExpanded ? members : members.slice(0, 6);

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayMembers.map((member, index) => (
            <div key={index} className="relative p-4 sm:p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm flex flex-col transition-all duration-300 hover:from-amber-100 hover:to-amber-200">
              <h4 className="font-semibold text-gray-800 text-base sm:text-lg mb-2">{member.name}</h4>
              <p className="text-gray-600 text-xs sm:text-sm italic">{member.affiliation}</p>
            </div>
          ))}
        </div>
        {members.length > 6 && (
          <button
            onClick={toggleExpand}
            className="mt-6 sm:mt-8 px-8 py-4 text-white bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg font-semibold shadow-lg shadow-amber-500/25 hover:from-amber-700 hover:to-amber-600 transition-all duration-300 mx-auto block text-base sm:text-lg"
          >
            {isExpanded ? '← Show Less' : `Show All ${members.length} Members →`}
          </button>
        )}
      </div>
    );
  };

  return (
    <div id='Advisory' className="relative py-16 bg-gray-50">
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,119,6,0.15) 2px, transparent 0)',
          backgroundSize: '24px 24px'
        }}>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-amber-600 mb-4">
            Advisory Committees
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl text-amber-600 font-semibold text-center mb-10">
              National Advisory Committee
            </h3>
            <DisplayCommittee 
              members={nationalCommittee}
              isExpanded={expandNational}
              toggleExpand={() => setExpandNational(!expandNational)}
            />
          </div>

          <div>
            <h3 className="text-2xl text-amber-600 font-semibold text-center mb-10">
              International Advisory Committee
            </h3>
            <DisplayCommittee 
              members={internationalCommittee}
              isExpanded={expandInternational}
              toggleExpand={() => setExpandInternational(!expandInternational)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
