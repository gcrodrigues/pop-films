import axios from 'axios'
import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import { mockAxios } from '../../test/mock-axios'

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
  test('Should call axios with correct url and verb', async () => {
    const url = faker.internet.url()
    const { sut, mockedAxios } = makeSut()
    await sut.get({ url })

    expect(mockedAxios.get).toHaveBeenCalledWith(url)
  })

  test('Should return the correct statsuCode and body', () => {
    const url = faker.internet.url()
    const { sut, mockedAxios } = makeSut()
    const promise = sut.get({ url })

    expect(promise).toEqual(mockedAxios.get.mock.results[0].value)
  })
})
