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

  /**
   * 拿到所有heroes名單
   * 使用api資料夾中，同名api
   */
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.heroesService.getAll();
  }


  /**
   * 拿到單一的hero
   * 使用api資料夾中，同名api
   */
  getHero(id: string): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.heroesService.post(id);
  }
}
