import { Movie } from '@/domain/entities'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { ListPopularMovies } from '@/domain/usecases'
import { HttpClient } from '../protocols/http'
import { HttpStatusCode } from '../protocols/http/http-client'

export class RepositoryGetPopularMovies implements ListPopularMovies {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<Movie[]>
  ) {}

  async get() {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        return new UnexpectedError()
    }
  }
}
