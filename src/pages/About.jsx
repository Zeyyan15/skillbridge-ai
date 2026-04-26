import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const About = () => {
  return (
    <AnimatedPage className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 dark:bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            About SkillBridge AI
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">
            Bridging the gap between raw potential and professional success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="bg-primary/10 dark:bg-primary/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary dark:text-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We exist to transform ambitious students into high-earning professionals. By offering curated, AI-powered micro-courses, we dismantle geographical and financial barriers to premier education.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="bg-indigo-100 dark:bg-indigo-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To become the standard toolkit for youth empowerment across the developing world, making digital economy participation universally accessible and fundamentally straightforward.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm md:col-span-1">
            <div className="bg-emerald-100 dark:bg-emerald-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Problem We Solve</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Countless students possess raw talent but lack structured roadmaps to monetize their skills. Traditional education is slow; we are agile, targeting immediate freelance and remote earning pipelines.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-linear-to-r from-primary to-secondary dark:from-blue-900 dark:to-indigo-900 rounded-3xl p-10 sm:p-14 text-center shadow-xl">
          <h2 className="text-3xl font-extrabold text-white mb-6">Our Core Goal</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
            To rapidly deploy students into the global gig economy. We don't just teach skills; we teach you how to <span className="text-white font-bold border-b-2 border-blue-400">earn immediately</span> using them.
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
