import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { movie, ResponseMovie } from 'src/app/interfaces/movies.interface';
import { movieMappi, moviesApi } from 'src/app/interfaces/moviesApi.interface';
import { users } from 'src/app/interfaces/user.interface';
import { MovieComponent } from 'src/app/pages/movie/movie.component';
import { AlertService } from 'src/app/services/alert.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-register-movie',
  templateUrl: './register-movie.component.html',
  styleUrls: ['./register-movie.component.css'],
})
export class RegisterMovieComponent implements OnInit {
  public creteaMovie = new movie();
  constructor(
    public dialogRef: MatDialogRef<MovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: users; movies: moviesApi },
    private movieService: MovieService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.creteaMovie.userId = this.data.user[0]._id;
    this.creteaMovie.movies.push(movieMappi(this.data.movies[0]));
    this.creteaMovie.movie_id = this.data.movies[0].id.toString();

    console.log(this.creteaMovie);

    this.movieService
      .saveMovie(this.creteaMovie)
      .subscribe((Response: ResponseMovie) => {
        if (Response.error) {
          this.alertService.alertMessage({
            message: 'Ya tiene agregada esta pelicula a favoritas',
            icon: 'warning',
          });
        } else {
          this.alertService.alertMessage({
            message: Response.message,
            icon: 'success',
          });
        }
      });
  }
}
