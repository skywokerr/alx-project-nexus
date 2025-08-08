import requests
from django.conf import settings

class TMDBService:
    BASE_URL = "https://api.themoviesdb.org/3"
    
    @classmethod
    def get_trending_movies(cls):
        response = requests.get(
            f"{cls.BASE_URL}/trending/movie/week",
            params={"api_key": settings.TMDB_API_KEY}
        )
        return response.json()
    
from django.core.cache import cache

def get_cached_movies():
    movies = cache.get('trending_movies')
    if not movies:
        movies = TMDBService.get_trending_movies()
        cache.set('trending_movies', movies, timeout=3600)  # 1 hour cache
    return movies