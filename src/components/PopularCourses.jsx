import { Code2, Palette, Users, MonitorSmartphone, Brain, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideUp, staggerContainer } from '../utils/animations';

const courses = [
  { icon: Code2, title: "Web Development", desc: "Master React, Node, and modern tools", color: "text-primary", bg: "bg-primary/5 dark:bg-primary/10" },
  { icon: Palette, title: "Graphic Design", desc: "Learn UI/UX, Figma & Photoshop", color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-500/10" },
  { icon: Users, title: "Soft Skills", desc: "Communication & Leadership", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
  { icon: MonitorSmartphone, title: "App Development", desc: "Build iOS and Android apps", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
  { icon: Brain, title: "AI & Machine Learning", desc: "Python, Data Science & GenAI", color: "text-secondary", bg: "bg-indigo-50 dark:bg-indigo-500/10" },
  { icon: TrendingUp, title: "Digital Marketing", desc: "SEO, Social Media & Digital Ads", color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-500/10" }
];

const PopularCourses = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="py-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 variants={slideUp} className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Popular Learning Paths
          </motion.h2>
          <motion.p variants={slideUp} className="text-lg text-slate-600 dark:text-slate-400">
            Explore the most demanded skills in the job market right now.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <motion.div 
                key={idx}
                variants={slideUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-colors duration-300 cursor-pointer shadow-sm"
                onClick={() => {
                  const input = document.getElementById('search-courses');
                  if (input) {
                    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(input, course.title);
                    input.dispatchEvent(new Event('input', { bubbles: true}));
                    input.focus();
                    input.form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <div className={`w-14 h-14 rounded-2xl ${course.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${course.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {course.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {course.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default PopularCourses;
