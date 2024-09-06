import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { MoviesService } from '../Services/movies.service';
import { movie } from '../interFaeces/movies';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-display-movies',
  standalone: true,
  imports: [],
  templateUrl: './display-movies.component.html',
  styleUrl: './display-movies.component.css'
})
export class DisplayMoviesComponent {

  path: any
  mmmm: string = "https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940"
  _moviesService = inject(MoviesService)

  allmovies !: movie[]
  pathImgMovie = this._moviesService.path


  constructor(@Inject(PLATFORM_ID) private s: object) {

  }
  ngOnInit(): void {

    if (isPlatformBrowser(this.s)) {
      this.path = localStorage.getItem("path");
      console.log("display");

      this._moviesService.GetMovise(this.path).subscribe({
        next: (res) => {
          console.log(res.results);
          this.allmovies = res.results;
        },
        error: (err) => {
          console.log(err);
        }
      })

    }
  }




}
