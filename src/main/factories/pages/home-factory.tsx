import { Home } from '@/presentation/pages'
import { makeGetPopularMovies } from '../usecases/get-popular-movies-factory'

export const MakeHome: React.FC = () => {
  return <Home listPopularMovies={makeGetPopularMovies()} />
}
