import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  GenreMovie,
  movie,
  MoviesFavorites,
  SearchMovie,
  SearchMovieName,
} from '../interfaces/movies.interface';
import { moviesApi } from '../interfaces/moviesApi.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = environment.API;
  private ContadorPage = 1;
  public cargando: boolean;

  constructor(private httpClient: HttpClient) {}

  getMovies(genre: SearchMovie): Observable<moviesApi[]> {
    const params = { ...genre };
    return this.httpClient
      .get<moviesApi[]>(`${this.baseUrl}/movies/getSearchGenren`, {
        params,
      })
      .pipe(map((response: any) => response.results));
  }

  getMoviesGenre(): Observable<GenreMovie[]> {
    return this.httpClient
      .get<GenreMovie[]>(`${this.baseUrl}/movies/getGenrenList`)
      .pipe(map((response) => response));
  }

  getMovieDetails(movie_id: string) {
    return this.httpClient
      .get<moviesApi>(`${this.baseUrl}/movies/getMovieDetailed/${movie_id}`)
      .pipe(map((response) => response));
  }

  getSearchMovie(movie: SearchMovieName): Observable<moviesApi[]> {
    const params = { ...movie };
    return this.httpClient
      .get<moviesApi[]>(`${this.baseUrl}/movies/getSearchName`, { params })
      .pipe(map((response) => response));
  }

  getMovieByUser(id: string): Observable<MoviesFavorites[]> {
    return this.httpClient
      .get<MoviesFavorites[]>(`${this.baseUrl}/movies/MoviesByUser/${id}`)
      .pipe(map((response) => response));
  }

  saveMovie(movie: movie) {
    const params = { ...movie };
    return this.httpClient
      .post(`${this.baseUrl}/movies/createMovie`, params)
      .pipe(map((Response) => Response));
  }

  updateMovie({ ...movie }) {
    return this.httpClient
      .put(`${this.baseUrl}/movies/updateDescription`, movie)
      .pipe(map((Response) => Response));
  }

  deleteMovie(id: string) {
    return this.httpClient
      .delete(`${this.baseUrl}/movies/deleteMovie/${id}`)
      .pipe(map((Response) => Response));
  }
}
