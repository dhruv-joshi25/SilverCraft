import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';
import AboutSection from '@/components/home/AboutSection';
import VisionMission from '@/components/home/VisionMission';
import CoreValues from '@/components/home/CoreValues';
import ManagementTeam from '@/components/home/ManagementTeam';

const PageBanner = () => {
  return (
    <section
      className="pt-40 pb-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?cs=srgb&dl=pexels-pixabay-46160.jpg&fm=jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <Container className="relative z-10">
        <div className="text-center">
          <h1 className="font-playfair text-5xl text-white font-bold mb-6">
            ABOUT MANSI
          </h1>
          <nav className="flex justify-center">
            <ol className="flex items-center">
              <li className="text-gray-300">
                <a href="/" className="hover:text-gold">
                  Home
                </a>
              </li>
              <li className="mx-2 text-gray-300">/</li>
              <li className="text-gray-300">About Mansi</li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner />
      <AboutSection />
      <VisionMission />
      <CoreValues />
      <ManagementTeam />
    </motion.div>
  );
};

export default About;
