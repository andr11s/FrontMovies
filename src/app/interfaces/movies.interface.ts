import { moviesApi } from './moviesApi.interface';

export class movie {
  movies: moviesApi[];
  userId: string;
  movie_id: string;
  description: string;

  constructor() {
    this.userId = '';
    this.movies = [];
    this.movie_id = '';
    this.description = '';
  }
}

export interface GenreMovie {
  id: number;
  name: string;
}

export interface SearchMovie {
  with_genres: string;
  page: string;
}

export interface SearchMovieName {
  query: string;
  page: string;
}
