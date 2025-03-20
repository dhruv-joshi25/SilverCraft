import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Container from "@/components/ui/container";
import logoImage from "@/assets/images/logo.png";

const BrandIntro: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
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
        duration: 1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2 },
    },
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
            className="w-full md:w-1/2 flex justify-center perspective-container"
            variants={logoVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.img
              src={logoImage}
              alt="Mansi Silver Logo"
              className="w-64 h-64 md:w-80 md:h-80 drop-shadow-xl"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h2
              className="text-3xl md:text-4xl tracking-widest font-light text-gray-800"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ color: "#555", scale: 1.05 }}
            >
              WE ARE MANSI SILVER
            </motion.h2>

            <motion.div
              className="w-16 h-1 bg-gold mx-auto md:mx-0 mb-6"
              variants={itemVariants}
              whileInView={{
                width: ["0%", "100%", "40%"],
                transition: { duration: 1.5, times: [0, 0.7, 1] },
              }}
            />

            <motion.p
              className="text-xl italic text-gray-600 mb-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, color: "#333" }}
            >
              Where timeless elegance meets exquisite craftsmanship.
            </motion.p>

            <motion.p
              className="text-gray-500"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, color: "#555" }}
            >
              Established in 1990, Mansi Silver is a renowned name in the world
              of designer silver jewelry.
            </motion.p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BrandIntro;
