import React from 'react';
import { Movie } from '@/types/movie';
import { MovieCard } from '@/components/MovieCard/MovieCard';

interface MovieGridProps {
  movies: Movie[];
  favorites: Movie[];
  onToggleFavorite: (movie: Movie) => void;
  loading?: boolean;
}

export const MovieGrid: React.FC<MovieGridProps> = ({ movies, favorites, onToggleFavorite, loading }) => {
  if (loading) {
    return <div>Loading movies...</div>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.some(fav => fav.id === movie.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};
