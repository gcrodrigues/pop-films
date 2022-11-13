import { Movie } from '@/domain/entities'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { HttpGetClient } from '../protocols/http'
import { HttpStatusCode } from '../protocols/http/http-response'

export class RepositoryGetPopularMovies {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<Movie[]>
  ) {}

  async get() {
    const httpResponse = await this.httpGetClient.get({ url: this.url })

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
