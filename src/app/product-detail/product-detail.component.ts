import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../list-product/Iproduct';
import { PRODUCTS } from '../list-product/mock-data';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  selectedProduct: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(res=>{
      this.getProduct(res.proId)
    })
  }

  getProduct(id: number){
    const product = PRODUCTS.find(p => p.id == id);
    this.selectedProduct = product;
    console.log(this.selectedProduct?.size);
  }

}
