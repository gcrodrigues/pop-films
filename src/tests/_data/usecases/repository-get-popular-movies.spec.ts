import { HttpStatusCode } from '@/data/protocols/http/http-client'
import { RepositoryGetPopularMovies } from '@/data/usecases/repository-get-popular-movies'
import { Movie } from '@/domain/entities'
import { InvalidCredentialsError } from '@/domain/errors'
import { mockMovieList } from '@/tests/_domain/test'
import { faker } from '@faker-js/faker'
import { HttpClientSpy } from '../test'

type SutTypes = {
  sut: RepositoryGetPopularMovies
  httpClientSpy: HttpClientSpy<Movie[]>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<Movie[]>()
  const sut = new RepositoryGetPopularMovies(url, httpClientSpy)

  return {
    sut,
    httpClientSpy,
  }
}

describe('RepositoryGetPopularMovies', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    await sut.get()

    expect(httpClientSpy.url).toBe(url)
  })

  test('Should throw InvalidCredentialsError if HttpsGetClient returns 401', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    }
    const promise = sut.get()

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should return a movie list if HttpGetClient return 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockMovieList()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    }
    const movies = await sut.get()

    expect(movies).toBe(httpResult)
  })
})
