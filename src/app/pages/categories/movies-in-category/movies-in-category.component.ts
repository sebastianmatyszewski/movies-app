import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './movies-in-category.component.html',
  styleUrls: ['./movies-in-category.component.css'],
})
export class MoviesInCategoryComponent implements OnInit {
  movies: Observable<Movie[] | null> = new Observable<Movie[]>;

  constructor(private http: HttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.movies = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const category = params.get('category');
        if (category !== null) {
          return this.http.getMoviesFromCategory(category);
        } else {
          return of(null);
        }
      })
    )
  }
}