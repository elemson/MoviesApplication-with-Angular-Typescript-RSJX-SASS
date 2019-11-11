import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class MovieService {
  private API_KEY: string = environment.OMDB_API_KEY;
  private API_URL: string = environment.OMDB_API_URL;
  private LIST_URL: string = this.API_URL + this.API_KEY + "&s=";
  private DETAIL_URL: string = this.API_URL + this.API_KEY + "&i=";

  constructor(private _http: Http) {}

  getMovie(query: string) {
    return this._http.get(this.LIST_URL + query).map(res => res.json());
  }

  getMovieDetails(id: string) {
    return this._http.get(this.DETAIL_URL + id).map(movie => movie.json());
  }
}
