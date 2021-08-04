import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { products,product } from 'src/data/products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products_list?:product[]
  
  constructor(private router:Router,private productservice:ProductsService) {
  
   }

  ngOnInit(): void {
    this.products_list=this.productservice.getPorducts()
  }
  add_product(){
    console.log('ahihi');
this.router.navigate(['/add-product'])
  }

}
