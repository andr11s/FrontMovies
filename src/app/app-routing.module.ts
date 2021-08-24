import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesFavoritesComponent } from './components/movies-favorites/movies-favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SearchMovieComponent } from './pages/search-movie/search-movie.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'search/:id', component: SearchMovieComponent },
  { path: 'movief', component: MoviesFavoritesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
