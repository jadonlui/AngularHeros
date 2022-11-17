
import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
// import { HEROES } from './../mock-heroes';
import { Hero } from '../hero';
import { DATA } from './../mock-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heros?: Hero[];
  selectedHero?: Hero;
  datas = DATA;

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstoom',
  // };
  constructor(
    private heroService: HeroService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    console.log('heros');
    this.getHeroes();

    // this.getDatas();
  }

  // onSelect(onehero: Hero): void {
  //   this.selectedHero = onehero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${onehero.id}`);
  // }

  // getHeroes(): void {
  //   this.heros = this.heroService.getHeroes();
  //   console.log(this.heros)
  // }
  // 正常狀況,訂閱型給值
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heros = heroes));
  }
}
