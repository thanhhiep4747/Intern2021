import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  product?: any = {
    name: '',
    price: '',
    inStock: '',
    image: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
