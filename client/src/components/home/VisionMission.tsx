import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';

const VisionMission: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1 relative flex justify-center items-center h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-none stroke-gray-200">
                <path d="M 0, 80 C 0, 55.2 55.2, 0 80, 0 S 160, 55.2 160, 80 55.2, 160 0, 160 -55.2, 104.8 0, 80" transform="translate(100 100)" />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620332372374-d3072cc44c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Silver Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-playfair text-4xl font-bold mb-4">VISION</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p>At Mansi Silver, our vision is to be the epitome of timeless elegance and craftsmanship in the world of jewelry. We strive to blend tradition with innovation, creating exquisite pieces that resonate with our customers and stand the test of time.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-playfair text-4xl font-bold mb-4">MISSION</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p>Our mission at Mansi Silver is to craft exceptional silver jewelry that celebrates individuality and self-expression. We are committed to offering a diverse range of designs that cater to diverse tastes and preferences, while upholding the highest standards of quality, craftsmanship, and ethical practices. Through our creations, we aim to inspire confidence, evoke emotions, and adorn every moment with elegance.</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default VisionMission;
