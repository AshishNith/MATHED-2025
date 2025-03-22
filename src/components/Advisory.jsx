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
            <div key={index} className="relative p-4 sm:p-6 border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800 flex flex-col">
              <h4 className="font-semibold text-white text-base sm:text-lg mb-2">{member.name}</h4>
              <p className="text-gray-400 text-xs sm:text-sm italic">{member.affiliation}</p>
            </div>
          ))}
        </div>
        {members.length > 6 && (
          <button
            onClick={toggleExpand}
            className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 text-amber-400 border-2 border-amber-400 rounded-lg hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 mx-auto block text-base sm:text-lg font-medium"
          >
            {isExpanded ? '← Show Less' : `Show All ${members.length} Members →`}
          </button>
        )}
      </div>
    );
  };

  return (
    <div id='Advisory' className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl text-white font-bold mb-4">
            Advisory Committees
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl text-amber-400 font-semibold text-center mb-10">
              National Advisory Committee
            </h3>
            <DisplayCommittee 
              members={nationalCommittee}
              isExpanded={expandNational}
              toggleExpand={() => setExpandNational(!expandNational)}
            />
          </div>

          <div>
            <h3 className="text-2xl text-amber-400 font-semibold text-center mb-10">
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
