import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/shared/SectionHeading';
import CollectionCard from '@/components/shared/CollectionCard';

const collections = [
  {
    id: 1,
    title: 'Urbane Collection',
    description: 'Sophistication meets boldness in our array of unmatched 925 melting silver jewelry.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/collection'
  },
  {
    id: 2,
    title: 'Rani Collection',
    description: 'Embodying the grace and elegance of royalty, celebrating the princess within every woman.',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/collection'
  },
  {
    id: 3,
    title: 'Heritage Collection',
    description: 'Traditional designs reimagined with contemporary craftsmanship for the modern connoisseur.',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    link: '/collection'
  },
];

const CollectionsPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading 
          title="Our Premium Collections"
          description="Discover our exquisite silver collections, each piece meticulously handcrafted by skilled artisans to create timeless elegance that celebrates your individuality."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          {collections.map((collection) => (
            <motion.div 
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CollectionCard 
                title={collection.title}
                description={collection.description}
                image={collection.image}
                link={collection.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default CollectionsPreview;
