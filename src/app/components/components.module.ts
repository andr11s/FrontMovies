import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularMaterialModule } from '../angularmaterial.module';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SwiperModule } from 'swiper/angular';
import { MoviesPosterGridComponent } from './movies-poster-grid/movies-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    MoviesPosterGridComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SwiperModule,
    RatingModule,
    PipesModule,
  ],
  exports: [NavbarComponent, SlideshowComponent, MoviesPosterGridComponent],
})
export class ComponentsModule {}
