import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Http, Headers } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class MovieService {
  private query: string;
  private API_KEY: string = environment.OMDB_API_KEY;
  private API_URL: string = environment.OMDB_API_URL;
  private URL: string = this.API_URL + this.API_KEY + "&s=";

  constructor(private _http: Http) {}

  getMovie(query) {
    return this._http.get(this.URL + query).map(res => res.json());
  }
}
