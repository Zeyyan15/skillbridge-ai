import coursesData from '../data/courses.json';
import CourseCard from './CourseCard';
import { getSearchHistory } from '../services/history';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideUp, staggerContainer } from '../utils/animations';

const RecommendedCourses = () => {
  const history = getSearchHistory();
  
  // Find courses whose title or category match any search history term
  const matches = history.length === 0 ? [] : coursesData.filter(course => {
    const cTitle = course.title.toLowerCase();
    const cCat = course.category.toLowerCase();
    return history.some(query => cTitle.includes(query) || cCat.includes(query) || query.includes(cCat));
  });

  const recommended = matches.slice(0, 4);

  if (recommended.length === 0) return null;

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="py-14 sm:py-16 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-b border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={slideUp} className="flex items-center space-x-3 mb-10">
          <div className="bg-primary/10 dark:bg-primary/20 p-2.5 rounded-xl shadow-inner">
            <Sparkles className="w-6 h-6 text-primary dark:text-secondary" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Recommended for You</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Based on your recent searches</p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommended.map(course => <CourseCard key={`rec-${course.id}`} course={course} />)}
        </div>
      </div>
    </motion.div>
  );
};

export default RecommendedCourses;
