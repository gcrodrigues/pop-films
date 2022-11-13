import { HttpGetParams } from '@/data/protocols/http'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { Movie } from '@/domain/entities'
import axios from 'axios'

export class AxiosHttpClient {
  async get(params: HttpGetParams): Promise<HttpResponse<Movie[]>> {
    const httpResponse = await axios.get(params.url)

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}
