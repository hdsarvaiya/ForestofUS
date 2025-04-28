import { motion } from "framer-motion";
import TreeAnimation from "./tree-animation";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed w-full h-full bg-gradient-to-b from-cream to-forest-light flex flex-col justify-center items-center z-50 overflow-visible"
    >
      <motion.div 
        className="w-64 h-64 sm:w-80 sm:h-80 relative p-8"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <TreeAnimation />
      </motion.div>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <div className="flex items-center gap-2">
          <motion.div 
            className="w-2 h-2 bg-forest-dark rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.2 }}
          />
          <motion.div 
            className="w-2 h-2 bg-forest-dark rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, delay: 0.15, repeat: Infinity, repeatDelay: 0.2 }}
          />
          <motion.div 
            className="w-2 h-2 bg-forest-dark rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, repeatDelay: 0.2 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;