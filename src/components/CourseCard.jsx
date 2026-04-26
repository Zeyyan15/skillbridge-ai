import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import { getEnrolledCourses, enrollInCourse, unenrollFromCourse } from '../services/history';
import { motion } from 'framer-motion';
import { slideUp, scaleOnHover } from '../utils/animations';

const CourseCard = ({ course }) => {
  const [isEnrolled, setIsEnrolled] = useState(() => getEnrolledCourses().includes(course?.id));

  const toggleEnrollment = (e) => {
    e.preventDefault(); // Stop nested Link from activating
    if (isEnrolled) {
      unenrollFromCourse(course.id);
      setIsEnrolled(false);
    } else {
      enrollInCourse(course.id);
      setIsEnrolled(true);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={slideUp}
      whileHover={{ y: -6, transition: { type: 'spring', damping: 20, stiffness: 300 } }}
      className="h-full"
    >
      <Link to={`/course/${course.id}`} className="group flex flex-col bg-white dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10 h-full cursor-pointer">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
          <div className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-primary dark:text-secondary" />
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{course.duration}</span>
          </div>
        </div>
      </div>

      <div className="p-6 grow flex flex-col">
        <div className="flex items-center space-x-1.5 mb-3">
          <Tag className="w-4 h-4 text-slate-400 dark:text-slate-500" />
          <span className="text-xs font-semibold text-primary dark:text-secondary uppercase tracking-wider">
            {course.category}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-4 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
          {course.title}
        </h3>
        
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 dark:border-slate-700/50 pt-4">
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">SkillBridge Partner</span>
          <motion.div 
            variants={scaleOnHover}
            whileHover="hover"
            whileTap="tap"
            onClick={toggleEnrollment}
            className={`text-sm font-semibold px-4 py-2 rounded-xl transition-colors text-center shadow-sm select-none ${
              isEnrolled 
                ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:hover:bg-emerald-500/30' 
                : 'text-white bg-slate-900 hover:bg-primary dark:bg-primary dark:hover:bg-primary'
            }`}
          >
            {isEnrolled ? 'Enrolled ✓' : 'Enroll Now'}
          </motion.div>
        </div>
      </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
