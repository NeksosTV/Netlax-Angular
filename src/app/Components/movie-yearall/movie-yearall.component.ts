import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovieDetails } from 'src/app/Models/imovie-details';
import { IMovieTitle } from 'src/app/Models/imovie-title';
import { NetFlaxAPIService } from 'src/app/Services/net-flax-api.service';

@Component({
  selector: 'app-movie-yearall',
  templateUrl: './movie-yearall.component.html',
  styleUrls: ['./movie-yearall.component.scss']
})
export class MovieYearallComponent implements OnInit {

  public year : number[]  = [] ;
  public info : IMovieDetails[]  = [] ;

  constructor(  private _api : NetFlaxAPIService , private _router : Router) { }

  ngOnInit(): void {
    this._api.GetAllDatesSortie().subscribe( 
      result => this.year = result
    )
  }

  public gotoliste(event : any){
    let year= event.target.value;
    this._router.navigateByUrl("/year/"+year)
  }

}
