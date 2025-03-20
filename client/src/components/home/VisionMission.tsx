import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";

const VisionMission: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"vision" | "mission">(
    "vision"
  );

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1 relative flex justify-center items-center h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Main container for the flipping effect with proper perspective */}
            <div
              className="relative w-[400px] h-[400px]"
              style={{ perspective: "1500px" }}
            >
              <motion.div
                className="absolute w-full h-full"
                animate={{
                  rotateY: activeSection === "vision" ? 0 : 180,
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Background rotating SVG */}
                <motion.svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-full h-full fill-none stroke-gold"
                  strokeWidth="1"
                  animate={{
                    rotate: [0, 360],
                    strokeWidth: [1, 2, 1],
                    stroke: [
                      "rgba(212, 175, 55, 0.3)",
                      "rgba(212, 175, 55, 0.7)",
                      "rgba(212, 175, 55, 0.3)",
                    ],
                  }}
                  transition={{
                    rotate: { duration: 30, ease: "linear", repeat: Infinity },
                    strokeWidth: {
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                    stroke: {
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                >
                  <path
                    d="M 0, 80 C 0, 55.2 55.2, 0 80, 0 S 160, 55.2 160, 80 55.2, 160 0, 160 -55.2, 104.8 0, 80"
                    transform="translate(100 100)"
                  />
                </motion.svg>

                {/* Vision Image - Front side */}
                <motion.div
                  className="absolute inset-0 flex justify-center items-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "translateZ(1px)",
                  }}
                >
                  <div className="w-[350px] h-[350px] rounded-full overflow-hidden shine-effect">
                    <motion.img
                      src="https://images.unsplash.com/photo-1607703829739-c05b7beddf60?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Silver Craftsmanship - Vision"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Mission Image - Back side */}
                <motion.div
                  className="absolute inset-0 flex justify-center items-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg) translateZ(1px)",
                  }}
                >
                  <div className="w-[350px] h-[350px] rounded-full overflow-hidden shine-effect">
                    <motion.img
                      src="https://images.unsplash.com/photo-1719862056482-15c668d17ed1?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Silver Craftsmanship - Mission"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setActiveSection("vision")}
                className={`px-6 py-2 font-medium transition-all ${
                  activeSection === "vision"
                    ? "text-gold border-b-2 border-gold"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                VISION
              </button>
              <button
                onClick={() => setActiveSection("mission")}
                className={`px-6 py-2 font-medium transition-all ${
                  activeSection === "mission"
                    ? "text-gold border-b-2 border-gold"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                MISSION
              </button>
            </div>

            <motion.div
              className="relative"
              animate={{
                opacity: activeSection === "vision" ? 1 : 0,
                x: activeSection === "vision" ? 0 : -20,
                display: activeSection === "vision" ? "block" : "none",
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="font-playfair text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                VISION
              </motion.h2>

              <motion.div
                className="w-16 h-1 bg-gold mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-700 leading-relaxed"
              >
                At Mansi Silver, our vision is to be the epitome of timeless
                elegance and craftsmanship in the world of jewelry. We strive to
                blend tradition with innovation, creating exquisite pieces that
                resonate with our customers and stand the test of time.
              </motion.p>

              <motion.div
                className="mt-4 p-4 bg-gray-50 border-l-4 border-gold rounded-r"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="italic text-gray-600">
                  "Our vision is to create silver jewelry that becomes a
                  timeless part of your personal story."
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              animate={{
                opacity: activeSection === "mission" ? 1 : 0,
                x: activeSection === "mission" ? 0 : 20,
                display: activeSection === "mission" ? "block" : "none",
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="font-playfair text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                MISSION
              </motion.h2>

              <motion.div
                className="w-16 h-1 bg-gold mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-700 leading-relaxed"
              >
                Our mission at Mansi Silver is to craft exceptional silver
                jewelry that celebrates individuality and self-expression. We
                are committed to offering a diverse range of designs that cater
                to diverse tastes and preferences, while upholding the highest
                standards of quality, craftsmanship, and ethical practices.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-700 leading-relaxed mt-4"
              >
                Through our creations, we aim to inspire confidence, evoke
                emotions, and adorn every moment with elegance.
              </motion.p>

              <motion.div
                className="mt-4 p-4 bg-gray-50 border-l-4 border-gold rounded-r"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="italic text-gray-600">
                  "Each piece we create is a testament to our commitment to
                  excellence and artistry."
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default VisionMission;
