import {Component} from '@angular/core';

import {Store, select} from '@ngrx/store';

import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Increment, Decrement, Reset} from '../counter.actions';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  count$: Observable<number>;
  bookCount: number;
  bookList: any[];
  constructor(private store: Store<{ count: number }>, private http: HttpClient) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.http
      .get<any[]>('https://httpclient-demo.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.bookList = response;

        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());

  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
