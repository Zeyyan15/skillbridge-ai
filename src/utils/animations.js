// Reusable Framer Motion Variants

// Elegant SaaS Easing
const smoothEase = [0.16, 1, 0.3, 1];

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: smoothEase }
  }
};

export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 120 }
  }
};

export const slideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 150 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { type: 'spring', damping: 20, stiffness: 300 } },
  tap: { scale: 0.98, transition: { type: 'spring', damping: 20, stiffness: 300 } }
};

export const pageTransition = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: smoothEase }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: { duration: 0.3, ease: smoothEase }
  }
};
