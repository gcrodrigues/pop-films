import { HttpGetClient, HttpGetParams } from '@/data/protocols/http'
import {
  HttpResponse,
  HttpStatusCode,
} from '@/data/protocols/http/http-response'
import { faker } from '@faker-js/faker'

export class HttpGetClientSpy<R> implements HttpGetClient<R> {
  url?: string
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.noContent,
    body: faker.helpers.objectValue({}),
  }

  async get(params: HttpGetParams): Promise<HttpResponse<R>> {
    this.url = params.url
    return Promise.resolve(this.response)
  }
}
