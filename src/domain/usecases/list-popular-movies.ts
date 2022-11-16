import { Movie } from '@/domain/entities'
import { UnexpectedError } from '../errors'

export interface ListPopularMovies {
  get: () => Promise<Movie[] | UnexpectedError>
}
