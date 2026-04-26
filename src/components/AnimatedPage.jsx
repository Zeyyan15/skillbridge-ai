import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

const AnimatedPage = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col grow ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
