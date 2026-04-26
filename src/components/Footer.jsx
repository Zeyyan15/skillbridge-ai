import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-primary-hover to-secondary-hover dark:from-secondary dark:to-secondary-hover">
                SkillBridge AI
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">
              Empowering students with AI-curated micro-courses to master tech and soft skills. Build your future today.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors">Courses</Link></li>
              <li><Link to="/login" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors">Sign In</Link></li>
              <li><Link to="/login" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/company" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors">Our Company</Link></li>
              <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} SkillBridge AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
