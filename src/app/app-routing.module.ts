import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", component: MovieListComponent },
  { path: "details/:id", component: MovieDetailsComponent }
];

@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class AppRoutingModule {}

export const routingComponents = [MovieListComponent, MovieDetailsComponent];
