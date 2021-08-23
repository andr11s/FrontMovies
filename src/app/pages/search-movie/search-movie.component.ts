import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie, SearchMovie } from 'src/app/interfaces/movies.interface';
import { moviesApi } from 'src/app/interfaces/moviesApi.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent implements OnInit {
  MovieSearch: moviesApi[] = [];
  id: string;
  loading: boolean;
  constructor(
    private ActiveRouter: ActivatedRoute,
    private Movieservice: MovieService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.ActiveRouter.params.subscribe((params) => {
      this.Movieservice.getSearchMovie({ query: 'kong', page: '1' }).subscribe(
        (response) => {
          console.log(response);

          // this.loading = false;
          // this.MovieSearch = response;
          // this.id = params.id;
        }
      );
    });
  }
}
