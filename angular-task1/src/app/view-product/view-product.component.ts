import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }
  //productId: number = 0;
  product: Product = new Product(0,
    0,
    [],
    "https://ctagency.vn/wp-content/uploads/2020/05/404.png",
    0,
    "",
    ""
  );
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let productId = this.route.snapshot.paramMap.get('id');
      if (productId === null){
        productId = "0";
      }
      console.log(productId);
      this.product = this.productService.getProduct(parseInt(productId));
    });
  }

  onDeleteClick(){
    this.productService.removeProduct(this.product.id);
    this.router.navigateByUrl("/products");
  }
}
