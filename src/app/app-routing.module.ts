import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  // { path: "home", component: AppComponent },
  { path: "home", component: MovieListComponent },
  { path: "moviedetails", component: MovieDetailsComponent }
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
