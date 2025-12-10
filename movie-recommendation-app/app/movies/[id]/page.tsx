'use client';

import { useEffect, useState } from 'react';
import { getMovieDetails, getSimilarMovies } from '@/utils/api';
import { MovieGrid } from '@/components/MovieGrid/MovieGrid';
import { Movie } from '@/types/movie';

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

export default function MoviePage({ params }: any) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const id = params?.id;

  useEffect(() => {
    if (!id) return;
    
    const fetchData = async () => {
      try {
        const [movieData, similarData] = await Promise.all([
          getMovieDetails(id),
          getSimilarMovies(id)
        ]);
        setMovie(movieData);
        setSimilarMovies(similarData);
      } catch (error) {
        console.error('Failed to fetch movie data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Rating: {movie.vote_average}/10</p>
      </div>
      
      {similarMovies.length > 0 && (
        <section>
          <h2>Similar Movies</h2>
          <MovieGrid 
            movies={similarMovies}
            favorites={[]}
            onToggleFavorite={() => {}}
          />
        </section>
      )}
    </div>
  );
}