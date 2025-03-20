import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';
import { LogoIcon } from '@/assets/icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Mansi', path: '/about' },
  { name: 'Brand', path: '/brand' },
  { name: 'Collection', path: '/collection' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full bg-white bg-opacity-95 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <LogoIcon className="h-12 w-12" />
            <div className="ml-2">
              <h1 className="font-playfair text-xl font-semibold text-darkgray">Mansi</h1>
              <p className="text-xs text-gold italic">Redefine your look</p>
            </div>
          </Link>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`uppercase text-sm font-medium hover:text-gold transition-colors ${location.pathname === link.path ? 'text-gold' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <motion.div 
          className="md:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`block py-2 uppercase text-sm font-medium hover:text-gold transition-colors ${location.pathname === link.path ? 'text-gold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </Container>
    </header>
  );
};

export default Navbar;
