import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Location } from '@angular/common';

import { combineLatest } from 'rxjs';
import { movie } from 'src/app/interfaces/movies.interface';
import { moviesApi } from 'src/app/interfaces/moviesApi.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  public MovieDetail: moviesApi[] = [];
  public Moviefavorite = new movie();
  constructor(
    private activeRouter: ActivatedRoute,
    private movieService: MovieService,
    private Location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activeRouter.snapshot.params;
    combineLatest([this.movieService.getMovieDetails(id)]).subscribe(
      ([peliculas]) => {
        this.MovieDetail.push(peliculas);
      }
    );
  }

  onBackPage() {
    this.Location.back();
  }

  onSave() {
    this.Moviefavorite.userId = '1';
    this.Moviefavorite.description = 'Esto es un descripcion';
  }
}
