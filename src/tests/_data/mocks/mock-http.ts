import { HttpRequest } from '@/data/protocols/http'
import { faker } from '@faker-js/faker'

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.helpers.arrayElement(['get', 'post', 'put', 'delete']),
  body: faker.helpers.objectValue({}),
  headers: faker.helpers.objectValue({}),
})
