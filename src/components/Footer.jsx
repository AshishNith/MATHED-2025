import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Footer = () => {
  const scrollToSection = useScrollToSection();
  const location = useLocation();
  const navigate = useNavigate();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/committee', label: 'Committee' },
    { path: '/', label: 'Call for Papers', section: 'CallForPaper' },
    { path: '/', label: 'Important Dates', section: 'importantDate' },
    { path: '/register', label: 'Registration' },
  ];

  const handleNavClick = async (item) => {
    if (item.section) {
      if (location.pathname !== '/') {
        await navigate('/', { state: { scrollTo: item.section }});
      } else {
        scrollToSection(item.section);
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900/90 to-black/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Institute Info */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-amber-400">NIT Hamirpur</h2>
            <p className="text-gray-300 mb-2">National Institute of Technology Hamirpur</p>
            <p className="text-gray-300 mb-2">Hamirpur, Himachal Pradesh 177005</p>
            <div className="mt-4">
              <p className="flex items-center text-gray-300 mb-2">
                <span className="mr-2">📧</span> mathed2025@nith.ac.in
              </p>
              {/* <p className="flex items-center text-gray-300">
                <span className="mr-2">📞</span> +91-XXXXXXXXXX
              </p> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.path + (item.section || '')}>
                  <Link
                    to={item.path}
                    onClick={() => handleNavClick(item)}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media section removed */}
        </div>

        <div className="border-t border-amber-500/20 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Conference NITH. All rights reserved.</p>
          <br />
          <p>Designed and Developed by <a className='text-white ' href="https://portfolio-ashish9992.vercel.app/">Ashish Ranjan</a> </p>

        </div>
    
      </div>
    </footer>
  );
};

export default Footer;
