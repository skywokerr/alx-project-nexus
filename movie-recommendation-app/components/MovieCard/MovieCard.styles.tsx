'use client';

import styled, { css } from 'styled-components';

export const Card = styled.article`
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  align-items: center;
`;

export const Poster = styled.img`
  width: 96px;
  height: 144px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  line-height: 1.2;
  font-weight: 600;
`;

export const Rating = styled.span`
  font-size: 0.9rem;
  color: #ffd700;
`;

export const FavoriteButton = styled.button<{ isFavorite?: boolean }>`
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