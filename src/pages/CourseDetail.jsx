import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchVideos } from '../services/youtube';
import { saveRecentlyViewed } from '../services/history';
import coursesData from '../data/courses.json';
import { PlayCircle, Clock, Tag, ArrowLeft, Loader2 } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id.toString() === id) || null;
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  // If no course is found, loading can inherently be false
  const [loading, setLoading] = useState(!!course);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!course) return;

    saveRecentlyViewed(course.id);

    let isMounted = true;
    const loadVideos = async () => {
      setLoading(true);
      // Build optimized youtube query leveraging the JSON parameters
      const searchQuery = `${course.title} ${course.category} full course tutorial`;
      const fetched = await fetchVideos(searchQuery);
      
      if (isMounted) {
        setVideos(fetched);
        if (fetched && fetched.length > 0) {
          setActiveVideo(fetched[0]);
        }
        setLoading(false);
      }
    };
    
    loadVideos();
    return () => { isMounted = false; };
  }, [course]);

  if (loading && !course) {
    return (
      <AnimatedPage className="items-center justify-center bg-slate-50 dark:bg-slate-950">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </AnimatedPage>
    );
  }

  if (!course) {
    return (
      <AnimatedPage className="items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Course Not Found</h2>
        <Link to="/courses" className="text-primary hover:text-primary dark:hover:text-secondary hover:underline flex items-center transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Catalog
        </Link>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage className="bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8 py-8 w-full overflow-hidden">
      <div className="max-w-360 mx-auto w-full">
        {/* Back Button */}
        <Link to="/courses" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-secondary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Catalog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 dark:bg-primary/10 text-blue-800 dark:text-secondary">
              <Tag className="w-3 h-3 mr-1" />
              {course.category}
            </span>
            <span className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {course.duration}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {course.title}
          </h1>
        </div>

        {/* Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          
          {/* Main Video Player (Left/Top) */}
          <div className="w-full lg:w-2/3 xl:w-3/4 flex flex-col gap-6 shrink-0">
            <div className="bg-slate-950 w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative aspect-video border border-slate-200 dark:border-slate-800">
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-900 animate-pulse">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : activeVideo ? (
                activeVideo.id.videoId.startsWith('dummy-') ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800 p-6 text-center select-none">
                    <PlayCircle className="w-16 h-16 text-slate-600 mb-4" />
                    <p className="text-white font-medium mb-2">Video Player Placeholder</p>
                    <p className="text-slate-400 text-sm max-w-sm">
                      YouTube API Key required to play real videos. Displaying responsive mock data layout frame.
                    </p>
                  </div>
                ) : (
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${activeVideo.id.videoId}?autoplay=1`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                )
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-500">
                  No video available
                </div>
              )}
            </div>
            
            {/* Active Video Info */}
            {activeVideo && (
              <div className="bg-white dark:bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                  {activeVideo.snippet.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
                  Published by <span className="text-slate-700 dark:text-slate-300">{activeVideo.snippet.channelTitle}</span>
                </p>
                <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed whitespace-pre-wrap">
                  {activeVideo.snippet.description || "No description provided for this video module."}
                </div>
              </div>
            )}
          </div>

          {/* Playlist Sidebar (Right/Bottom) */}
          <div className="w-full lg:w-1/3 xl:w-1/4 shrink-0">
            <div className="bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-[600px] lg:h-full lg:max-h-[800px] sticky top-24">
              <div className="p-5 border-b border-slate-100 dark:border-slate-800/50">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center">
                  <PlayCircle className="w-5 h-5 mr-2 text-primary" />
                  Course Modules
                </h3>
                <p className="text-sm text-slate-500 mt-1">{videos.length} learning resources available</p>
              </div>
              
              <div className="flex-1 overflow-y-auto p-3 space-y-2">
                {loading ? (
                  // Skeleton loader
                  Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex gap-3 p-2 rounded-xl h-24 bg-slate-100 dark:bg-slate-800/50 animate-pulse" />
                  ))
                ) : (
                  videos.map((video, idx) => {
                    const isActive = activeVideo?.id?.videoId === video.id?.videoId;
                    return (
                      <button
                        key={video.id.videoId + idx}
                        onClick={() => {
                          setActiveVideo(video);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full flex text-left gap-3 p-2.5 rounded-xl transition-all duration-200 group ${
                          isActive 
                            ? 'bg-primary/5 dark:bg-primary/10 relative overflow-hidden ring-1 ring-primary/20' 
                            : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:shadow-sm'
                        }`}
                      >
                        {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl z-10" />}
                        
                        <div className="relative w-32 shrink-0 aspect-video rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-900">
                          <img 
                            src={video.snippet.thumbnails?.medium?.url} 
                            alt="" 
                            className={`w-full h-full object-cover transition-opacity duration-300 ${isActive ? 'opacity-80' : 'opacity-100 group-hover:opacity-80'}`}
                          />
                          <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                            <PlayCircle className="w-6 h-6 text-white drop-shadow-md" />
                          </div>
                        </div>
                        
                        <div className="flex flex-col py-0.5 justify-start overflow-hidden">
                          <h4 className={`text-sm font-bold line-clamp-2 mb-1 ${isActive ? 'text-primary-hover dark:text-secondary' : 'text-slate-900 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-secondary'}`}>
                            {video.snippet.title}
                          </h4>
                          <span className="text-xs font-medium text-slate-500 truncate">
                            {video.snippet.channelTitle}
                          </span>
                        </div>
                      </button>
                    )
                  })
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default CourseDetail;
