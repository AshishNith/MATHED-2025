import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = useScrollToSection();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/committee', label: 'Committee' },
    { path: '/', label: 'Call for Papers', section: 'CallForPaper' },
    { path: '/', label: 'Important Dates', section: 'importantDate' },
    { path: '/register', label: 'Registration & Submission' },
    { path: '/', label: 'Contact', section: 'Contact' },
    { path: '/sponsors', label: 'Sponsers', section: '' },
  ];

  const handleNavClick = async (item) => {
    setIsOpen(false);
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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-br from-gray-900/90 to-black/90 shadow-lg backdrop-blur-sm border-b border-amber-500/20' : 'bg-transparent'
    } ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link to="/" className="text-xl font-bold text-amber-400 flex items-center space-x-2 hover:text-amber-300 transition-colors">
              <img src="/Assets/logo.ico" alt="Logo" className="h-14 w-14 rounded-full border-2 border-amber-400" />
              <span>MATHED 2025</span>
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.path + item.section}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  onClick={() => handleNavClick(item)}
                  className="px-3 py-2 text-sm font-medium text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 transition-all rounded-md"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="text-amber-400 p-2 rounded-md hover:bg-amber-500/10 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm rounded-b-xl border-x border-b border-amber-500/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path + item.section}
                to={item.path}
                onClick={() => handleNavClick(item)}
                className="block px-3 py-2 text-base font-medium text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 rounded-md transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;