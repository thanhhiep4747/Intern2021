import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productDB } from '../../fake-db';
import { Product } from '../../models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  data: Product = productDB.findById(Number(this._route.snapshot.paramMap.get("id")));

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void { }

}
