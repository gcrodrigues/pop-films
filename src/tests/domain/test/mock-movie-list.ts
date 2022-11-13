import { Movie } from '@/domain/entities'
import { faker } from '@faker-js/faker'

export const mockMovieList = (): Movie[] => [
  {
    adult: faker.datatype.boolean(),
    backdrop_path: faker.datatype.string(),
    id: faker.datatype.number(),
    overview: faker.datatype.string(),
    poster_path: faker.datatype.string(),
    release_date: faker.datatype.string(),
    title: faker.datatype.string(),
    vote_average: faker.datatype.number(),
    vote_count: faker.datatype.number(),
  },
]
