import { Briefcase, ArrowRight, Code, PenTool, Megaphone } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const Careers = () => {
  const roles = [
    {
      title: "Frontend Developer",
      type: "Full-time • Remote",
      icon: Code,
      desc: "Build next-generation responsive interfaces using React, Vite, and Tailwind."
    },
    {
      title: "Content Creator",
      type: "Part-time • Remote",
      icon: PenTool,
      desc: "Curate and structure high-impact micro-course curriculums from API sources."
    },
    {
      title: "Marketing Intern",
      type: "Internship • Remote",
      icon: Megaphone,
      desc: "Help us reach ambitious students across emerging markets."
    }
  ];

  return (
    <AnimatedPage className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Join Our Team
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">
            We're always looking for passionate individuals who want to democratize tech education.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-sm mb-16 text-center max-w-4xl mx-auto">
          <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Work With Us?</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            At SkillBridge AI, you don't just write code or copy—you actively participate in raising the earning potential of thousands of students. We offer fully remote setups, competitive compensation, and a culture of aggressive continuous learning.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Open Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full hover:border-primary/50 transition-colors">
                  <div className="bg-primary/5 dark:bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary dark:text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{role.title}</h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">{role.type}</p>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 grow leading-relaxed">{role.desc}</p>
                  
                  <button onClick={() => alert("Application portal opening soon!")} className="flex items-center text-primary dark:text-secondary font-semibold hover:text-primary-hover dark:hover:text-blue-300 transition-colors mt-auto group">
                    Apply Now <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Careers;
