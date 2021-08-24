import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoviesFavorites } from 'src/app/interfaces/movies.interface';
import { movieMappi, moviesApi } from 'src/app/interfaces/moviesApi.interface';
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
    public dialog: MatDialog
  ) {
    const session = this.loginUser.onSesionIniciada();
    this.moviesService.getMovieByUser(session[0]._id).subscribe((Response) => {
      this.moviesPoster = Response;
      this.moviesPoster.forEach((element) => {
        this.movies.push(element.movies[0]);
      });
    });
  }

  ngOnInit(): void {}

  onMovie(movie: moviesApi) {
    const onmovie = this.ValidateId(movie.id);
    this.dialog.open(UpdateMovieComponent, {
      data: onmovie,
    });
  }

  ondeleteMovie(movie: moviesApi) {
    const onmovie = this.ValidateId(movie.id);
    this.moviesService.deleteMovie(onmovie[0]._id).subscribe((Response) => {
      console.log(Response);
    });
  }

  ValidateId(id: string) {
    const onmovie = this.moviesPoster.filter(
      (Element) => Element.movies[0].id === id
    );
    return onmovie;
  }
}
