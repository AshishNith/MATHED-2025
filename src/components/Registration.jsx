import React from 'react';
import { FaFileUpload, FaCreditCard, FaUsers } from 'react-icons/fa';
import qrImage from "/Assets/QR.png"

const Registration = () => {
  return (
    <div id='SubmissionProcedure' className="relative z-20 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
            Registration & Submission
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mt-4"></div>
        </div>

        {/* Submission Procedure Section */}
        <section className="backdrop-blur-sm bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20 w-full">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
                <FaFileUpload className="text-amber-400 mr-3" />
                Submission Procedure
              </h2>
              <p className='text-gray-300'>
                Authors are required to submit both their abstracts and full-length papers through the
                Microsoft CMT tool using the provided link.
              </p>
            </div>
            
          </div>
        </section>

        {/* Registration Details Section */}
        <section className="backdrop-blur-sm bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20 w-full">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
                <FaCreditCard className="text-amber-400 mr-3" />
                Registration Details
              </h2>
              <p className='text-white'>
                Following the acceptance of the full-text paper, participants are required to pay the
                non-refundable registration fee through SBI Collect.
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-white">
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
        </section>

        {/* Fee Structure */}
        <div className="backdrop-blur-sm bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20 w-full">
          <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
            <FaUsers className="text-amber-400 mr-3" />
            Registration Fees
          </h2>
          <table className="w-full border-collapse text-gray-300">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20">
                <th className="border border-amber-500/20 p-3">Description</th>
                <th className="border border-amber-500/20 p-3">Indian Participants</th>
                <th className="border border-amber-500/20 p-3">Foreign Participants (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-amber-500/10 transition-colors">
                <td className="border border-amber-500/20 p-3">Academia/R&D</td>
                <td className="border border-amber-500/20 p-3">Rs. 5000</td>
                <td className="border border-amber-500/20 p-3">$200</td>
              </tr>
              <tr className="hover:bg-amber-500/10 transition-colors">
                <td className="border border-amber-500/20 p-3">Industry</td>
                <td className="border border-amber-500/20 p-3">Rs. 8000</td>
                <td className="border border-amber-500/20 p-3">$250</td>
              </tr>
              <tr className="hover:bg-amber-500/10 transition-colors">
                <td className="border border-amber-500/20 p-3">Students</td>
                <td className="border border-amber-500/20 p-3">Rs. 2000</td>
                <td className="border border-amber-500/20 p-3">$100</td>
              </tr>
              <tr className="hover:bg-amber-500/10 transition-colors">
                <td className="border border-amber-500/20 p-3">Attendee/Listener</td>
                <td className="border border-amber-500/20 p-3">Rs. 1500</td>
                <td className="border border-amber-500/20 p-3">$75</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mode of Delivery */}
        <div className="backdrop-blur-sm bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20 w-full">
          <h2 className="text-2xl font-semibold text-amber-400 mb-6">
            Mode of Delivery
          </h2>
          <p className='text-gray-300'>
            Participants opting for online paper presentations will be informed to present via Google Meet.
            However, physical presence is encouraged for a more impactful and engaging experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
