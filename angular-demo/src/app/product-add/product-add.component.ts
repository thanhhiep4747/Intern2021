import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  product?: any = {
    name: '',
    price: 0,
    inStock: 0,
    image: '',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.product);
  }
}
