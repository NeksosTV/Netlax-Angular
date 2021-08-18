import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Actor } from 'src/app/Models/actor';
import { IMovieActor } from 'src/app/Models/imovie-actor';
import { NetFlaxAPIService } from 'src/app/Services/net-flax-api.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {

  public actor? : Actor[];
  private _id? : number;
  
  constructor(private _api : NetFlaxAPIService, private _route : ActivatedRoute ) { }

  ngOnInit(): void {

    this._api.GetCastDetail().subscribe(  
      result => this.actor = result
    )
    // this._route.params.subscribe( 
    //   (params) => this.onIdReceive(params)
    //   );
    //   this._route.queryParams.subscribe(
    //     (qp) => console.log(qp)
        
    //   );
  }

  // private onIdReceive(params : Params){
  //   this._id = parseInt(params['id'])
  //   this._api.GetCastDetail().subscribe(
  //     (data) => this.actor = data ,
  //     (err) => console.error(err),
  //     ()=> console.log("Fin de l'observation")     
  //   );
  // }
}
