import { MaterialModule } from './material/material.module';
import { PipiTrailerPipe } from './Components/pipe/pipi-trailer.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './Components/contact/contact.component';
import { MoviesDetailsComponent } from './Components/movies-details/movies-details.component';
import { MoviesTrailerComponent } from './Components/movies-trailer/movies-trailer.component';
import { HomeComponent } from './Components/home/home.component';
import { SliderComponent } from './Components/slider/slider.component';
import { MoviesActorComponent } from './Components/movies-actor/movies-actor.component';
import { MoviesSearchComponent } from './Components/movies-search/movies-search.component';
import { EmbedTrailerComponent } from './Components/embed-trailer/embed-trailer.component';
import { NgModule} from '@angular/core';
import { PageLoginComponent } from './Components/page-login/page-login.component';
import { MovieGenreComponent } from './Components/movie-genre/movie-genre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatSliderModule } from '@angular/material/slider';
import { ActorDetailComponent } from './Components/actor-detail/actor-detail.component';
import {PaginatorModule} from 'primeng/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatorComponent } from './Paginator/paginator/paginator.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MovieYearComponent } from './Components/movie-year/movie-year.component';
import { MovieYearallComponent } from './Components/movie-yearall/movie-yearall.component';





@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    NotFoundComponent,
    ContactComponent,
    MoviesDetailsComponent,
    MoviesTrailerComponent,
    PipiTrailerPipe,
    HomeComponent,
    SliderComponent,
    MoviesActorComponent,
    MoviesSearchComponent,
    EmbedTrailerComponent,
    PipiTrailerPipe,
    PageLoginComponent,
    MovieGenreComponent,
    ActorDetailComponent,
    PaginatorComponent,
    MovieYearComponent,
    MovieYearallComponent,
    

  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatPaginatorModule,
    SlickCarouselModule,
    MatSliderModule,
    PaginatorModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatSelectModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
