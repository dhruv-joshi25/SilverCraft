import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/shared/SectionHeading';

const FeaturedCollection: React.FC = () => {
  return (
    <section id="collection" className="py-20 bg-white">
      <Container>
        <SectionHeading title="FEATURED COLLECTIONS" />
        
        {/* Collection 1 - Urbane Edition */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="font-playfair text-3xl mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              URBANE EDITION
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              URBANE Collection, where sophistication meets boldness in an array of unmatched 925 melting silver jewelry. 
              Featuring bracelets, facies, and rings, each piece is meticulously crafted to exude modernity and elegance. 
              Perfect for those with discerning tastes, the URBANE Collection offers timeless designs that effortlessly 
              blend contemporary style with enduring quality, making it a statement of luxury and refinement.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                to="/collection" 
                className="inline-block uppercase text-sm font-medium tracking-wider border-b-2 border-gold hover:text-gold transition-colors shine-effect"
              >
                DISCOVER COLLECTION
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2 grid grid-cols-3 gap-4 perspective-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="col-span-2 row-span-2 overflow-hidden rounded-md"
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.5 } 
              }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="URBANE Collection Main" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              />
            </motion.div>
            <motion.div 
              className="overflow-hidden rounded-md"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.5 } 
              }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="URBANE Collection Detail 1" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              />
            </motion.div>
            <motion.div 
              className="overflow-hidden rounded-md"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.5 } 
              }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="URBANE Collection Detail 2" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Collection 2 - Rani Collection */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="grid grid-cols-3 gap-4 perspective-container"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="col-span-2 row-span-2 overflow-hidden rounded-md"
              whileHover={{ 
                scale: 1.03,
                rotateY: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.5 } 
              }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="RANI Collection Main" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              />
            </motion.div>
            <motion.div 
              className="overflow-hidden rounded-md"
              whileHover={{ 
                scale: 1.05, 
                rotateY: -10,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.5 } 
              }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="RANI Collection Detail 1" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              />
            </motion.div>
            <motion.div 
              className="overflow-hidden rounded-md"
              whileHover={{ 
                scale: 1.05, 
                rotateY: -10,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { duration: 0.5 } 
              }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="RANI Collection Detail 2" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3 
              className="font-playfair text-3xl mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              RANI COLLECTION
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              RANI COLLECTION by Mansi Silver, available in all brands and melting variants. This exquisite collection 
              embodies the grace and elegance of royalty, celebrating the princess within every woman. From delicate 
              earrings to regal anklets and everything in between, each piece is crafted with precision and adorned 
              with intricate details.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                to="/collection" 
                className="inline-block uppercase text-sm font-medium tracking-wider border-b-2 border-gold hover:text-gold transition-colors shine-effect"
              >
                DISCOVER COLLECTION
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedCollection;
