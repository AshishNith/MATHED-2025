import React from 'react';
import { FaFileUpload, FaCreditCard, FaUsers } from 'react-icons/fa';
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

        {/* Submission Procedure Section */}
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
                Submission Procedure
              </h2>
              <p className='text-gray-600'>
                Authors are required to submit both their abstracts and full-length papers through the
                Microsoft CMT tool using the provided link.
              </p>
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
