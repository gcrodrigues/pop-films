import { HttpClient, HttpRequest } from '@/data/protocols/http'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-client'
import { faker } from '@faker-js/faker'

export class HttpClientSpy<R> implements HttpClient<R> {
  url?: string
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.noContent,
    body: faker.helpers.objectValue({}),
  }

  async request(params: HttpRequest): Promise<HttpResponse<R>> {
    this.url = params.url
    return Promise.resolve(this.response)
  }
}
