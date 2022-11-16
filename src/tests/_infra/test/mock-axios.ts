import { mockMovieList } from '@/tests/_domain/test'
import { faker } from '@faker-js/faker'
import axios from 'axios'
import { mockHttpResponse } from '../mocks/mock-axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.request.mockClear().mockResolvedValue(mockHttpResponse())

  return mockedAxios
}
