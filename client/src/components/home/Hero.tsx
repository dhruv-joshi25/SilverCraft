import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/container';

const Hero: React.FC = () => {
  return (
    <section 
      className="w-full h-screen bg-cover bg-center relative"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')` 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Container className="h-full flex items-center z-10 relative">
        <motion.div 
          className="max-w-xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Crafting Timeless Silver Elegance
          </h1>
          <p className="text-lg mb-8">
            Exquisite handcrafted silver jewelry since 1999, where tradition meets innovation.
          </p>
          <Link 
            to="/collection" 
            className="inline-block px-8 py-3 bg-gold text-white font-medium uppercase tracking-wider hover:bg-opacity-90 transition-all"
          >
            Explore Collections
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
