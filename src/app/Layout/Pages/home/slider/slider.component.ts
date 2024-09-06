import { DisplayMoviesComponent } from './../../../../display-movies/display-movies.component';
import { MoviesService } from './../../../../Services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { movie } from '../../../../interFaeces/movies';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left text-orange-400 text-xl px-2"></i>', '<i class="px-2 text-orange-400 text-xl fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(public _HttpClient: HttpClient, public _movies: MoviesService) { }

  allMoviseforSlider: movie[] = []
  api !: string | null
  pathImg = this._movies.path
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (typeof localStorage !== "undefined") {
      this.api = localStorage.getItem("path")

      this._movies.GetMovise(this.api).subscribe({
        next: (res) => {
          this.allMoviseforSlider = res.results;
        }
      })
    }

  }


}
