import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/shared/SectionHeading';
import { COLLECTIONS } from '@/lib/constants';

const PageBanner = () => {
  return (
    <section
      className="pt-40 pb-20 bg-cover bg-center relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <Container className="relative z-10">
        <div className="text-center">
          <h1 className="font-playfair text-5xl text-white font-bold mb-6">
            COLLECTION
          </h1>
          <nav className="flex justify-center">
            <ol className="flex items-center">
              <li className="text-gray-300">
                <a href="/" className="hover:text-gold">
                  Home
                </a>
              </li>
              <li className="mx-2 text-gray-300">/</li>
              <li className="text-gray-300">Collection</li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};

const CollectionSection = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading 
          title="OUR COLLECTIONS" 
          description="Discover our exquisite silver collections, each piece meticulously handcrafted by skilled artisans to create timeless elegance that celebrates your individuality."
        />
        
        {COLLECTIONS.map((collection, index) => (
          <div 
            key={collection.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index !== COLLECTIONS.length - 1 ? 'mb-24' : ''}`}
          >
            <motion.div 
              className={`${index % 2 === 0 ? 'order-2 lg:order-1' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-playfair text-3xl mb-6">{collection.name.toUpperCase()}</h3>
              <p className="text-gray-600 mb-6">{collection.longDescription}</p>
              <a href="#" className="inline-block uppercase text-sm font-medium tracking-wider border-b-2 border-gold hover:text-gold transition-colors">
                DISCOVER COLLECTION
              </a>
            </motion.div>
            <motion.div 
              className={`grid grid-cols-3 gap-4 ${index % 2 === 0 ? 'order-1 lg:order-2' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="col-span-2 row-span-2">
                <img 
                  src={collection.images[0]} 
                  alt={`${collection.name} Main`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <img 
                  src={collection.images[1]} 
                  alt={`${collection.name} Detail 1`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <img 
                  src={collection.images[2]} 
                  alt={`${collection.name} Detail 2`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </Container>
    </section>
  );
};

const Collection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner />
      <CollectionSection />
    </motion.div>
  );
};

export default Collection;
