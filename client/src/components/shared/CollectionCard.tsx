import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ 
  title, 
  description, 
  image, 
  link 
}) => {
  return (
    <motion.div 
      className="group cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="overflow-hidden mb-5 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-white font-playfair text-2xl">{title}</h3>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
      <Link 
        to={link} 
        className="inline-block mt-4 text-gold uppercase text-sm tracking-wider font-medium group-hover:translate-x-2 transition-transform"
      >
        Discover More
      </Link>
    </motion.div>
  );
};

export default CollectionCard;
