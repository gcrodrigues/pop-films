import { mockMovieList } from '@/tests/_domain/test'
import { faker } from '@faker-js/faker'
import axios from 'axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue({
    data: mockMovieList(),
    status: faker.random.numeric(),
  })

  return mockedAxios
}
