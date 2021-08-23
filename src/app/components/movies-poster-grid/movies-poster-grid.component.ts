import { Component, Input, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { Router } from '@angular/router';
import { movie } from 'src/app/interfaces/movies.interface';
import { moviesApi } from 'src/app/interfaces/moviesApi.interface';

@Component({
  selector: 'components-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css'],
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: moviesApi;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onMovie(movie: moviesApi) {
    this.router.navigate(['/movie', movie.id]);
  }
}
