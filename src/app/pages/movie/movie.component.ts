import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from '../../interfaces/movie-details';
import { MovieService } from 'src/app/services/movie.service';
import { Location } from '@angular/common';
import { Cast, MovieCredit } from 'src/app/interfaces/movie-credit';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  public MovieDetail: MovieDetails[] = [];
  MovieCast: Cast[] = [];
  constructor(
    private activeRouter: ActivatedRoute,
    private movieService: MovieService,
    private Location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const { id } = this.activeRouter.snapshot.params;

    combineLatest([
      this.movieService.getMovieDetails(id),
      this.movieService.getMovieCredit(id),
    ]).subscribe(([peliculas, cast]) => {
      this.MovieDetail.push(peliculas);
      if (Response) {
        this.MovieCast = cast.filter((cast) => cast.profile_path !== null);
      } else {
        this.router.navigate(['/home']);
      }
    }); 
  }

  onBackPage() {
    this.Location.back();
  }
}
