import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/50 shadow-lg backdrop-blur-sm' : 'bg-transparent'
    } ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className={`text-xl font-bold ${
              isScrolled ? 'text-white  ' : 'text-black'
            }`}>Conference NITH</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className={`${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {['/', '/about', '/schedule', '/speakers', '/contact'].map((path) => (
              <Link
                key={path}
                to={path}
                className={`px-3 py-2 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-4 ${
          isScrolled ? 'bg-white' : 'bg-transparent'
        }`}>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2">About</Link>
            <Link to="/schedule" className="text-gray-700 hover:text-gray-900 px-3 py-2">Schedule</Link>
            <Link to="/speakers" className="text-gray-700 hover:text-gray-900 px-3 py-2">Speakers</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
