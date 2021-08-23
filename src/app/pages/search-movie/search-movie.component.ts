import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  MovieSearch: Movie[] = [];
  id: string;
  loading: boolean;
  constructor(private ActiveRouter: ActivatedRoute,
              private Movieservice: MovieService ) { }

  ngOnInit(): void {
    this.loading = true;
    this.ActiveRouter.params.subscribe(params =>{
      this.Movieservice.SearchMovie(params.id).subscribe(response =>{
        console.log(response);
        this.loading = false;
        this.MovieSearch = response;
        this.id = params.id;
        }
      )
    })
  }

}
