import { RepositoryGetPopularMovies } from '@/data/usecases/repository-get-popular-movies';
import { faker } from '@faker-js/faker';
import { HttpGetClientSpy } from '../test';

type SutTypes = {
  sut: RepositoryGetPopularMovies;
  httpGetClientSpy: HttpGetClientSpy;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy();
  const sut = new RepositoryGetPopularMovies(url, httpGetClientSpy);

  return {
    sut,
    httpGetClientSpy,
  };
};

describe('RepositoryGetPopularMovies', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpGetClientSpy } = makeSut(url);
    await sut.get();

    expect(httpGetClientSpy.url).toBe(url);
  });
});
