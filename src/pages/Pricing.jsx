import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const Pricing = () => {
  return (
    <AnimatedPage className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 dark:bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">
            Choose the plan that fits your learning journey. Upgrade anytime as you grow your skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          
          {/* Basic Plan */}
          <div className="bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-8 sm:p-10 flex flex-col h-full">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Basic Plan</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6">Perfect for self-driven learners accessing our core catalog.</p>
            
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-slate-900 dark:text-white">₨ 1,500</span>
              <span className="text-lg text-slate-500 dark:text-slate-400 font-medium"> /month</span>
            </div>

            <Link to="/signup" className="w-full py-3.5 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-colors text-center mb-8">
              Start with Basic
            </Link>

            <div className="flex flex-col space-y-4 grow">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">Unlimited course access</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">Self-paced learning</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">Community forum access</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">Basic progress tracking</span>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-primary/10 dark:shadow-none p-8 sm:p-10 flex flex-col h-full border-2 border-primary dark:border-primary/50 transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-primary to-secondary text-white text-sm font-bold tracking-wide uppercase px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
              Most Popular
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Premium Mentorship</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6">For serious professionals seeking rapid deployment into tech.</p>
            
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-slate-900 dark:text-white">₨ 3,000</span>
              <span className="text-lg text-slate-500 dark:text-slate-400 font-medium"> /month</span>
            </div>

            <Link to="/signup" className="w-full py-3.5 px-4 bg-linear-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-white font-semibold rounded-xl transition-all shadow-md shadow-primary/20 text-center mb-8">
              Subscribe to Premium
            </Link>

            <div className="flex flex-col space-y-4 grow">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">Everything in Basic mapping</span>
              </div>
              <div className="flex items-start bg-primary/5 dark:bg-primary/10 p-2.5 -mx-2.5 rounded-lg border border-primary/10 dark:border-primary/20">
                <Check className="w-5 h-5 text-primary dark:text-secondary mr-3 shrink-0 mt-0.5" />
                <span className="text-primary dark:text-blue-300 font-semibold">1-on-1 Dedicated Mentorship</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">Job placement assistance network</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">Professional Resume reviews</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">Priority technical support</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center text-sm text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800/50 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800">
            <Info className="w-4 h-4 mr-2 text-slate-500 dark:text-slate-400" />
            No credit card required for standard account registration. Test drive our dashboard limits for free.
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Pricing;
