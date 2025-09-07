import axios from 'axios';
import Config from 'react-native-config';

// Simple API service with axios
const BASE_URL = Config.API_URL || 'https://api.musicapp.com/v1'; // Fallback URL

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    const message =
      error.response?.data?.message || error.message || 'Something went wrong';
    console.log('error', error);
    throw new Error(message);
  },
);

// HTTP Methods
export const get = url => {
  console.log('BASE_URL', BASE_URL);
  return api.get(url);
};

export const post = (url, data) => {
  return api.post(url, data);
};

export const put = (url, data) => {
  return api.put(url, data);
};

export const del = url => {
  return api.delete(url);
};

// Music functions
export const getSongs = (offset = 0, limit = 20) => {
  return get(
    `v3.0/tracks/?client_id=${Config.CLIENT_ID}&format=json&limit=${limit}&offset=${offset}`,
  );
};

export const getSongDetails = id => {
  return get(`/songs/${id}`);
};

export const searchSongs = query => {
  return get(`/songs/search?q=${encodeURIComponent(query)}`);
};

export const getTrendingSongs = () => {
  return get('/songs/trending');
};

// Default export with all functions
const apiService = {
  get,
  post,
  put,
  del,
  getSongs,
  getSongDetails,
  searchSongs,
  getTrendingSongs,
};

export default apiService;
