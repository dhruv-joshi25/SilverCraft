import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";
import logoImage from "../../assets/images/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Mansi", path: "/about" },
  { name: "Brand", path: "/brand" },
  { name: "Collection", path: "/collection" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle navigation (same behavior as footer links)
  const handleNavigation = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after navigation
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full bg-white bg-opacity-95 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo - Clicking it navigates to home */}
          <div
            onClick={() => handleNavigation("/")}
            className="flex items-center cursor-pointer"
          >
            <motion.img
              src={logoImage}
              alt="Mansi Silver Logo"
              className="h-12 w-12"
              whileHover={{
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
            />
            <div className="ml-2">
              <h1 className="font-playfair text-xl font-semibold text-darkgray tracking-wider">
                MANSI SILVER
              </h1>
              <p className="text-xs text-gray-500 italic">
                Timeless Elegance Since 1990
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center ml-auto">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <span
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`uppercase text-sm font-medium hover:text-gold transition-colors cursor-pointer ${
                    location.pathname === link.path ? "text-gold" : ""
                  }`}
                >
                  {link.name}
                </span>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <span
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`block py-2 uppercase text-sm font-medium hover:text-gold transition-colors cursor-pointer ${
                  location.pathname === link.path ? "text-gold" : ""
                }`}
              >
                {link.name}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </header>
  );
};

export default Navbar;
