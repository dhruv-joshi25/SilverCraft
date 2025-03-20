import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/container';

const CTASection: React.FC = () => {
  return (
    <section 
      className="py-24 bg-cover bg-center relative"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1505816014357-96b5ff457e9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')` 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <Container className="relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Experience the Luxury of Mansi Silver
          </h2>
          <p className="text-lg mb-10">
            Discover our exquisite collections of handcrafted silver jewelry, where each piece tells 
            a story of tradition, craftsmanship, and timeless elegance.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 bg-gold text-white font-medium uppercase tracking-wider hover:bg-opacity-90 transition-all"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
