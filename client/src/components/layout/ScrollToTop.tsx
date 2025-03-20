import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const smoothScrollToTop = () => {
    animate(window.scrollY, 0, {
      duration: 1.5, // Adjust for slower/smoother effect
      ease: "easeInOut",
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 w-10 h-10 bg-gold text-gray-400 flex items-center justify-center rounded-sm z-50"
          onClick={smoothScrollToTop}
          aria-label="Scroll to top"
        >
          <i className="fas fa-chevron-up"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
