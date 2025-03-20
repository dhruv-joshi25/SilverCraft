import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/shared/SectionHeading';
import CoreValues from '@/components/home/CoreValues';
import QualityPolicy from '@/components/home/QualityPolicy';

const PageBanner = () => {
  return (
    <section
      className="pt-40 pb-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <Container className="relative z-10">
        <div className="text-center">
          <h1 className="font-playfair text-5xl text-white font-bold mb-6">
            BRAND
          </h1>
          <nav className="flex justify-center">
            <ol className="flex items-center">
              <li className="text-gray-300">
                <a href="/" className="hover:text-gold">
                  Home
                </a>
              </li>
              <li className="mx-2 text-gray-300">/</li>
              <li className="text-gray-300">Brand</li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};

const BrandHistory = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading 
          title="OUR HERITAGE" 
          description="For over two decades, Mansi Silver has been synonymous with exceptional craftsmanship and timeless elegance in silver jewelry."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-3xl mb-6">A Legacy of Excellence</h3>
            <p className="text-gray-600 mb-6">
              Founded in 1999, Mansi Silver began as a small workshop dedicated to preserving the traditional art of silver craftsmanship. What started as a passion project by a family of silver artisans has grown into a renowned name in the industry, known for creating exquisite pieces that blend heritage techniques with contemporary designs.
            </p>
            <p className="text-gray-600">
              Through the years, we have maintained our commitment to quality, ethical practices, and innovative design, establishing ourselves as a trusted destination for premium silver jewelry that stands the test of time.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Silver Crafting Legacy" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

const Brand: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner />
      <BrandHistory />
      <CoreValues />
      <QualityPolicy />
    </motion.div>
  );
};

export default Brand;
