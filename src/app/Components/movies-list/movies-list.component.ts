import { ImovieGenre } from 'src/app/Models/imovie-genre';
import { NetFlaxAPIService } from './../../Services/net-flax-api.service';
import { IMovieTitle } from './../../Models/imovie-title';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {


  public movies : IMovieTitle[]  = [] ;
  public genres : ImovieGenre[] = [];

  constructor( private _api : NetFlaxAPIService , private _router : Router) { }


  ngOnInit() {
    this._api.GetAllGenre().subscribe(                   // ajoute les genre
      (data) => this.genres = data,
      (err) => console.log(err),
      () => console.log("Fin de l'observation")
    ) 
    this._api.GetAllMoviesTitle().subscribe(          // ajoute les Films
      (data) => this.movies = data,    
      (err) => console.log(err),
      () => console.log("Fin de l'observation")
      
    )
  }

  public gotoliste(id : number){
    console.log(id);
    
    this._router.navigateByUrl("/genre/"+id)
  }

  public defaultsrc(img : HTMLImageElement){
    img.src = "./assets/NotFound.png"
  }

}
