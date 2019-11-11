import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MovieListComponent } from "./movie-list/movie-list.component";

import { MovieService } from "./shared/movie.service";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { RouterModule } from "@angular/router";

import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, routingComponents, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      // { path: "", redirectTo: "/home", pathMatch: "full" },
      // // { path: "home", component: AppComponent },
      // { path: "home", component: MovieListComponent },
      // { path: "home/details", component: MovieDetailsComponent }
    ])
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
