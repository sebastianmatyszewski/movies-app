import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MovieCoverComponent } from './shared/movie-cover/movie-cover.component';
import { MoviesInCategoryComponent } from './pages/categories/movies-in-category/movies-in-category.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { YearsComponent } from './pages/years/years.component';
import { MovieInYearComponent } from './pages/years/movie-in-year/movie-in-year.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    MoviesComponent,
    PageNotFoundComponent,
    MovieCoverComponent,
    MoviesInCategoryComponent,
    MovieDetailsComponent,
    YearsComponent,
    MovieInYearComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
