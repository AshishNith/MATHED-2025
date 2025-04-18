import React from 'react';
import { FaFileUpload, FaCreditCard, FaUsers, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import qrImage from "/Assets/QR.png"

const Registration = () => {
  return (
    <div id='SubmissionProcedure' className="relative min-h-screen py-16 bg-gray-50">
      {/* Background with dual gradients */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 opacity-30" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(217,119,6,0.15) 2px, transparent 0)',
          backgroundSize: '24px 24px'
        }}>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-amber-600 mb-6">Registration & Submission</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8"></div>
        </motion.div>



        {/* Call for Papers Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-amber-600 mb-6 flex items-center">
                <FaFileUpload className="text-amber-600 mr-3" />
                Submission Guidelines
              </h2>
              <p className="text-gray-600 mb-4">
                We are pleased to invite high-quality research papers for presentation at the 3rd International Conference on Advances in Manufacturing, Thermal and Design Engineering (MATHED 2025). 
              </p>

             
              <div className="bg-white p-4 rounded-lg border border-amber-200 mb-6">
                <h3 className="text-lg font-semibold text-amber-600 mb-2">Submission Platform</h3>
                <p className="text-gray-600">
                  All paper submissions must be made electronically through the Microsoft Conference Management Toolkit (CMT) platform.
                </p>
                <div className="mt-3">
                  <a href="https://cmt3.research.microsoft.com/MATHED2025/Submission/Index" 
                     className="text-amber-600 hover:text-amber-700 underline"
                     target="_blank"
                     rel="noopener noreferrer">
                    CMT Submission Portal
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Please create an account (if you don't have one), log in, and follow the instructions for submitting your manuscript.
                </p>
                <div className="mt-4 pt-4 border-t border-amber-100">
                  <p className="text-xs text-gray-500 italic">
                    The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
                    This service was provided for free by Microsoft and they bore all expenses, including costs for 
                    Azure cloud services as well as for software development and support.
                  </p>
                </div>
              </div>


              <h3 className="text-lg font-semibold text-amber-600 mt-6 mb-3">Author Guidelines</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Paper Length: Minimum 10 and maximum 12 pages (including references and appendices)</li>
                <li>Format: Authors must prepare their manuscripts according to Springer's Conference Proceedings format
                  <a href="https://docs.google.com/document/d/1t3-8--xn0ryS1xOohyxjQBdcmeHyWJcBxUkbA9faFCI/edit?usp=sharing" 
                     className="text-amber-600 hover:text-amber-700 ml-1">
                    Download Format Template
                  </a>
                </li>
                <li>Language: All papers must be written in English</li>
                <li>Originality: Submissions must be original and not simultaneously submitted to another journal or conference</li>
              </ul>

              <h3 className="text-lg font-semibold text-amber-600 mt-6 mb-3">How to Submit</h3>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Prepare your manuscript as per the Springer formatting guidelines</li>
                  <li>Go to the CMT submission portal: 
                    <a href="https://cmt3.research.microsoft.com/MATHED2025/Submission/Index" 
                       className="text-amber-600 hover:text-amber-700 ml-1" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      https://cmt3.research.microsoft.com/YourConference2025
                    </a>
                  </li>
                  <li>Register/log in to CMT</li>
                  <li>Click on "Create New Submission"</li>
                  <li>Fill in the required details (title, abstract, author list, keywords, subject areas, etc.)</li>
                  <li>Upload the PDF of your manuscript</li>
                  <li>Submit and confirm your submission</li>
                </ol>
              </div>
              
              <div className="mt-6">
                <a href="https://docs.google.com/document/d/1t3-8--xn0ryS1xOohyxjQBdcmeHyWJcBxUkbA9faFCI/edit?usp=sharing" 
                   className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  <FaFilePdf className="mr-2" />
                  Download Paper Format Template
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Registration Details Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-amber-600 mb-6 flex items-center">
                <FaCreditCard className="text-amber-600 mr-3" />
                Registration Details
              </h2>

              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-600 mb-2">Important Note</h3>
                <p className="text-gray-600 mb-2">
                  At least one author of each accepted paper must register for the conference and present the paper.
                </p>
              </div>

              <p className='text-gray-600'>
                Following the acceptance of the full-text paper, participants are required to pay the
                non-refundable registration fee through SBI Collect.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>Visit the SBI Collect website or scan the QR code.</li>
                <li>Select <strong>Educational Institution</strong> and search for <strong>NIT Hamirpur</strong>.</li>
                <li>Choose <strong>WORKSHOP FDP STC CONFERENCE</strong> as the payment category.</li>
                <li>Fill in the required information and proceed with payment.</li>
                <li>Download or print the e-receipt for records.</li>
              </ul>
            </div>
            <div className="w-48 h-48 bg-gradient-to-br from-white to-gray-100 p-3 rounded-lg shadow-lg flex-shrink-0 self-center">
              <img src={qrImage} alt="SBI Collect QR Code" className="w-full h-full object-contain" />
            </div>
          </div>
        </motion.section>

        {/* Fee Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-semibold text-amber-600 mb-6 flex items-center">
            <FaUsers className="text-amber-600 mr-3" />
            Registration Fees
          </h2>
          <table className="w-full border-collapse text-gray-600">
            <thead>
              <tr className="bg-amber-100">
                <th className="border border-amber-200 p-3">Description</th>
                <th className="border border-amber-200 p-3">Indian Participants</th>
                <th className="border border-amber-200 p-3">International Participants (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-amber-500/10 transition-colors">
                <td className="border border-amber-200 p-3">Academia/R&D</td>
                <td className="border border-amber-200 p-3">Rs. 5000</td>
                <td className="border border-amber-200 p-3">$200</td>
              </tr>
              <tr className="hover:bg-amber-500/10 transition-colors">
                <td className="border border-amber-200 p-3">Industry</td>
                <td className="border border-amber-200 p-3">Rs. 8000</td>
                <td className="border border-amber-200 p-3">$250</td>
              </tr>
              <tr className="hover:bg-amber-500/10 transition-colors">
                <td className="border border-amber-200 p-3">Students</td>
                <td className="border border-amber-200 p-3">Rs. 2000</td>
                <td className="border border-amber-200 p-3">$100</td>
              </tr>
              <tr className="hover:bg-amber-500/10 transition-colors">
                <td className="border border-amber-200 p-3">Attendee/Listener</td>
                <td className="border border-amber-200 p-3">Rs. 1500</td>
                <td className="border border-amber-200 p-3">$75</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Mode of Delivery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-semibold text-amber-600 mb-6">
            Mode of Delivery
          </h2>
          <p className='text-gray-600'>
            Participants opting for online paper presentations will be informed to present via Google Meet.
            However, physical presence is encouraged for a more impactful and engaging experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Registration;
