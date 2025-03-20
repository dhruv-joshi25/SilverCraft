import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/shared/SectionHeading';
import { 
  RingIcon, 
  ClockIcon, 
  UserCrownIcon, 
  LeafIcon, 
  LightbulbIcon, 
  FireIcon 
} from '@/assets/icons';

const values = [
  {
    id: 1,
    title: 'CRAFTSMANSHIP EXCELLENCE',
    description: 'We uphold the tradition of fine craftsmanship, ensuring every piece of jewelry is meticulously designed and crafted to the highest standards of quality.',
    icon: RingIcon
  },
  {
    id: 2,
    title: 'TIMELESS ELEGANCE',
    description: 'Our creations embody timeless elegance, blending classic aesthetics with contemporary styles to resonate with diverse tastes and preferences.',
    icon: ClockIcon
  },
  {
    id: 3,
    title: 'CUSTOMER CENTRICITY',
    description: 'We prioritize our customers\' needs and preferences, striving to deliver exceptional experiences and exceed expectations.',
    icon: UserCrownIcon
  },
  {
    id: 4,
    title: 'ETHICAL PRACTICES',
    description: 'We are committed to ethical sourcing and sustainable manufacturing practices, ensuring the integrity of our products and the well-being of our stakeholders.',
    icon: LeafIcon
  },
  {
    id: 5,
    title: 'INNOVATION AND CREATIVITY',
    description: 'We foster innovation and creativity in design, continuously evolving to stay ahead of trends and offer unique and captivating collections.',
    icon: LightbulbIcon
  },
  {
    id: 6,
    title: 'PASSION FOR EXCELLENCE',
    description: 'Our passion drives us to consistently pursue excellence in all aspects of our work, from design and production to customer service.',
    icon: FireIcon
  }
];

const CoreValues: React.FC = () => {
  return (
    <section className="py-20 bg-lightgray">
      <Container>
        <SectionHeading title="CORE VALUES" />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {values.map((value, index) => (
            <motion.div 
              key={value.id} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-5 mx-auto w-16 h-16 flex items-center justify-center text-gold">
                <value.icon className="text-3xl w-10 h-10" />
              </div>
              <h3 className="uppercase font-bold text-sm tracking-wider mb-3">{value.title}</h3>
              <p className="text-gray-600 px-4">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default CoreValues;
