import React from 'react';
import { FaFileUpload, FaCreditCard, FaUsers } from 'react-icons/fa';
import qrImage from "/Assets/QR.png"

const Registration = () => {
  return (
    <div id='SubmissionProcedure' className="relative z-20 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 w-full">
          {/* Submission Procedure Section */}
          <section className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20 w-full">
            <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
              <FaFileUpload className="text-amber-400 mr-3" />
              Submission Procedure
            </h2>
            <p className='text-white'>
              Authors are required to submit both their abstracts and full-length papers through the
              Microsoft CMT tool using the provided link.
            </p>
            <div className="w-40 h-40 bg-white p-2 mt-5 rounded-lg">
                <img src={qrImage} alt="SBI Collect QR Code" className="w-full h-full object-contain" />
              </div>
          </section>

          {/* Registration Details Section */}
          <section className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20 w-full">
            <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
              <FaCreditCard className="text-amber-400 mr-3" />
              Registration Details
            </h2>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
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
              
            </div>
          </section>
        </div>

        {/* Fee Structure */}
        <div className="mt-8 backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20 w-full">
          <h2 className="text-2xl font-semibold text-amber-400 mb-6 flex items-center">
            <FaUsers className="text-amber-400 mr-3" />
            Registration Fees
          </h2>
          <table className="w-full border-collapse border border-gray-500 text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-500 p-3">Description</th>
                <th className="border border-gray-500 p-3">Indian Participants</th>
                <th className="border border-gray-500 p-3">Foreign Participants (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-500 p-3">Academia/R&D</td>
                <td className="border border-gray-500 p-3">Rs. 5000</td>
                <td className="border border-gray-500 p-3">$200</td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-3">Industry</td>
                <td className="border border-gray-500 p-3">Rs. 8000</td>
                <td className="border border-gray-500 p-3">$250</td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-3">Students</td>
                <td className="border border-gray-500 p-3">Rs. 2000</td>
                <td className="border border-gray-500 p-3">$100</td>
              </tr>
              <tr>
                <td className="border border-gray-500 p-3">Attendee/Listener</td>
                <td className="border border-gray-500 p-3">Rs. 1500</td>
                <td className="border border-gray-500 p-3">$75</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mode of Delivery */}
        <div className="mt-8 backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-8 shadow-lg border border-amber-500/20 w-full">
          <h2 className="text-2xl font-semibold text-amber-400 mb-6">
            Mode of Delivery
          </h2>
          <p className='text-white'>
            Participants opting for online paper presentations will be informed to present via Google Meet.
            However, physical presence is encouraged for a more impactful and engaging experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
