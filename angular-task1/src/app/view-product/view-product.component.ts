import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductDetail } from '../model/product-detail';
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
  product: ProductDetail = new ProductDetail(0, "", 0, 0, "https://ctagency.vn/wp-content/uploads/2020/05/404.png", []);
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let productId = this.route.snapshot.paramMap.get('id');
      if (productId === null){
        productId = "0";
      }
      console.log(productId);
      this.productService.getProduct(parseInt(productId)).subscribe(data => {
        if (data.length > 0)
          this.product = data[0];
        console.log(data);
      });
    });
  }

  onDeleteClick(){
    this.productService.removeProduct(this.product.id).subscribe((data) => {
      this.router.navigateByUrl("/products");
    });
  }
}
