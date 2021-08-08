import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductOverview } from '../model/product-overview';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  //productService: ProductService;
  products: ProductOverview[] = [];
  constructor(private productService: ProductService, private router: Router) {
    productService.getAllProducts().subscribe(data => {
      this.products = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    
  }
  
  selectProduct(id: number){
    console.log(id);
    this.router.navigateByUrl('/products/' + id);
  }
}
