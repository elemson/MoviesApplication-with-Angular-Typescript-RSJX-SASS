import { Component } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { MovieService } from "./shared/movie.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Movies App!";
}
