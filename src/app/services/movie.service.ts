import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieDetails } from '../interfaces/movie-details';
import { Cast, MovieCredit } from '../interfaces/movie-credit';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'https://api.themoviedb.org/3';
  private ContadorPage = 1;
  public cargando : boolean;
  constructor(private httpClient: HttpClient) { }

  get params(){
    return {
      api_key: 'b79aab3ea2da177ab454ca6f90e7cf65',
      language: 'es-ES',
      page: this.ContadorPage.toString()
    }
  }

  getMovies(): Observable<Movie[]>{

    if( this.cargando ){
      return of([])
    }

    return this.httpClient.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing?`,{
      params: this.params
    }).pipe(
      map(response => response.results),
      tap( ()=>{
        this.ContadorPage += 1;
      })
    )
  }

  SearchMovie(query: string): Observable<Movie[]>{ 

    const params = {...this.params, query: query};
    return this.httpClient.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {
      params
    }).pipe(
      map(Response => Response.results)
    )
  }

  getMovieDetails(idMovie: string):Observable<MovieDetails>{
    return this.httpClient.get<MovieDetails>(`${this.baseUrl}/movie/${idMovie}`,{
      params: this.params
    });

  }

  getMovieCredit(idMovie: string): Observable<Cast[]>{
    return this.httpClient.get<MovieCredit>(`${this.baseUrl}/movie/${idMovie}/credits`,{
      params: this.params
    }).pipe(
      map(Response => Response.cast),
      catchError(error => of(null))
     )

  }
  resetPage(){
    this.ContadorPage = 1;
  }

  getTest(){
    let a= 'avengers';
    let params =  {
      apikey: 'c7c741b9'
    }
    return this.httpClient.get(`https://www.omdbapi.com/?s=${a}`,{
      params
    }).pipe(
      map( (resp: any) => resp.Search)
    )

  }
}
