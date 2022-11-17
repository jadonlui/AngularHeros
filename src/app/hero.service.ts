import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
// 類別屬性

import { HEROES } from './mock-heroes';
//假資料

// 會註冊到root大家都可用,providedIn
@Injectable({
  providedIn: 'root',
})
// message會共用的原因，是因為它綁定在root
export class HeroService {

  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  // 取得單筆
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
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
