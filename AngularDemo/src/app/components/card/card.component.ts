import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

type Data = {
  id: number,
  name: string,
  img: string,
  liked: boolean
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data?: Data;
  @Output() iconClick = new EventEmitter<Data>();

  iconColor : string = "white"

  constructor() { }

  ngOnInit(): void {
    if (this.data) {
      if (this.data.liked) this.iconColor = "red";
    }
  }

  likedColor (value : boolean) : string {
    if (value) return "red";
    else return "white";
  }

  emitIconClick() {
    this.iconClick.emit(this.data);
  }

}
