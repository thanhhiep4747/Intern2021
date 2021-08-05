import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data?: Product;
  @Output() iconClick = new EventEmitter<Product>();

  iconColor : string = "white";

  constructor() { }

  ngOnInit(): void {
    if (!this.data) throw new Error('data is required!');
    if (this.data.liked) this.iconColor = "red";
  }

  likedColor (value : boolean) : string {
    if (value) return "red";
    else return "white";
  }

  emitIconClick() {
    this.iconClick.emit(this.data);
  }

}
