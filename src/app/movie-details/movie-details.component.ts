import { Component, OnInit } from "@angular/core";
import { MovieService } from "../shared/movie.service";
import { Movies } from "../../../typings/Movies";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})
export class MovieDetailsComponent implements OnInit {
  id: string;
  movie: Movies[];
  constructor(
    private _movie_Service: MovieService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params
      .map(params => params["id"])
      .subscribe(id => {
        this._movie_Service.getMovieDetails(id).subscribe(movie => {
          this.movie = movie;
          console.log(movie);
        });
      });
  }
}
