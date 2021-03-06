import { Component, OnInit } from "@angular/core";
import { MovieService } from "../shared/movie.service";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit {
  movies: any[];
  moviesFound: boolean = false;
  searching: boolean = false;
  lastsearch: string = "";

  handleSuccess(data) {
    this.moviesFound = true;
    this.movies = data.Search;
    console.log(data.Search);
  }

  handleError(error) {
    console.log(error);
  }
  constructor(private _movieService: MovieService) {}

  searchMovies(query: string) {
    this.searching = true;
    this.lastsearch = query;
    return this._movieService
      .getMovie(query)
      .subscribe(
        data => this.handleSuccess(data),
        error => this.handleError(error),
        () => (this.searching = false)
      );
  }

  ngOnInit() {}
}
