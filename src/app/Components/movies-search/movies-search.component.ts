import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IMovieTitle } from 'src/app/Models/imovie-title';
import { NetFlaxAPIService } from 'src/app/Services/net-flax-api.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class MoviesSearchComponent implements OnInit {
  url: string = 'https://jsonplaceholder.typicode.com/users';
  usersArray: IMovieTitle[] = [];
  public movies : IMovieTitle[]  = [] ;
  constructor( private _api : NetFlaxAPIService, private http: HttpClient) {
    
   }

  ngOnInit(): void {
    this._api.GetAllMoviesTitle().subscribe( 
      (data) => this.movies = data,
      (err) => console.log(err),
      () => console.log("Fin de l'observation")
        
      )
  }

}
