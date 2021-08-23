import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviePoster'
})
export class MoviePosterPipe implements PipeTransform {

  transform(img: string): string {
   
    if (img) {   
      return `https://image.tmdb.org/t/p/w500${img}`; 
    }else{
      return './assets/no-image.jpg';
    } 
  }

}
