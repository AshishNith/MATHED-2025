import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-20 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>National Institute of Technology Hamirpur</p>
            <p>Hamirpur, Himachal Pradesh 177005</p>
            <p>Email: conference@nith.ac.in</p>
            <p>Phone: +91-XXXXXXXXXX</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">About</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Schedule</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Speakers</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Conference NITH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
