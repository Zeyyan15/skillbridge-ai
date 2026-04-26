import { useState, useEffect } from 'react';
import { fetchVideos } from '../services/youtube';
import VideoCard from '../components/VideoCard';
import Hero from '../components/Hero';
import PopularCourses from '../components/PopularCourses';
import RecommendedCourses from '../components/RecommendedCourses';
import { saveSearchQuery } from '../services/history';
import { Search, Loader2 } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const Home = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (!query) return;
    const loadVideos = async () => {
      setLoading(true);
      const data = await fetchVideos(query);
      setVideos(data || []);
      setLoading(false);
      setHasSearched(true);
    };
    loadVideos();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== '') {
      setQuery(searchInput);
      saveSearchQuery(searchInput);
    }
  };

  return (
    <AnimatedPage>
      <Hero />
      <RecommendedCourses />
      <PopularCourses />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900 grow flex flex-col items-center">
        <div className="max-w-4xl w-full mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Find specific skills to learn
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Search our curated library of YouTube video courses perfectly tailored for your learning goals.
          </p>
          
          <form onSubmit={handleSearch} className="relative group max-w-2xl mx-auto shadow-xl shadow-primary/5 rounded-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-primary dark:group-focus-within:text-primary transition-colors" />
            </div>
            <input
              id="search-courses"
              type="text"
              className="block w-full pl-12 pr-32 py-4 border border-slate-200 dark:border-slate-700/50 rounded-2xl bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-lg"
              placeholder="e.g., Advanced React Patterns..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary-hover text-white font-medium rounded-xl px-6 transition-colors shadow-sm"
            >
              Search
            </button>
          </form>
        </div>

        <div className="w-full max-w-7xl mx-auto mt-8">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
              <p className="text-slate-500 dark:text-slate-400 font-medium">Curating the best content...</p>
            </div>
          ) : hasSearched ? (
            <>
              <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-white/10 gap-4">
                <h3 className="text-xl font-bold border-l-4 border-primary pl-3 text-slate-900 dark:text-white">
                  Results for: <span className="text-primary dark:text-secondary">{query}</span>
                </h3>
                <span className="text-sm text-slate-600 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
                  {videos.length} videos found
                </span>
              </div>

              {videos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {videos.map((video, idx) => (
                    <VideoCard key={video.id?.videoId || idx} video={video} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white dark:bg-slate-800/30 rounded-3xl border border-slate-200 dark:border-white/5 border-dashed shadow-sm">
                  <Search className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-slate-900 dark:text-slate-300 mb-2">No videos found</h3>
                  <p className="text-slate-500">Try a different search term to find what you need.</p>
                </div>
              )}
            </>
          ) : null}
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;
