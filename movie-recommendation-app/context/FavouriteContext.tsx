import React, { createContext, useContext, useEffect, useState } from 'react';
import { Movie } from '@/types/movie';

interface FavoritesContextType {
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
  isFavorite: (movieId: number) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('movie-favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const saveToStorage = (items: Movie[]) => {
    localStorage.setItem('movie-favorites', JSON.stringify(items));
  };

  const toggleFavorite = (movie: Movie) => {
    setFavorites(prev => {
      const exists = prev.find(f => f.id === movie.id);
      let newFavorites;
      
      if (exists) {
        newFavorites = prev.filter(f => f.id !== movie.id);
      } else {
        newFavorites = [...prev, movie];
      }
      
      saveToStorage(newFavorites);
      return newFavorites;
    });
  };

  const isFavorite = (movieId: number) => {
    return favorites.some(f => f.id === movieId);
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('movie-favorites');
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};