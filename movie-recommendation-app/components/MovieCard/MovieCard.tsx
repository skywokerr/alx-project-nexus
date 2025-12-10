'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import { Movie } from '@/types/movie';

const Card = styled.article`
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  align-items: center;
`;

const Poster = styled.img`
  width: 96px;
  height: 144px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 600;
`;

const Rating = styled.span`
  font-size: 0.9rem;
  color: #ffd700;
`;

const FavoriteButton = styled.button<{ isFavorite?: boolean }>`
  margin-top: 8px;
  padding: 6px 8px;
  border-radius: 6px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.08s ease;

  &:active {
    transform: scale(0.98);
  }

  ${props => props.isFavorite ? css`filter: drop-shadow(0 0 6px rgba(255,0,0,0.25));` : ''}
`;

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

export { MovieCard };