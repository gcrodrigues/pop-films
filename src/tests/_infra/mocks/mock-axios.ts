import { faker } from '@faker-js/faker'

export const mockHttpResponse = (): any => ({
  data: faker.helpers.objectValue({}),
  status: faker.random.numeric(),
})
