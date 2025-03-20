import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Container from '@/components/ui/container';
import logoImage from '@/assets/images/logo.svg';

const BrandIntro: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -180 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotateY: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1 
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <Container>
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            variants={logoVariants}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.img
                src={logoImage}
                alt="Mansi Silver Logo"
                className="w-full h-full"
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 20,
                  ease: "linear",
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h2 
              className="text-3xl md:text-4xl tracking-widest font-light text-gray-800 mb-4"
              variants={itemVariants}
            >
              W E &nbsp; A R E &nbsp; M A N S I &nbsp; S I L V E R
            </motion.h2>

            <motion.div 
              className="w-16 h-1 bg-gray-400 mx-auto md:mx-0 mb-6"
              variants={itemVariants}
            />

            <motion.p 
              className="text-xl italic text-gray-600 mb-4"
              variants={itemVariants}
            >
              Where timeless elegance meets exquisite craftsmanship.
            </motion.p>

            <motion.p 
              className="text-gray-500"
              variants={itemVariants}
            >
              Established in 1990, Mansi Silver is a renowned name in the world of designer silver jewelry.
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BrandIntro;