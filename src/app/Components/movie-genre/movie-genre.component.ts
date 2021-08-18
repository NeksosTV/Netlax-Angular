import { ImovieGenre } from './../../Models/imovie-genre';
import { Genre } from './../../Models/genre';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Input } from '@material-ui/core';

import { IMovieTitle } from 'src/app/Models/imovie-title';
import { NetFlaxAPIService } from 'src/app/Services/net-flax-api.service';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.scss']
})
export class MovieGenreComponent implements OnInit {



  public movies : IMovieTitle[]  = [] ;
  private _id? : number;


  constructor( private _api : NetFlaxAPIService, private _route : ActivatedRoute) { }

  ngOnInit(): void {

    this._route.params.subscribe(params =>{ 
      this._id = params.id
      if (this._id)
      this._api.GetAllMoviesgenre(this._id).subscribe( 
        (data) => this.movies = data,
        (err) => console.log(err),
        () => console.log("Fin de l'observation")
          
        )
    })

  }
  public defaultsrc(img : HTMLImageElement){
    img.src = "./assets/NotFound.png"
  }

}
