import axios from 'axios'
import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from '@/infra/http/axios-http-client'
import { mockAxios } from '../../test/mock-axios'
import { mockHttpResponse } from '../../mocks/mock-axios'
import { mockHttpRequest } from '@/tests/_data/mocks'

jest.mock('axios')

type SutType = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}
const makeSut = (): SutType => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()

  return {
    sut,
    mockedAxios,
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockHttpRequest()
    const { sut, mockedAxios } = makeSut()

    await sut.request(request)

    expect(mockedAxios.request).toHaveBeenCalledWith({
      url: request.url,
      data: request.body,
      headers: request.headers,
      method: request.method,
    })
  })
})
