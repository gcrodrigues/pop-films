import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { RepositoryGetPopularMovies } from '@/data/usecases/repository-get-popular-movies'
import { InvalidCredentialsError } from '@/domain/errors'
import { faker } from '@faker-js/faker'
import { HttpGetClientSpy } from '../test'

type SutTypes = {
  sut: RepositoryGetPopularMovies
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
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
})
