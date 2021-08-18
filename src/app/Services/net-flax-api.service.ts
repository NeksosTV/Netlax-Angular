import { Genre } from './../Models/genre';
import { MatPaginatorModule } from '@angular/material/paginator';
import { IMovieActor } from './../Models/imovie-actor';
import { ImovieGenre } from './../Models/imovie-genre';
import { IMovieDetails } from './../Models/imovie-details';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovieTitle } from '../Models/imovie-title';
import { Actor } from '../Models/actor';

@Injectable({
  providedIn: 'root'
})
export class NetFlaxAPIService {

  private _url : string = "http://localhost:3001"

  constructor(private _http : HttpClient) { }


  public GetAllMoviesTitle() : Observable<IMovieTitle[]>{
    return this._http.get<IMovieTitle[]>(`${this._url}/movies/title`);
  }

  // filtre tout les genre par ID
  public GetAllMoviesgenre( id : number) : Observable<IMovieTitle[]>{
    return this._http.get<IMovieTitle[]>(`${this._url}/movies/bygenre/${id}`);
  }
//----------------------------
  

  public GetMovieDetails(id : number) : Observable<IMovieDetails>{
    return this._http.get<IMovieDetails>(`${this._url}/movies/${id}`);
  }


  public GetAllGenre() : Observable<ImovieGenre[]>{
    return this._http.get<ImovieGenre[]>(`${this._url}/genres/`)
  }



  public GetAllGenreByMovie() : Observable<Genre[]>{
    return this._http.get<Genre[]>(`${this._url}/movies/:id/genre`)
  }




// Get touts les acteurs
  public GetAllActor() : Observable<IMovieActor[]>{
    return this._http.get<IMovieActor[]>(`${this._url}/movies/acteur/`)
  }

// Get toutes les infos d'un acteur
  public GetCastDetail( id : number) : Observable<Actor>{
    return this._http.get<Actor>(`${this._url}/Movies/cast/${id}`)
  }

//--------------------date----------------------------

  public GetAllDate( year : number) : Observable<IMovieTitle[]>{
    return this._http.get<IMovieTitle[]>(`${this._url}/Movies/year/${year}`)
  }


  public GetAllDatesSortie() : Observable<number[]>{
    return this._http.get<any[]>(`${this._url}/Movies/year`).pipe(map( ys => ys.map( y =>y.year)) )
  }



}
