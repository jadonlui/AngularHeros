import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './../../model/hero';

/**
 * 英雄API服務 - 取得英雄列表
 */
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  /** 建構子 */
  constructor(
    /** http: Angular Http 服務 */
    private http: HttpClient
  ) {}

  /**
   * 取得英雄列表
   * @returns 回傳 Http Observable
   */
  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>('http://localhost:3000/api/heroes');
  }
  /** 更新英雄 */
  post(id: string): Observable<Hero>  {
    console.log('9090')
    return this.http.post<Hero>('http://localhost:3000/api/hero', { id });
  }
  /** 刪除英雄 */
  delete() {}
}
