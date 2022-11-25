import { Component, OnInit } from '@angular/core';

/**
 *集合面板
 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  // title = 'angular-tour-of-heroes';
  get title() {
    return 'heros'.toUpperCase();
  }
  constructor() {}

  ngOnInit(): void {}
}
