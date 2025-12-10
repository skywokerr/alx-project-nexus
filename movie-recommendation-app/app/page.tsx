'use client';

import { MovieGrid } from '@/components/MovieGrid/MovieGrid';
import { SearchBar } from '@/components/Search/SearchBar';
import { useMovies } from '@/hooks/useMovies';
import { useFavorites } from '@/hooks/useFavorites';
import { Container, Section, Title } from '@/styles/Home.styles';

export default function HomePage() {
  const { trending, recommendations, loading } = useMovies();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <Container>
      <SearchBar />
      
      <Section>
        <Title>Trending Movies</Title>
        <MovieGrid 
          movies={trending}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          loading={loading}
        />
      </Section>

      <Section>
        <Title>Recommended For You</Title>
        <MovieGrid 
          movies={recommendations}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          loading={loading}
        />
      </Section>

      {favorites.length > 0 && (
        <Section>
          <Title>Your Favorites</Title>
          <MovieGrid 
            movies={favorites.slice(0, 6)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </Section>
      )}
    </Container>
  );
}