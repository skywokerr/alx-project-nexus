import React from 'react';
import { Movie } from '@/types/movie';
import { Card, Poster, Info, Title, Rating, FavoriteButton } from './MovieCard.styles';

interface MovieCardProps {
  movie: Movie;
  isFavorite: boolean;
  onToggleFavorite: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isFavorite, onToggleFavorite }) => {
  return (
    <Card>
      <Poster 
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/w300${movie.poster_path}`}
        alt={movie.title}
        loading="lazy"
      />
      <Info>
        <Title>{movie.title}</Title>
        <Rating>⭐ {movie.vote_average.toFixed(1)}</Rating>
        <p>{movie.release_date?.split('-')[0]}</p>
        <FavoriteButton
          onClick={() => onToggleFavorite(movie)}
          isFavorite={isFavorite}
        >
          {isFavorite ? '❤️' : '🤍'}
        </FavoriteButton>
      </Info>
    </Card>
  );
};