import { Routes } from '@angular/router';
import { HomeComponent } from './Layout/Pages/home/home.component';
import { FreeMoviesComponent } from './Layout/Pages/free-movies/free-movies.component';
import { FreeTvComponent } from './Layout/Pages/free-tv/free-tv.component';

export const routes: Routes = [
    { path: " ", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "freeTv", component: FreeTvComponent },
    { path: "freeMovies", component: FreeMoviesComponent },
    { path: "**", component: HomeComponent }
];
