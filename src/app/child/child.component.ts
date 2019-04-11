import { Component, OnInit } from '@angular/core';
import {Increment} from '../counter.actions';

import {HttpClient} from '@angular/common/http';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  countChild$: Observable<number>;
  bookCount: number;
  bookListChild: any[];
  constructor(private store: Store<{ count: number }>, private http: HttpClient) {

    this.countChild$ = store.pipe(select('count'));
  }

  ngOnInit() {
  }
  increment() {
    this.http
      .get<any[]>('https://httpclient-demo.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.bookListChild = response;

        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  //  this.store.dispatch(new Increment());
  }
}
