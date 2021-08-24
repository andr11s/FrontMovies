import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MoviesFavorites,
  ResponseMovie,
} from 'src/app/interfaces/movies.interface';
import { movieMappi, moviesApi } from 'src/app/interfaces/moviesApi.interface';
import { AlertService } from 'src/app/services/alert.service';
import { MovieService } from 'src/app/services/movie.service';
import { UsersService } from 'src/app/services/users.service';
import { UpdateMovieComponent } from '../update-movie/update-movie.component';

@Component({
  templateUrl: './movies-favorites.component.html',
  styleUrls: ['./movies-favorites.component.css'],
})
export class MoviesFavoritesComponent implements OnInit {
  movies: moviesApi[] = [];
  moviesPoster: MoviesFavorites[] = [];
  constructor(
    private moviesService: MovieService,
    private loginUser: UsersService,
    public dialog: MatDialog,
    private alarService: AlertService
  ) {
    this.UpdateView();
  }

  ngOnInit(): void {}

  onMovie(movie: moviesApi) {
    const onmovie = this.ValidateId(movie.id);
    this.dialog.open(UpdateMovieComponent, {
      width: '60%',
      height: '40%',
      data: onmovie,
    });
  }

  ondeleteMovie(movie: moviesApi) {
    const onmovie = this.ValidateId(movie.id);
    this.moviesService
      .deleteMovie(onmovie[0]._id)
      .subscribe((Response: ResponseMovie) => {
        if (!Response.error) {
          this.alarService.alertMessage({
            message: Response.message,
            icon: 'success',
          });
          this.UpdateView();
        } else {
          this.alarService.alertMessage({
            message: Response.message,
            icon: 'error',
          });
        }
      });
  }

  ValidateId(id: string) {
    const onmovie = this.moviesPoster.filter(
      (Element) => Element.movies[0].id === id
    );
    return onmovie;
  }

  UpdateView() {
    this.movies = [];
    const session = this.loginUser.onSesionIniciada();
    this.moviesService.getMovieByUser(session[0]._id).subscribe((Response) => {
      this.moviesPoster = Response;
      this.moviesPoster.forEach((element) => {
        this.movies.push(element.movies[0]);
      });
    });
  }
}
