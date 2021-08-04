import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss'],
})
export class OurClientsComponent implements OnInit {
  data = 0;
  constructor() {}

  ngOnInit(): void {}
  changeFromParent() {
    this.data += 1;
  }
}
