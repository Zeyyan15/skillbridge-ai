import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, slideUp, scaleOnHover } from '../utils/animations';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 pt-16 pb-24 sm:pt-24 sm:pb-32 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-white/5">
      {/* Smoothed Background infinite gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 dark:bg-primary/20 blur-[120px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
          x: [0, -30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 dark:bg-secondary/20 blur-[120px] rounded-full pointer-events-none" 
      />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto relative z-10 text-center"
      >
        <motion.div variants={slideUp} className="inline-flex items-center justify-center space-x-2 bg-primary/10 dark:bg-primary/10 text-primary-hover dark:text-secondary px-4 py-1.5 rounded-full border border-primary/20 dark:border-primary/20 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold tracking-wide uppercase">AI Curated Learning</span>
        </motion.div>
        
        <motion.h1 variants={slideUp} className="text-5xl sm:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          Learn Skills. <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary dark:from-secondary dark:to-secondary-hover">Start Earning.</span>
        </motion.h1>
        
        <motion.p variants={slideUp} className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 mb-10">
          AI-powered micro-courses designed specifically for Pakistani students to master in-demand tech and soft skills.
        </motion.p>

        <motion.div variants={slideUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            variants={scaleOnHover}
            whileHover="hover"
            whileTap="tap"
            onClick={() => document.getElementById('search-courses')?.focus()}
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-linear-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-colors"
          >
            Start Learning
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
          
          <motion.div variants={scaleOnHover} whileHover="hover" whileTap="tap" className="w-full sm:w-auto">
            <Link
              to="/login"
              className="w-full flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm hover:shadow-md"
            >
              Create Free Account
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
