import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 right-8 bg-forest-primary hover:bg-forest-dark text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition transform hover:scale-110 z-50"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
