'use client';

import { useState, useEffect } from 'react';
import { Movie } from '@/types/movie';
import { getTrendingMovies } from '@/utils/api';

export const useMovies = () => {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setTrending(data);
        // For now, recommendations is the same as trending; you can customize later
        setRecommendations(data.slice(0, 6));
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch movies');
        setTrending([]);
        setRecommendations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { trending, recommendations, loading, error };
};
