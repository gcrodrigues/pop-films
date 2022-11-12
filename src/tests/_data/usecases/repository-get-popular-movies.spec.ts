import { RepositoryGetPopularMovies } from '@/data/usecases/repository-get-popular-movies';
import { faker } from '@faker-js/faker';
import { HttpGetClientSpy } from '../test';

describe('RepositoryGetPopularMovies', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url();
    const httpGetClientSpy = new HttpGetClientSpy();
    const sut = new RepositoryGetPopularMovies(url, httpGetClientSpy);

    await sut.get();

    expect(httpGetClientSpy.url).toBe(url);
  });
});
