import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product,product_get } from 'src/data/products';
import { ProductsService } from '../products.service';
import { BaseComponent } from '../common/base.component';
import {takeUntil} from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent  implements OnInit {
  products_list?:product_get[]
  
  constructor(private router:Router,private productservice:ProductsService) {
  super()
   }

  ngOnInit(): void {
    this.productservice.getPorducts()
    .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (res) => {
          // debugger;
          console.log(res)
          this.products_list=res.data
        },
        (err) => {
          console.log(err);
        }
      );
  }
  add_product(){
    console.log('ahihi');
this.router.navigate(['/add-product'])
  }

}
