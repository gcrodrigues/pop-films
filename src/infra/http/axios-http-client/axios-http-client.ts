import { HttpGetClient, HttpGetParams } from '@/data/protocols/http'
import { HttpResponse } from '@/data/protocols/http/http-response'
import axios from 'axios'

export class AxiosHttpClient implements HttpGetClient<any> {
  async get(params: HttpGetParams): Promise<HttpResponse<any>> {
    const httpResponse = await axios.get(params.url)

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    }
  }
}
