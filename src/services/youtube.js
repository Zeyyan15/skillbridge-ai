import axios from 'axios';

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || "dummy";
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Cache expiration logic (24 hours)
const CACHE_KEY_PREFIX = 'sb_youtube_';
const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000;

export const fetchVideos = async (query = 'coding skills') => {
  const cacheKey = `${CACHE_KEY_PREFIX}${query.toLowerCase().replace(/\s+/g, '_')}`;
  
  // 1. Check Cache First
  try {
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      const { timestamp, items } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_EXPIRY_MS) {
        console.log("Serving from Youtube cache:", query);
        return items;
      }
    }
  } catch (err) {
    console.warn("Storage read error", err);
  }

  // 2. Fetch from API if not cached or expired
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        maxResults: 12,
        key: YOUTUBE_API_KEY,
        q: query,
        type: 'video'
      }
    });

    const items = response.data.items;

    // Save to Cache
    try {
      localStorage.setItem(cacheKey, JSON.stringify({
        timestamp: Date.now(),
        items
      }));
    } catch (err) {
      console.warn("Storage write error", err);
    }

    return items;
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    
    // Return dummy data fallback gracefully
    return Array.from({ length: 12 }).map((_, i) => ({
      id: { videoId: `dummy-${i}` },
      snippet: {
        title: `Mock Video Title ${i + 1} for ${query}`,
        description: 'This is a placeholder video since the YouTube API failed or no key was provided.',
        thumbnails: { medium: { url: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&q=80' } },
        channelTitle: `Mock Channel ${i + 1}`
      }
    }));
  }
};
