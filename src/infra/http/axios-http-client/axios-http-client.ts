import { HttpGetParams } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient {
  async get(params: HttpGetParams): Promise<void> {
    await axios.get(params.url)
  }
}
