import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";
import logoImage from "../../assets/images/logo.png"; // Ensure path is correct

const Footer: React.FC = () => {
  const navigate = useNavigate();

  // Custom navigation handler that scrolls to top when navigating
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Logo & About Section */}
          <div className="px-6 md:px-12">
            <div
              onClick={() => handleNavigation("/")}
              className="flex items-center justify-center md:justify-start mb-6 cursor-pointer"
            >
              <motion.img
                src={logoImage}
                alt="Mansi Silver Logo"
                className="h-12 w-12 filter brightness-200"
                whileHover={{
                  rotate: 360,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
              />
              <div className="ml-2">
                <h1 className="font-playfair text-xl font-semibold text-white tracking-wider">
                  MANSI SILVER
                </h1>
                <p className="text-xs text-gray-400 italic">
                  Timeless Elegance Since 1990
                </p>
              </div>
            </div>
            <p className="text-gray-400">
              With over two decades of expertise, we specialize in crafting
              exceptional, handcrafted silver jewelry that celebrates
              individuality and self-expression.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="px-6 md:px-12 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <a
                  onClick={() => handleNavigation("/")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNavigation("/about")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  ABOUT MANSI
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNavigation("/brand")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  BRAND
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNavigation("/collection")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  COLLECTION
                </a>
              </li>
              <li>
                <a
                  onClick={() => handleNavigation("/contact")}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="px-6 md:px-12">
            <h3 className="text-lg font-bold mb-6">CONTACT US</h3>
            <p className="text-gray-400 mb-4">
              Mansi Silver House, Soni Bazar, Darbargadh Chowk, Rajkot, India,
              Gujarat
            </p>
            <p className="text-gray-400 mb-2">Phone: +91 (0) 76666 92029</p>
            <p className="text-gray-400 mb-6">Email: info@mansisilver.com</p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="Pinterest"
              >
                <i className="fab fa-pinterest-p text-sm"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © Mansi Silver © {new Date().getFullYear()}. All Right
            Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
