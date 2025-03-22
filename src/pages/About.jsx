import React from 'react';
import { FaMapMarkerAlt, FaUniversity, FaCogs, FaCalendarAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Header Section */}
      <div className="py-16 bg-gradient-to-r from-amber-600/10 to-yellow-600/10 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400 text-center">
            MATHED 2025
          </h1>
          <p className="mt-2 text-xl text-gray-300 text-center max-w-3xl mx-auto">
            3rd International Conference on Manufacturing, Thermal, and Design Engineering
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Conference */}
            <section className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-amber-500/20">
              <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
                <FaCalendarAlt className="text-amber-400 mr-3" />
                About MATHED 2025
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The Department proudly presents MATHED 2025: The 3rd International Conference on Manufacturing, Thermal, and 
                Design Engineering. Building on the success of previous editions, this year's conference offers both online 
                and offline participation, ensuring a broader global reach and enhanced collaboration.
              </p>
            </section>

            {/* Location Information */}
            <section className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-amber-500/20">
              <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
                <FaMapMarkerAlt className="text-amber-400 mr-3" />
                About Hamirpur
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Hamirpur, nestled in the scenic hills of Himachal Pradesh, is known for its pleasant weather, lush greenery, 
                and rich cultural heritage. The town offers breathtaking views of the Shivalik range and serves as a gateway to 
                several natural attractions.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Institute Information */}
            <section className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-amber-500/20">
              <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
                <FaUniversity className="text-amber-400 mr-3" />
                NIT Hamirpur
              </h2>
              <p className="text-gray-300 leading-relaxed">
                National Institute of Technology Hamirpur is one of the 31 NITs in India, established in 1986. The Institute 
                provides Undergraduate, Postgraduate and Doctorate Education in Engineering, Sciences & Humanities.
              </p>
            </section>

            {/* Department Information */}
            <section className="bg-white/5 backdrop-blur-md p-8 rounded-lg border border-amber-500/20">
              <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
                <FaCogs className="text-amber-400 mr-3" />
                Department Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The Department of Mechanical Engineering at NIT Hamirpur has grown into a center of excellence, offering B.Tech, 
                M.Tech and Ph.D. programs in Design, Thermal, and Manufacturing.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
