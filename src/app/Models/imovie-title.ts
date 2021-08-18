import { MovieGenreComponent } from "../Components/movie-genre/movie-genre.component";



export interface IMovieTitle {
    IdMovie : number;
    Title : string;
    ReleaseDate : Date;
    Trailer : string;
    Summary : string;
    Picture : string;
    IdGenre : number;
    ShortDescription: string;
    Label? : MovieGenreComponent;
}

