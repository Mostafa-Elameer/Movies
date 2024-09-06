// import { Movies } from './../interFaeces/movies';
import { Component, inject } from '@angular/core';
import { MoviesService } from '../../../Services/movies.service';
import { IconsComponent } from "./icons/icons.component";
import { WhatIsNewComponent } from "./what-is-new/what-is-new.component";
import { ResirToWatchComponent } from "./resir-to-watch/resir-to-watch.component";
import { BrandsComponent } from "./brands/brands.component";
import { StreaForFreeComponent } from "./strea-for-free/strea-for-free.component";
import { SliderComponent } from "./slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IconsComponent, WhatIsNewComponent, ResirToWatchComponent, BrandsComponent, StreaForFreeComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() {

  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  if (typeof localStorage !=="undefined"){
    // localStorage.setItem()
  }
}


  // _MoviesService = inject(MoviesService)
  // _movie !: movie[]
  // ngOnInit(): void {


  //   this._MoviesService.GitMovise().subscribe({
  //     next: (respons) => {
  //       this._movie = respons.results
  //       console.log(this._movie);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //     complete: () => {

  //     }
  //   })
  // }

}
