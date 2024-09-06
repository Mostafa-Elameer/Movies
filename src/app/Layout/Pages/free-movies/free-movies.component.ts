import { Component } from '@angular/core';
import { DisplayMoviesComponent } from '../../../display-movies/display-movies.component';
@Component({
  selector: 'app-free-movies',
  standalone: true,
  imports: [DisplayMoviesComponent],
  templateUrl: './free-movies.component.html',
  styleUrl: './free-movies.component.css'
})


export class FreeMoviesComponent {
  gitMovis: string = "https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940"

  constructor() {
    localStorage.setItem("path", this.gitMovis)

  }
}
