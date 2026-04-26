import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    // Mock network request delay
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <AnimatedPage className="bg-slate-50 dark:bg-slate-950 py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 dark:bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">
            Have questions about a course, pricing, or enterprise plans? Reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Contact Info */}
          <div className="md:col-span-2 bg-linear-to-b from-primary to-secondary-hover rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Direct Support</h2>
              <p className="text-blue-100 mb-12 leading-relaxed">
                Our support mechanics are entirely handled in-house to guarantee you receive the absolute best technical guidance possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-200 mr-4 shrink-0" />
                  <span className="text-lg font-medium">support@skillbridgeai.com</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-blue-200 mr-4 shrink-0" />
                  <span className="text-lg font-medium">24/7 Priority Inbox</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-500">
                <div className="bg-emerald-100 dark:bg-emerald-500/20 p-4 rounded-full mb-6">
                  <Send className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-slate-500 dark:text-slate-400">Our support team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-500">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-900 dark:text-white placeholder-slate-400 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-linear-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-white font-semibold rounded-xl transition-all shadow-md shadow-primary/20 text-center flex items-center justify-center cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
