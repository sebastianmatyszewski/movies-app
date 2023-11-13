import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-movie-in-year',
  templateUrl: './movie-in-year.component.html',
  styleUrls: ['./movie-in-year.component.css']
})
export class MovieInYearComponent  implements OnInit {
  movies: Observable<Movie[] | null> = new Observable<Movie[]>;

  constructor(private http: HttpService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.movies = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const year = params.get('year');
        if (year !== null) {
          return this.http.getMoviesFromYear(year);
        } else {
          return of(null);
        }
      })
    )
  }
}