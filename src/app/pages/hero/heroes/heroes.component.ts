import { HeroService } from '@app/core/services/hero.service';
import { MessageService } from '@app/core/services/message.service';
// import { HEROES } from './../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/core/mock/mock-data';
import { Hero } from 'src/app/core/model/hero';

/**
 * 英雄之路-首頁
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heros?: Hero[];
  selectedHero?: Hero;
  datas = DATA;

 
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    console.log('heros');
    this.getHeroes();
  }


  // 正常狀況,訂閱型給值
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heros = heroes));
  }
}
