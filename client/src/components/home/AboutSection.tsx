import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-lightgray">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl font-bold mb-6">Our Story</h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            <p className="mb-6">
              At Mansi Silver, we've been your trusted destination for premium
              silver jewelry materials since 1999. With over two decades of
              expertise, we specialize in crafting exceptional, handcrafted
              silver beads, including our signature cube and round beads.
            </p>
            <p className="mb-6">
              Our commitment to unmatched quality and craftsmanship has earned
              us a reputation as a leading manufacturer in the industry. Our
              beads are carefully handcrafted with precision and attention to
              detail, ensuring that each piece is a testament to superior
              artistry.
            </p>
            <p>
              These exquisite beads are widely used in the creation of
              traditional silver payals, mangalsutras, and other timeless
              jewelry pieces, allowing you to add a touch of elegance to any
              design.
            </p>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full h-[500px] relative z-10">
              <img
                src="https://www.amanornaments.com/media/banner/intro-2.jpg"
                alt="Jewelry Crafting"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-64 h-64 border-8 border-gold -z-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            ></motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
