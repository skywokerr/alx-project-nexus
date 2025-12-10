'use client';

import { useState, useEffect } from 'react';
import { Movie } from '@/types/movie';

const FAVORITES_KEY = 'movie-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(FAVORITES_KEY);
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (err) {
        console.error('Failed to load favorites:', err);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie: Movie) => {
    setFavorites(prev => {
      const exists = prev.some(fav => fav.id === movie.id);
      if (exists) {
        return prev.filter(fav => fav.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  const isFavorite = (movie: Movie) => {
    return favorites.some(fav => fav.id === movie.id);
  };

  return { favorites, toggleFavorite, isFavorite };
};
