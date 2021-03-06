import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from '../angularmaterial.module';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SwiperModule } from 'swiper/angular';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterMovieComponent } from './register-movie/register-movie.component';
import { MoviesFavoritesComponent } from './movies-favorites/movies-favorites.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
    RegisterUserComponent,
    RegisterMovieComponent,
    MoviesFavoritesComponent,
    UpdateMovieComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SwiperModule,
    RatingModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [NavbarComponent, SlideshowComponent, MoviesPosterGridComponent],
})
export class ComponentsModule {}
