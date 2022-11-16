import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RepositoryGetPopularMovies } from '@/data/usecases/repository-get-popular-movies'
import { ListPopularMovies } from '@/domain/usecases'

export const makeGetPopularMovies = (): ListPopularMovies =>
  new RepositoryGetPopularMovies(
    makeApiUrl('/movie/popular'),
    makeAxiosHttpClient()
  )
