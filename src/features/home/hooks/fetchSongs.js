/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getSongs } from '../../../core/services';

const limit = 30;

const useFetchSongs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getSongs(offset, limit);
      setSongs(data?.results);
    } catch (err) {
      setError(err.message);
      console.log('Error fetching songs:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreData = async () => {
    try {
      setLoadingMore(true);
      const newOffset = offset + limit;
      setOffset(newOffset);
      const data = await getSongs(newOffset, limit);
      const newSongs = [...songs, ...data?.results];
      setSongs(newSongs);
    } catch (err) {
      setError(err.message);
      console.log('Error fetching more songs:', err);
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { songs, loading, error, loadingMore, fetchMoreData };
};

export default useFetchSongs;
