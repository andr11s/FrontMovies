import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { GenreMovie, movie } from 'src/app/interfaces/movies.interface';
import { moviesApi } from 'src/app/interfaces/moviesApi.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public movies: moviesApi[] = [];
  public movieSlideshow: moviesApi[] = [];
  public genre: GenreMovie[] = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ];

  constructor(private serviceMovie: MovieService) {}
  loading: boolean;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      this.serviceMovie
        .getMovies({ with_genres: '27', page: '1' })
        .subscribe((response) => {
          this.movies.push(...response);
        });
    }
  }

  ngOnInit(): void {
    this.loading = true;
    this.serviceMovie
      .getMovies({ with_genres: '80', page: '1' })
      .subscribe((Response) => {
        this.movies = Response;
        this.movieSlideshow = Response;
      });
  }

  ngOnDestroy(): void {
    // this.serviceMovie.resetPage();
  }
}
