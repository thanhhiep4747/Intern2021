import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../list-product/Iproduct';
import { ProductService } from '../service/product-service.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  selectedProduct: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      this.getProduct(res.proId)
    })
  }

  getProduct(id: number){
    this.productService.getProduct(id)
    .subscribe(item => this.selectedProduct = item);
  }

  goBack(){
    this._location.back()
  }

}
