import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MovieListComponent } from "./movie-list/movie-list.component";

import { MovieService } from "./shared/movie.service";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, MovieListComponent, MovieDetailsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/home", pathMatch: "full" },
      // { path: "home", component: AppComponent },
      { path: "home", component: MovieListComponent },
      { path: "moviedetails", component: MovieDetailsComponent }
    ])
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
