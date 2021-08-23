import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  public movieSlideshow: Movie[] = [];
    
  constructor(private serviceMovie: MovieService) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300; 
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight)
    
    if(pos > max){
      this.serviceMovie.getMovies().subscribe(response =>{
          this.movies.push(...response);
      });
    }
    
  }


  ngOnInit(): void {
    this.serviceMovie.getMovies().subscribe(response => {
      this.movieSlideshow = response;
      this.movies = response;
      
    });

    this.serviceMovie.getTest().subscribe(resp=>{
      console.log(resp);
      
    });
  }

  ngOnDestroy(): void {
    this.serviceMovie.resetPage()
  }
}
