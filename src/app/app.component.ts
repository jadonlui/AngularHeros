import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this._arrayA$.next([4, 5, 6]);
  }
  // title = 'angular-tour-of-heroes';
  get title() {
    return 'heros'.toUpperCase();
  }

  _arrayA$ = new BehaviorSubject<number[]>([1, 2, 3]);

  arrayA$ = this._arrayA$.asObservable().pipe(
    map((n) => {
      return n.map((d) => d * 10);
    })
  );
}

//   // BehaviorSubject + asObservable
//   _arrayA$ = new BehaviorSubject<number[]>([1, 2, 3])

//   /**
//    * BehaviorSubject 轉 Observable。
//    * 特性: 只能讀取
//    */
//   arrayA$ = this._arrayA$.asObservable().pipe(
//     map((n) => {
//       return n.map((d) => d * 10)
//     }),
//   )

//   ngOnInit() {
//     this._arrayA$.next([4, 5, 6])
//   }
// }
