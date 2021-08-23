import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePipe } from './movie.pipe';
import { MoviePosterPipe } from './movie-poster.pipe';

 
@NgModule({
  declarations: [
    MoviePipe,
    MoviePosterPipe
  ],
  exports: [
    MoviePipe,
    MoviePosterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
