import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IMovieTitle } from 'src/app/Models/imovie-title';

@Component({
  selector: 'app-embed-trailer',
  templateUrl: './embed-trailer.component.html',
  styleUrls: ['./embed-trailer.component.scss']
})
export class EmbedTrailerComponent implements OnInit {
  safeUrl: any ;

  public movies : IMovieTitle[] = [] ;

  constructor( private _sanitizer : DomSanitizer) { }

  ngOnInit() {
    
  }

}
