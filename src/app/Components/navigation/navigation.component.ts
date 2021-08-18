import { Component, OnInit } from '@angular/core';
import { ImovieGenre } from 'src/app/Models/imovie-genre';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public genre? : ImovieGenre;
  private _id? : number;
  constructor() { }

  ngOnInit(): void {
  }

}
