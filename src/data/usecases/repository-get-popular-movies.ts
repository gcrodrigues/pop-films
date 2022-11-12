import { ListPopularMovies } from '@/domain/usecases/list-popular-movies';
import { HttpGetClient } from '../protocols/http';

export class RepositoryGetPopularMovies {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async get() {
    await this.httpGetClient.get({ url: this.url });

    return Promise.resolve();
  }
}
