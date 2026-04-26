const HISTORY_KEY = 'sb_search_history';
const ENROLLED_KEY = 'sb_enrolled_courses';
const RECENT_KEY = 'sb_recently_viewed';

export const saveSearchQuery = (query) => {
  if (!query || query.trim().length < 2) return;
  const normalized = query.trim().toLowerCase();
  
  try {
    const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    // Keep unique entries, move newest to front, max 10 items
    const newHistory = [normalized, ...history.filter(q => q !== normalized)].slice(0, 10);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
  } catch (error) {
    console.warn("Could not save to localStorage", error);
  }
};

export const getSearchHistory = () => {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch (error) {
    console.warn("Error reading localStorage", error);
    return [];
  }
};

export const getEnrolledCourses = () => {
  try { return JSON.parse(localStorage.getItem(ENROLLED_KEY) || '[]'); } 
  catch { return []; }
};

export const enrollInCourse = (courseId) => {
  try {
    const enrolled = getEnrolledCourses();
    if (!enrolled.includes(courseId)) {
      localStorage.setItem(ENROLLED_KEY, JSON.stringify([...enrolled, courseId]));
    }
  } catch (e) { console.warn(e); }
};

export const unenrollFromCourse = (courseId) => {
  try {
    const enrolled = getEnrolledCourses();
    localStorage.setItem(ENROLLED_KEY, JSON.stringify(enrolled.filter(id => id !== courseId)));
  } catch (e) { console.warn(e); }
};

export const getRecentlyViewed = () => {
  try { return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'); } 
  catch { return []; }
};

export const saveRecentlyViewed = (courseId) => {
  if (!courseId) return;
  try {
    const recent = getRecentlyViewed();
    const newRecent = [courseId, ...recent.filter(id => id !== courseId)].slice(0, 8); // max 8
    localStorage.setItem(RECENT_KEY, JSON.stringify(newRecent));
  } catch (e) { console.warn(e); }
};
