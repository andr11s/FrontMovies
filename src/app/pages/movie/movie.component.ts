import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Location } from '@angular/common';

import { combineLatest } from 'rxjs';
import { movie } from 'src/app/interfaces/movies.interface';
import { moviesApi } from 'src/app/interfaces/moviesApi.interface';
import { UsersService } from 'src/app/services/users.service';
import { users } from 'src/app/interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { RegisterMovieComponent } from 'src/app/components/register-movie/register-movie.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  public MovieDetail: moviesApi[] = [];
  public Moviefavorite = new movie();
  public session: users;

  constructor(
    private activeRouter: ActivatedRoute,
    private movieService: MovieService,
    private Location: Location,
    private loginService: UsersService,
    private dialog: MatDialog
  ) {
    this.session = this.loginService.onSesionIniciada();
  }

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
    this.dialog.open(RegisterMovieComponent, {
      width: '500px',
      height: '350px',
      data: {
        user: this.session,
        movies: this.MovieDetail,
      },
    });

    this.Moviefavorite.userId = this.session._id;
  }
}
