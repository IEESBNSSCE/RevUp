import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import RevUpLogo from '../assets/RevUp_White_Logo.png';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', target: '/' },
    { name: 'RevUp', target: '/revupp' },
    { name: 'Sponsors', target: '/sponsors' },
    { name: 'About', target: '/about' },
  ];

  const linkClassName = "text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer";

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Side: Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={RevUpLogo} alt="RevUp Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg whitespace-nowrap">IEEE VTS NSSCE</span>
          </Link>

          {/* Right Side Group */}
          <div className="flex items-center space-x-6">
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.target}
                    className={linkClassName}
                  >
                    {link.name}
                  </Link>
                ))}
                 <HashLink
                  to="/revupp#register" smooth
                  className="hidden md:block bg-blue-300 hover:bg-blue-400 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Register Now
                </HashLink>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden ml-4 p-2 text-gray-300 hover:text-cyan-400 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-gray-900 shadow-xl border-t border-gray-700`}
      >
        <div className="flex flex-col px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.target}
              className={linkClassName}
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/register"
            className="bg-blue-300 hover:bg-blue-400 text-gray-900 font-medium py-2 px-4 rounded-lg text-center transition-colors duration-200"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            Register Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
