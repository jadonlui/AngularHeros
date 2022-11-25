import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../model/hero';
import { HeroesService } from './api/heroes.service';
import { MessageService } from './message.service';

/**
 * 英雄頁面服務
 */
@Injectable({
  providedIn: 'root', //註冊到root大家都可用,providedIn
})
// message會共用的原因，是因為它綁定在root
export class HeroService {
  constructor(
    private messageService: MessageService,
    private heroesService: HeroesService
  ) {}
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.heroesService.getAll();
  }

  // 取得單一hero的值
  getHero(id: string): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.heroesService.post(id);
  }
  // getHeroes(): Hero[] {
  //   return HEROES;
  //   // 如果是之後應該是put api
  // }

  // getHeroes(): Observable<Hero[]> {
  //   // 此函式模擬api回傳的資料，基本上是Observable
  //   const heroes = of(HEROES);
  //   this.messageService.add('HeroService: fetched heroes');
  //   console.log("heroes",heroes)
  //   return heroes;
  // }
}
