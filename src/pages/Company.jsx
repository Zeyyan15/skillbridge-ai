import { Globe2, Briefcase, GraduationCap } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const Company = () => {
  return (
    <AnimatedPage className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Company Overview
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">
            SkillBridge AI is a next-generation EdTech platform architected to democratize digital earning mechanics.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 relative z-10">Our Business Model</h2>
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-lg relative z-10 leading-relaxed">
            <p className="mb-4">
              We operate on a transparent, subscription-based learning ecosystem. Rather than charging thousands of arbitrary fees for individual courses, our learners gain unrestricted pipeline access to a continually evolving vault of micro-courses engineered for direct market application.
            </p>
            <p>
              By utilizing fractionalized API ingestion from platforms like YouTube, combined with our algorithmic recommendation matrix, we keep our operating overhead aggressively low. We directly pass these savings entirely onto the student demographic through our highly disruptive standard tier.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Our SDG Commitments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm text-center transition-transform hover:-translate-y-1">
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Quality Education</h3>
              <p className="text-slate-500 dark:text-slate-400">Providing accessible, equitable, and modern technical knowledge pipelines absent from traditional institutions.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm text-center transition-transform hover:-translate-y-1">
              <Briefcase className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Decent Work & Growth</h3>
              <p className="text-slate-500 dark:text-slate-400">Fostering sustained economic expansion by inserting thousands of capable youths directly into remote global labor networks.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm text-center transition-transform hover:-translate-y-1">
              <Globe2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Reduced Inequalities</h3>
              <p className="text-slate-500 dark:text-slate-400">Drastically lowering the financial barriers to elite technical paradigms usually reserved for localized tech hubs.</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Company;
