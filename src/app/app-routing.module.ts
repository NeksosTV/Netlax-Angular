import { MovieYearallComponent } from './Components/movie-yearall/movie-yearall.component';
import { MovieYearComponent } from './Components/movie-year/movie-year.component';
import { ActorDetailComponent } from './Components/actor-detail/actor-detail.component';
import { MovieGenreComponent } from './Components/movie-genre/movie-genre.component';
import { PageLoginComponent } from './Components/page-login/page-login.component';
import { HomeComponent } from './Components/home/home.component';
import { MoviesTrailerComponent } from './Components/movies-trailer/movies-trailer.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailsComponent } from './Components/movies-details/movies-details.component';
import { MoviesActorComponent } from './Components/movies-actor/movies-actor.component';

const routes: Routes = [
  {path: 'movies', component: MoviesListComponent},
  {path: 'Not-Found', component: NotFoundComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'movies/:id', component: MoviesDetailsComponent},
  {path: 'trailer', component: MoviesTrailerComponent},
  {path: 'home', component: HomeComponent},
  {path: 'acteur', component: MoviesActorComponent},
  {path: 'login', component: PageLoginComponent},
  {path: 'genre/:id', component: MovieGenreComponent},
  {path: 'acteurDetail/:id', component: ActorDetailComponent},
  {path: 'year/:year', component: MovieYearComponent},
  {path: 'year', component: MovieYearallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
