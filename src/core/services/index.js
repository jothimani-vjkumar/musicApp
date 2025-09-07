// Export API service and all functions
export { default as apiService } from './apiService';
export * from './apiService';

export const fetchSongs = async () => {
  try {
    const { getSongs } = await import('./apiService');
    const songs = await getSongs(1, 20);
    console.log('Songs:', songs);
    return songs;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};
