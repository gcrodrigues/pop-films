import { HttpGetClient, HttpGetParams } from '@/data/protocols/http'
import {
  HttpResponse,
  HttpStatusCode,
} from '@/data/protocols/http/http-response'

export class HttpGetClientSpy implements HttpGetClient {
  url?: string
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent,
  }

  async get(params: HttpGetParams): Promise<HttpResponse> {
    this.url = params.url
    return Promise.resolve(this.response)
  }
}
