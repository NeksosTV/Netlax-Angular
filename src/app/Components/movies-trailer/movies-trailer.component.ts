import { ImovieGenre } from './../../Models/imovie-genre';
import { NetFlaxAPIService } from './../../Services/net-flax-api.service';
import { Component, OnInit } from '@angular/core';
import { IMovieDetails } from 'src/app/Models/imovie-details';

@Component({
  selector: 'app-movies-trailer',
  templateUrl: './movies-trailer.component.html',
  styleUrls: ['./movies-trailer.component.scss']
})
export class MoviesTrailerComponent implements OnInit {
  public label : ImovieGenre[] = [] ;

  constructor( private _api : NetFlaxAPIService  ) { }

  ngOnInit(): void {
    this._api.GetAllGenre().subscribe(  
      result => this.label = result
    )
  }

}
