import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import BrandIntro from '@/components/home/BrandIntro';
import CollectionsPreview from '@/components/home/CollectionsPreview';
import AboutSection from '@/components/home/AboutSection';
import VisionMission from '@/components/home/VisionMission';
import CoreValues from '@/components/home/CoreValues';
import QualityPolicy from '@/components/home/QualityPolicy';
import ManagementTeam from '@/components/home/ManagementTeam';
import FeaturedCollection from '@/components/home/FeaturedCollection';
import CraftsmanshipStory from '@/components/home/CraftsmanshipStory';
import CTASection from '@/components/home/CTASection';
import ContactSection from '@/components/home/ContactSection';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <BrandIntro />
      <CollectionsPreview />
      <AboutSection />
      <VisionMission />
      <CoreValues />
      <QualityPolicy />
      <ManagementTeam />
      <FeaturedCollection />
      <CTASection />
      <ContactSection />
    </motion.div>
  );
};

export default Home;
