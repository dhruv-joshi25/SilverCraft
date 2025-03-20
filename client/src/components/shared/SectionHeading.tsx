import React from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  description, 
  centered = true 
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-playfair text-4xl font-bold mb-4">{title}</h2>
      <div className={`w-24 h-1 bg-gold mb-6 ${centered ? 'mx-auto' : ''}`}></div>
      {description && (
        <p className={`${centered ? 'max-w-2xl mx-auto' : ''} text-gray-600`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
