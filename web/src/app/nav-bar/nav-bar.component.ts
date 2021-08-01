import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  currentRouteId = 0;
  constructor() {}

  ngOnInit(): void {}

  changeRoute(id: number) {
    this.currentRouteId = id;
  }
}
