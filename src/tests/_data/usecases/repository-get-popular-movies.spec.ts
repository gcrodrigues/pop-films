import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { RepositoryGetPopularMovies } from '@/data/usecases/repository-get-popular-movies'
import { Movie } from '@/domain/entities'
import { InvalidCredentialsError } from '@/domain/errors'
import { mockMovieList } from '@/tests/_domain/test'
import { faker } from '@faker-js/faker'
import { HttpGetClientSpy } from '../test'

type SutTypes = {
  sut: RepositoryGetPopularMovies
  httpGetClientSpy: HttpGetClientSpy<Movie[]>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<Movie[]>()
  const sut = new RepositoryGetPopularMovies(url, httpGetClientSpy)

  return {
    sut,
    httpGetClientSpy,
  }
}

describe('RepositoryGetPopularMovies', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.get()

    expect(httpGetClientSpy.url).toBe(url)
  })

  test('Should throw InvalidCredentialsError if HttpsGetClient returns 401', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    }
    const promise = sut.get()

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should return a movie list if HttpGetClient return 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const httpResult = mockMovieList()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    }
    const movies = await sut.get()

    expect(movies).toBe(httpResult)
  })
})
