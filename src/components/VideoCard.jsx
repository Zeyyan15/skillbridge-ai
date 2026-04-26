import { ExternalLink, Play } from 'lucide-react';

const VideoCard = ({ video }) => {
  const { id, snippet } = video;
  const videoId = id?.videoId;
  
  if (!videoId || !snippet) return null;

  return (
    <div className="group relative flex flex-col bg-white dark:bg-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-primary/30 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 h-full">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url}
          alt={snippet.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-slate-900/20 dark:bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/90 dark:bg-primary/90 backdrop-blur-md flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300 z-10">
            <Play className="w-5 h-5 text-primary dark:text-white ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      <div className="p-5 grow flex flex-col">
        <h3 
          className="text-slate-900 dark:text-white font-semibold text-base line-clamp-2 leading-tight mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors"
          dangerouslySetInnerHTML={{ __html: snippet.title }}
        />
        
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 grow">
          {snippet.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400 px-3 py-1 bg-slate-100 dark:bg-slate-900/50 rounded-full border border-slate-200 dark:border-white/5">
            {snippet.channelTitle}
          </span>
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-xs font-medium text-primary dark:text-secondary hover:text-primary-hover dark:hover:text-blue-300 bg-primary/5 dark:bg-primary/10 hover:bg-primary/10 dark:hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-colors border border-primary/10 dark:border-primary/20"
          >
            <span>Watch</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
