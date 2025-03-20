import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/shared/SectionHeading';

const team = [
  {
    id: 1,
    name: 'Jentibhai Pipaliya',
    position: 'Chairman',
    bio: 'As the Chairman, Jentibhai Pipaliya has been the cornerstone of our company\'s growth since its inception. With a strong foundation in the silver jewelry industry, Jentibhai\'s leadership is rooted in a deep understanding of craftsmanship and a passion for preserving tradition while embracing innovation.',
    image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    name: 'Mukeshbhai Hirani',
    position: 'CEO - Partner',
    bio: 'Mukeshbhai Hirani, our CEO, is responsible for overseeing the overall direction and operations of Mansi Silver. With extensive experience in business management and a keen eye for market trends, Mukeshbhai ensures that we stay ahead of the curve while maintaining the high standards of quality that our customers expect.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 3,
    name: 'Dhaval Hirani',
    position: 'COO',
    bio: 'As the Chief Operating Officer, Dhaval Hirani plays a pivotal role in managing the day-to-day operations of the company. His expertise in supply chain management, production processes, and operational efficiency ensures that we consistently deliver high-quality products on time.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

const ManagementTeam: React.FC = () => {
  return (
    <section className="py-20 bg-lightgray">
      <Container>
        <SectionHeading 
          title="OUR MANAGEMENT"
          description="At Mansi Silver, we are guided by a team of visionary leaders who bring decades of experience and a commitment to excellence. Our management team is the driving force behind our success."
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {team.map((member, index) => (
            <motion.div 
              key={member.id} 
              className="bg-white p-8 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
              <p className="text-gold text-center mb-4">{member.position}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ManagementTeam;
