import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, LayoutDashboard, Search, Menu, X, ChevronDown, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { slideDown } from '../utils/animations';
import ThemeToggle from './ThemeToggle';
import coursesData from '../data/courses.json';
import { saveSearchQuery } from '../services/history';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Catalog', path: '/courses' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' }
];

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  const searchRef = useRef(null);
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const searchResults = coursesData.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav 
      variants={slideDown}
      initial="hidden"
      animate="visible"
      className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800/50 sticky top-0 z-50 w-full transition-colors shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Logo */}
          <Link to="/" className="flex items-center space-x-3 group shrink-0">
            <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300 transform group-hover:scale-105">
              <BrainCircuit className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 tracking-tight">
              SkillBridge AI
            </span>
          </Link>

          {/* Center: Search & Desktop Links */}
          <div className="hidden lg:flex flex-1 items-center justify-center px-8">
            <div className="flex items-center space-x-1 mr-8">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    location.pathname === link.path 
                    ? 'text-primary dark:text-secondary bg-primary/5 dark:bg-secondary/10' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {currentUser && (
                <Link
                  to="/dashboard"
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    location.pathname === '/dashboard' 
                    ? 'text-primary dark:text-secondary bg-primary/5 dark:bg-secondary/10' 
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  Dashboard
                </Link>
              )}
            </div>

            {/* Centered Search Bar */}
            <div className="relative w-full max-w-sm group" ref={searchRef}>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                className="block w-full pl-11 pr-4 py-2.5 border border-slate-200 dark:border-slate-700/50 rounded-full bg-white dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm shadow-sm hover:shadow-md"
              />
              {showResults && searchQuery.trim() !== '' && (
                <div className="absolute top-full mt-3 w-full max-h-[60vh] overflow-y-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 z-50">
                  <div className="p-2">
                    {searchResults.length > 0 ? (
                      searchResults.map(course => (
                        <button
                          key={course.id}
                          onClick={() => {
                            saveSearchQuery(searchQuery);
                            saveSearchQuery(course.category);
                            setShowResults(false);
                            setSearchQuery('');
                            navigate(`/course/${course.id}`);
                          }}
                          className="w-full text-left flex items-center p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-xl transition-colors group/item"
                        >
                          <img src={course.thumbnail} alt={course.title} className="w-12 h-12 rounded-lg object-cover mr-4 shrink-0 shadow-sm" />
                          <div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors line-clamp-1">{course.title}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{course.category} • {course.duration}</div>
                          </div>
                        </button>
                      ))
                    ) : (
                      <div className="p-8 text-center">
                        <Search className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                        <span className="text-sm font-medium text-slate-900 dark:text-slate-300 block">No results found</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">Try adjusting your keywords</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center space-x-5 shrink-0">
            <ThemeToggle />
            
            {currentUser ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-2 pl-2 pr-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 bg-white dark:bg-slate-800 hover:shadow-md transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-inner">
                    {(currentUser.displayName || currentUser.email || 'U').charAt(0).toUpperCase()}
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                </button>

                <AnimatePresence>
                  {isProfileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 py-2 z-50 origin-top-right"
                    >
                      <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700/50 mb-2">
                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{currentUser.displayName || 'User'}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{currentUser.email}</p>
                      </div>
                      <Link
                        to="/dashboard"
                        className="flex items-center px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4 mr-3" /> Dashboard
                      </Link>
                      <button
                        onClick={logout}
                        className="w-full flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                      >
                        <LogOut className="w-4 h-4 mr-3" /> Sign out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-secondary transition-colors px-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                >
                  Start Free
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search catalog..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchResults.length > 0) {
                      navigate(`/course/${searchResults[0].id}`);
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="block w-full pl-11 pr-4 py-3 border border-slate-200 dark:border-slate-700 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col space-y-2">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="px-4 py-3 text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                {currentUser && (
                  <Link
                    to="/dashboard"
                    className="px-4 py-3 text-base font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors flex items-center"
                  >
                    <LayoutDashboard className="w-5 h-5 mr-3 text-primary" /> Dashboard
                  </Link>
                )}
              </div>

              {/* Mobile Auth */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col space-y-3">
                {currentUser ? (
                  <div className="flex items-center justify-between px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold shadow-inner">
                        {(currentUser.displayName || currentUser.email || 'U').charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">{currentUser.displayName || 'User'}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{currentUser.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={logout}
                      className="p-2 text-slate-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10"
                    >
                      <LogOut className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="w-full text-center px-4 py-3 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="w-full text-center bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 rounded-xl font-bold shadow-lg shadow-primary/20"
                    >
                      Start Free Trial
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
