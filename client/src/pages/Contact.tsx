import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';
import ContactSection from '@/components/home/ContactSection';

const PageBanner = () => {
  return (
    <section
      className="pt-40 pb-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://unsplash.com/photos/RwHv7LgeC7s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fDRrJTIwbGFuZHNjYXBlfGVufDB8fHx8MTc0MjQ1MDc3NXww&force=true')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <Container className="relative z-10">
        <div className="text-center">
          <h1 className="font-playfair text-5xl text-white font-bold mb-6">
            CONTACT
          </h1>
          <nav className="flex justify-center">
            <ol className="flex items-center">
              <li className="text-gray-300">
                <a href="/" className="hover:text-gold">
                  Home
                </a>
              </li>
              <li className="mx-2 text-gray-300">/</li>
              <li className="text-gray-300">Contact</li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="py-12 bg-lightgray">
      <Container>
        <div className="h-[400px] w-full bg-gray-300 flex items-center justify-center">
          <p className="text-gray-600">Map location would be embedded here</p>
        </div>
      </Container>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner />
      <ContactSection />
      <MapSection />
    </motion.div>
  );
};

export default Contact;
