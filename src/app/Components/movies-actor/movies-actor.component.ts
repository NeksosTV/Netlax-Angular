import { NetFlaxAPIService } from './../../Services/net-flax-api.service';
import { Component, OnInit } from '@angular/core';
import { IMovieActor } from 'src/app/Models/imovie-actor';
import { Router } from '@angular/router';
import { Actor } from 'src/app/Models/actor';

@Component({
  selector: 'app-movies-actor',
  templateUrl: './movies-actor.component.html',
  styleUrls: ['./movies-actor.component.scss']
})
export class MoviesActorComponent implements OnInit {
  public actor : Actor[] = [];

  constructor( private _api : NetFlaxAPIService , private _router : Router) { }

  ngOnInit(): void {
    this._api.GetAllActor().subscribe( 
      result => this.actor = result
    )
    
  }

  public gotoliste(event : any){
    let year= event.target.value;
    this._router.navigateByUrl("/year/"+year)
  }


}
