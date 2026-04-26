import { useState } from 'react';
import coursesData from '../data/courses.json';
import CourseCard from '../components/CourseCard';
import { Search, Filter, BookOpen } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const categories = ['All', 'Freelancing', 'Graphic Design', 'Content Writing', 'AI Tools', 'Social Media'];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <AnimatedPage className="bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-primary/10 dark:bg-primary/10 text-primary-hover dark:text-secondary px-4 py-1.5 rounded-full border border-primary/20 dark:border-primary/20 mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Course Catalog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Level up your skills with our curated courses
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Explore industry-leading programs designed to prepare you for the modern digital workforce.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-primary text-white shadow-md shadow-primary/25 border-transparent' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:text-primary dark:hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80 group shrink-0">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-3 border border-slate-200 dark:border-slate-700/50 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm shadow-sm"
            />
          </div>
        </div>

        {/* Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 border-dashed">
            <Filter className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-slate-900 dark:text-slate-300 mb-2">No courses found</h3>
            <p className="text-slate-500">Try adjusting your filters or search query.</p>
          </div>
        )}
        
      </div>
    </AnimatedPage>
  );
};

export default Courses;
