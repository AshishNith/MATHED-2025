import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Institute Info */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">NIT Hamirpur</h2>
            <p className="text-gray-300 mb-2">National Institute of Technology Hamirpur</p>
            <p className="text-gray-300 mb-2">Hamirpur, Himachal Pradesh 177005</p>
            <div className="mt-4">
              <p className="flex items-center text-gray-300 mb-2">
                <span className="mr-2">📧</span> conference@nith.ac.in
              </p>
              <p className="flex items-center text-gray-300">
                <span className="mr-2">📞</span> +91-XXXXXXXXXX
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Speakers</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-2xl">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Conference NITH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
