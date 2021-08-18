import { ImovieGenre } from 'src/app/Models/imovie-genre';
import { NetFlaxAPIService } from './../../Services/net-flax-api.service';
import { Component, OnInit } from '@angular/core';
import { IMovieDetails } from 'src/app/Models/imovie-details';
import { ActivatedRoute, Params } from '@angular/router';
import { Genre } from 'src/app/Models/genre';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {
  public movie? : IMovieDetails;
  private _id? : number;
  public genre : Genre [] = [];

  constructor( private _api : NetFlaxAPIService, private _route : ActivatedRoute) { }
 
  ngOnInit(): void {
    this._route.params.subscribe( 
      (params) => this.onIdReceive(params)
      );
      this._route.queryParams.subscribe(
        (qp) => console.log(qp)
        
      );
  }

  private onIdReceive(params : Params){
    this._id = parseInt(params['id'])
    this._api.GetMovieDetails(this._id).subscribe(
      (data) => this.movie = data ,
      (err) => console.error(err),
      ()=> console.log("Fin de l'observation")     
    );

  }

  public defaultsrc(img : HTMLImageElement){   //assigne une image par défaut au film ou il n'y a pas d'iamges
    img.src = "./assets/NotFound.png"
  }

  public Trailer( url: string){
    return url.replace('watch?v=', 'embed/')  //remplace le 'watch?v=' en 'embed/' d'une URL youtube
  }

}
