import React from 'react';
import { FaMapMarkerAlt, FaUniversity, FaCogs, FaImages } from 'react-icons/fa';

const About = () => {
  return (
    <div id='About' className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Content - spans 2 columns on large screens */}
          <div className="md:col-span-2 space-y-6">
            <section className="bg-white/5 text-gray-300 backdrop-blur-md p-6 lg:p-8 rounded-lg border border-amber-500/20">
              <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
                <FaUniversity className="text-amber-400 mr-3" />
                NIT Hamirpur
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  National Institute of Technology Hamirpur is one of the premier technical institutions of the country. 
                  Established in 1986, NIT Hamirpur has consistently maintained high academic standards, research output, 
                  and innovation in technology.
                </p>
                <p>
                  The institute offers comprehensive programs in:
                </p>
                <ul>
                  <li>Engineering</li>
                  <li>Sciences</li>
                  <li>Humanities</li>
                  <li>Management Studies</li>
                </ul>
              </div>
            </section>

            <section className="bg-white/5 text-gray-300 backdrop-blur-md p-6 lg:p-8 rounded-lg border border-amber-500/20">
              <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
                <FaMapMarkerAlt className="text-amber-400 mr-3" />
                Location & Accessibility
              </h2>
              <div className="prose prose-invert max-w-none">
                <p>
                  Hamirpur is well connected by road to major cities including Chandigarh, Delhi, and Shimla. 
                  The nearest airports are:
                </p>
                <ul>
                  <li>Dharamshala Airport (80 km)</li>
                  <li>Chandigarh International Airport (200 km)</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar - spans 1 column */}
          <div className="space-y-8">
            <section className="bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-lg border border-amber-500/20">
              <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
                <FaCogs className="text-amber-400 mr-3" />
                Department
              </h2>
              <p className="text-gray-300">
                The Department of Mechanical Engineering offers:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                <li>B.Tech in Mechanical Engineering</li>
                <li>M.Tech in Design Engineering</li>
                <li>M.Tech in Thermal Engineering</li>
                <li>Ph.D. Program</li>
              </ul>
            </section>

            {/* <section className="bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-lg border border-amber-500/20">
              <h2 className="text-2xl font-semibold text-amber-400 mb-8 flex items-center">
                <FaImages className="text-amber-400 mr-3" />
                Campus Gallery
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://mind2023.nith.ac.in/pictures/admin.jpg" 
                  alt="Campus View 1"
                  className="w-full h-32 md:h-48 object-cover rounded-lg hover:opacity-75 transition-opacity"
                />
                <img 
                  src="https://content.jdmagicbox.com/comp/hamirpur-himachal_pradesh/p6/9999p1972.1972.171014080006.n9p6/catalogue/nith-rec-hamirpur-himachal-pradesh-universities-kyc1niiwsn.jpg" 
                  alt="Campus View 2"
                  className="w-full h-32 md:h-48 object-cover rounded-lg hover:opacity-75 transition-opacity"
                />
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71CYMhmg4-2y53OAE6haOG_oaF-AZhPbC4Q&s" 
                  alt="Campus View 3"
                  className="w-full h-32 md:h-48 object-cover rounded-lg hover:opacity-75 transition-opacity"
                />
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxibjUfIak-LLUTTs-JkqN3KTgUR0yE2McHBoTe_2Wlzcxk_FQoO_bqIwUmDIjnwi8xY&usqp=CAU" 
                  alt="Campus View 4"
                  className="w-full h-32 md:h-48 object-cover rounded-lg hover:opacity-75 transition-opacity"
                />
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
