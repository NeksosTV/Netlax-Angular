


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovieActor } from '../Models/imovie-actor';
import { IMovieTitle } from '../Models/imovie-title';

@Injectable({
  providedIn: 'root'
})
export class IMoviesSearchService {

  public selectedMovie: any;
  public selectedActor: any;

  constructor() { }
  
  
  public selectMovie(movie: IMovieTitle) {
    this.selectedMovie = movie;
  }
  public selectActor(actor: IMovieActor) {
    this.selectedActor = actor;
  }
}
