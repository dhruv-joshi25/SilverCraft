import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';

const QualityPolicy: React.FC = () => {
  const policies = [
    {
      id: 1,
      title: 'Uncompromising Standards:',
      description: 'We uphold the highest standards of quality throughout our manufacturing process, from sourcing materials to final inspection.'
    },
    {
      id: 2,
      title: 'Craftsmanship Excellence:',
      description: 'Our skilled artisans meticulously craft each jewelry piece with attention to detail and precision, ensuring impeccable craftsmanship.'
    },
    {
      id: 3,
      title: 'Material Selection:',
      description: 'We use only the finest materials, including premium silver and genuine gemstones, to create jewelry that is durable, beautiful, and ethically sourced.'
    },
    {
      id: 4,
      title: 'Customer Satisfaction:',
      description: 'We prioritize customer satisfaction by delivering products that exceed expectations in terms of design, durability, and overall quality.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl font-bold mb-6">OUR QUALITY POLICY</h2>
            <div className="w-24 h-1 bg-gold mb-8"></div>
            <p className="mb-6">At Mansi Silver, we are committed to delivering exceptional quality and craftsmanship in every piece of jewelry we create. Our quality policy is built on the following principles:</p>
            
            <p className="mb-4">Visit our online catalogue and shop for the finest earrings, rings, bracelets, watches, silver, and the most luxurious gemstones.</p>
            
            {policies.map((policy, index) => (
              <motion.div 
                key={policy.id} 
                className="mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <h3 className="font-medium mb-1">{policy.title}</h3>
                <p className="text-gray-600">{policy.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Silver Jewelry Crafting" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default QualityPolicy;
