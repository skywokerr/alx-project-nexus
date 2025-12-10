
'use client';

import { Movie } from '@/types/movie';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const getTrendingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await api.get('/trending/movie/week');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const getMovieDetails = async (id: string): Promise<Movie | null> => {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const getSimilarMovies = async (id: string): Promise<Movie[]> => {
  try {
    const response = await api.get(`/movie/${id}/similar`);
    return response.data.results.slice(0, 6);
  } catch (error) {
    console.error('Error fetching similar movies:', error);
    return [];
  }
};