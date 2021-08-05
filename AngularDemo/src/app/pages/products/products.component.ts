import { Component, OnInit } from '@angular/core';
import { productDB } from '../../fake-db';
import { Product } from "../../models";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  list = productDB;
  type: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeType (value: number) : void {
    this.type = value;
  }
}
