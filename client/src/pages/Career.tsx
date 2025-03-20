import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/shared/SectionHeading';

const PageBanner = () => {
  return (
    <section 
      className="pt-40 pb-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <Container className="relative z-10">
        <div className="text-center">
          <h1 className="font-playfair text-5xl text-white font-bold mb-6">CAREER</h1>
          <nav className="flex justify-center">
            <ol className="flex items-center">
              <li className="text-gray-300">
                <a href="/" className="hover:text-gold">Home</a>
              </li>
              <li className="mx-2 text-gray-300">/</li>
              <li className="text-gold">Career</li>
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  );
};

const CareerSection = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Silver Artisan',
      department: 'Production',
      location: 'Rajkot, Gujarat',
      type: 'Full-time',
      description: 'We are looking for an experienced silver artisan with exceptional craftsmanship skills to join our production team. The ideal candidate will have extensive experience in creating intricate silver jewelry and a passion for perfection.'
    },
    {
      id: 2,
      title: 'Jewelry Designer',
      department: 'Design',
      location: 'Rajkot, Gujarat',
      type: 'Full-time',
      description: 'Join our creative team as a Jewelry Designer responsible for creating innovative and appealing designs for our upcoming collections. The ideal candidate will have a strong portfolio showcasing their creative vision and technical skills.'
    },
    {
      id: 3,
      title: 'Quality Control Specialist',
      department: 'Quality Assurance',
      location: 'Rajkot, Gujarat',
      type: 'Full-time',
      description: 'We are seeking a detail-oriented Quality Control Specialist to ensure all our products meet our high standards of excellence. The ideal candidate will have experience in quality control within the jewelry industry and a keen eye for detail.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading 
          title="JOIN OUR TEAM" 
          description="At Mansi Silver, we believe that our people are our greatest asset. We are always looking for talented individuals who share our passion for craftsmanship and excellence to join our team."
        />
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl font-bold mb-4">Why Work With Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-lightgray p-6 rounded-sm">
                <h4 className="text-lg font-bold mb-2">Grow Your Skills</h4>
                <p className="text-gray-600">
                  We provide continuous learning opportunities and mentorship to help you develop your craft and advance your career.
                </p>
              </div>
              <div className="bg-lightgray p-6 rounded-sm">
                <h4 className="text-lg font-bold mb-2">Collaborative Environment</h4>
                <p className="text-gray-600">
                  Join a team of passionate artisans and professionals who work together to create exceptional pieces.
                </p>
              </div>
              <div className="bg-lightgray p-6 rounded-sm">
                <h4 className="text-lg font-bold mb-2">Be Part of a Legacy</h4>
                <p className="text-gray-600">
                  Contribute to a brand that has been upholding the tradition of fine craftsmanship for over two decades.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-playfair text-2xl font-bold mb-6">Current Openings</h3>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="border border-gray-200 p-6 rounded-sm">
                <h4 className="text-xl font-bold mb-2">{position.title}</h4>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="bg-gray-100 px-3 py-1 text-sm">{position.department}</span>
                  <span className="bg-gray-100 px-3 py-1 text-sm">{position.location}</span>
                  <span className="bg-gray-100 px-3 py-1 text-sm">{position.type}</span>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <button className="inline-block px-6 py-2 bg-gold text-white font-medium uppercase tracking-wider hover:bg-opacity-90 transition-all text-sm">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

const Career: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner />
      <CareerSection />
    </motion.div>
  );
};

export default Career;
