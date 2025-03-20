import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Container from '@/components/ui/container';
import logoImage from '@/assets/images/logo.png';

const BrandIntro: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

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

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5
      }
    })
  };

  const brandName = "W E  A R E  M A N S I  S I L V E R";
  const letters = brandName.split("");

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
            className="w-full md:w-1/2 flex justify-center perspective-container"
            variants={logoVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 perspective-container">
              <motion.div
                className="w-full h-full"
                animate={{ 
                  rotateY: isHovered ? [0, 360] : [0, 0],
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ 
                  rotateY: {
                    duration: isHovered ? 1.5 : 0,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 0.5,
                  }
                }}
              >
                <motion.img
                  src={logoImage}
                  alt="Mansi Silver Logo"
                  className="w-full h-full drop-shadow-xl"
                  initial={{ filter: "drop-shadow(0px 0px 0px rgba(0,0,0,0.2))" }}
                  animate={{ 
                    filter: isHovered 
                      ? "drop-shadow(0px 10px 15px rgba(0,0,0,0.3))" 
                      : "drop-shadow(0px 5px 10px rgba(0,0,0,0.2))",
                    rotateY: !isHovered ? [0, 360] : [0, 0],
                  }}
                  transition={{ 
                    filter: { duration: 0.5 },
                    rotateY: {
                      duration: !isHovered ? 20 : 0,
                      ease: "linear",
                      repeat: Infinity,
                    }
                  }}
                />
              </motion.div>
              
              {isHovered && (
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="absolute inset-0 bg-white/10 rounded-full shine-effect"></div>
                </motion.div>
              )}
            </div>
          </motion.div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start mb-4">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  className={`inline-block text-3xl md:text-4xl tracking-widest font-light text-gray-800 ${letter === " " ? "w-4" : ""}`}
                  whileHover={{
                    y: -5,
                    color: "#D4AF37",
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>

            <motion.div 
              className="w-16 h-1 bg-gold mx-auto md:mx-0 mb-6"
              variants={itemVariants}
              whileInView={{
                width: ["0%", "100%", "40%"],
                transition: { duration: 1.5, times: [0, 0.7, 1] }
              }}
            />

            <motion.p 
              className="text-xl italic text-gray-600 mb-4"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                color: "#333",
                transition: { duration: 0.3 }
              }}
            >
              Where timeless elegance meets exquisite craftsmanship.
            </motion.p>

            <motion.p 
              className="text-gray-500"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                color: "#555",
                transition: { duration: 0.3 }
              }}
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