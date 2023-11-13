import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { Movie } from '../../../models/movie';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { switchMap, } from 'rxjs/operators'
import { of } from 'rxjs';
import { Location } from '@angular/common';
 
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Observable<Movie | null> = new Observable<Movie>;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
    ) {
  }

  ngOnInit() {
    this.movieDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        if (id !== null) {
          return this.http.getMovie(id);
        } else {
          return of(null);
        }
      })
    )
  }

  goToMovies() {
    this.location.back();
  }
}