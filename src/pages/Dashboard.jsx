import { useAuth } from '../context/AuthContext';
import { BookOpen, Star, Clock, Trophy, PlayCircle } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import RecommendedCourses from '../components/RecommendedCourses';
import coursesData from '../data/courses.json';
import { getEnrolledCourses, getRecentlyViewed } from '../services/history';
import AnimatedPage from '../components/AnimatedPage';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const enrolledCourses = getEnrolledCourses().map(id => coursesData.find(c => c.id === id)).filter(Boolean);
  const recentCourses = getRecentlyViewed().map(id => coursesData.find(c => c.id === id)).filter(Boolean).slice(0, 4);

  const totalHours = enrolledCourses.reduce((acc, course) => {
    // Naively extract "2" from "2 Hours"
    const hrs = parseInt(course.duration?.split(' ')[0]) || 0;
    return acc + hrs;
  }, 0);

  const stats = [
    { label: 'Courses Enrolled', value: enrolledCourses.length, icon: BookOpen, color: 'text-primary', bg: 'bg-primary/5 dark:bg-primary/10' },
    { label: 'Hours Learned', value: totalHours, icon: Clock, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
    { label: 'Certificates', value: '0', icon: Trophy, color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-500/10' },
    { label: 'Recently Viewed', value: recentCourses.length, icon: Star, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10' }
  ];

  return (
    <AnimatedPage>
      <div className="grow bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Banner */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-3xl p-8 mb-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                Welcome back, <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary dark:from-secondary dark:to-secondary">{currentUser?.displayName || 'Student'}</span>! 👋
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Ready to continue your learning journey? Pick up right where you left off.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-2xl p-6 flex items-center shadow-sm">
                  <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mr-4 shrink-0`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Recently Viewed */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-purple-100 dark:bg-purple-500/20 p-2 rounded-lg">
                <PlayCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Continue Learning</h2>
            </div>
            
            {recentCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentCourses.map(course => <CourseCard key={`recent-${course.id}`} course={course} />)}
              </div>
            ) : (
              <div className="bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-center py-12 rounded-2xl border-dashed">
                <Star className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-300 mb-1">No recent activity</h3>
                <p className="text-slate-500 text-sm">Courses you view will appear here for quick access.</p>
              </div>
            )}
          </div>

          {/* Enrolled Courses */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-primary dark:text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">My Enrollments</h2>
            </div>
            
            {enrolledCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {enrolledCourses.map(course => <CourseCard key={`enrolled-${course.id}`} course={course} />)}
              </div>
            ) : (
              <div className="bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 text-center py-16 rounded-2xl border-dashed">
                <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 dark:text-slate-300 mb-1">Not enrolled in any courses</h3>
                <p className="text-slate-500">Explore the catalog to find your first skill to master.</p>
              </div>
            )}
          </div>

        </div>
      </div>
      
      {/* Universal Recommendations Engine inserted natively into layout flow */}
      <RecommendedCourses />
    </AnimatedPage>
  );
};

export default Dashboard;
