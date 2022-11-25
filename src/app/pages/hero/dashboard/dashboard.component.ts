import { Component, OnInit } from '@angular/core';
import { HeroService } from '@app/core/services/hero.service';
import { Hero } from '../../../core/model/hero';

/**
 * 英雄列表桌面
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
    //會取2~5位的英雄
  }
}
