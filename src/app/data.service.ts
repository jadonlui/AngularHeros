import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATA } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  messageService: any;

  constructor() {}

  getDatas():Observable<any[]> {
    // 此函式模擬api回傳的資料，基本上是Observable
    const datas = of(DATA);
    console.log('datas', datas);
    return datas;
  }
}
