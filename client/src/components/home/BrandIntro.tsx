import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';

const BrandIntro: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Triangle Logo */}
          <motion.div 
            className="w-24 h-24 mx-auto mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M50 15 L85 85 L15 85 Z" fill="black" />
                <circle cx="75" cy="30" r="15" fill="#D4AF37" />
              </svg>
            </div>
          </motion.div>
          
          {/* Spaced out text */}
          <motion.div 
            className="tracking-widest uppercase text-sm font-medium mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            W E &nbsp; A R E &nbsp; M A N S I &nbsp; S I L V E R
          </motion.div>
          
          {/* Main heading */}
          <motion.h2 
            className="font-playfair text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Where timeless elegance meets exquisite craftsmanship.
          </motion.h2>
          
          {/* Subtitle with highlight */}
          <motion.div
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="text-gold">Established in 1990</span>, Mansi Silver is a renowned 
            name in the world of designer silver jewelry.
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BrandIntro;