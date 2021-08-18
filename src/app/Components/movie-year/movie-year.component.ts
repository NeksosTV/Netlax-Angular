import { IMovieDetails } from 'src/app/Models/imovie-details';
import { ActivatedRoute, Router } from '@angular/router';
import { NetFlaxAPIService } from './../../Services/net-flax-api.service';
import { Component, OnInit } from '@angular/core';
import { IMovieTitle } from 'src/app/Models/imovie-title';


@Component({
  selector: 'app-movie-year',
  templateUrl: './movie-year.component.html',
  styleUrls: ['./movie-year.component.scss']
})
export class MovieYearComponent implements OnInit {

  public year : number = 0 ;
  public list : IMovieDetails[] = [];
  public movies : IMovieTitle[]  = [] ;
  constructor( private _api : NetFlaxAPIService , private _route : ActivatedRoute,  private _router : Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      p => {
        this.year = p.year
        this._api.GetAllDate( this.year).subscribe(
          (data) => this.list = data,
          (err) => console.log(err)
        )

        this._api.GetAllMoviesTitle().subscribe(          // ajoute les Films
          (data) => this.movies = data,    
          (err) => console.log(err),
          () => console.log("Fin de l'observation")
          
        )
        // this._api.GetAllDatesSortie().subscribe(
        //   (data) => this.list = data,
        //   (err) => console.log(err)
          
        // )
    })  
     
  }

  public gotoliste(event : any){
    let year = event.target.value;
    this._router.navigateByUrl("/year/"+year)
  }

  public defaultsrc(img : HTMLImageElement){   // image par défayt quand un film ne posséde pas d'image
    img.src = "./assets/NotFound.png"
  }

}
