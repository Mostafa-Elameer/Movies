import { Component } from '@angular/core';
import { DisplayMoviesComponent } from '../../../display-movies/display-movies.component';

@Component({
  selector: 'app-free-tv',
  standalone: true,
  imports: [DisplayMoviesComponent],
  templateUrl: './free-tv.component.html',
  styleUrl: './free-tv.component.css'
})
export class FreeTvComponent {

  gitTv: string = "https://api.themoviedb.org/3/discover/tv?api_key=866cd3a065ef9304a549f1d65e494940"

  constructor() {

    localStorage.setItem("path", this.gitTv)
    
    // console.log(document.title)
    console.log("im tv");
    
  }
}
