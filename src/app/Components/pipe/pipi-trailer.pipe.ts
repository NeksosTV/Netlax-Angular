import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { IMovieDetails } from 'src/app/Models/imovie-details';

@Pipe({
  name: 'pipiTrailer'
})
export class PipiTrailerPipe implements PipeTransform {

  

  constructor(private sanitizer: DomSanitizer) {}


  transform(url : string) : any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);  
  }

}