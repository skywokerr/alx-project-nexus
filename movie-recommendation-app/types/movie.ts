export interface Movie {
  id: number;
  title: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  overview?: string | null;
  vote_average: number;
  vote_count?: number;
  release_date?: string | null;
  genre_ids?: number[];
  popularity?: number;
  original_title?: string;
  adult?: boolean;
  [key: string]: any;
}

export type MovieResult = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
