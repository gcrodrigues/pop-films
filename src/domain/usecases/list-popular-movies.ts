import { Movie } from '@/domain/entities';

export interface ListPopularMovies {
  getPopular: () => Promise<Movie[] | null>;
}
