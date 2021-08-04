import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/data/products';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
// import { MatIconRegistry } from '@angular/material';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:product=new product()
  constructor(private route:ActivatedRoute,
    private router: Router,
    private matIconRegistry:MatIconRegistry,private domSanitizer:DomSanitizer,
    private productservice:ProductsService) {
      this.matIconRegistry.addSvgIcon("note",this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/svg/note.svg"));
      this.matIconRegistry.addSvgIcon("car",this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/svg/station-wagon.svg"));
      
     }

  ngOnInit(): void {
    const routerParam=this.route.snapshot.paramMap;
    const productId=Number(routerParam.get('productId'))
    console.log(productId);
    let  tmp_product=this.productservice.findProduct(productId)
    console.log(this.product);
    
    if (tmp_product===undefined){
this.router.navigate(['/products'])
    }else
    this.product=tmp_product
  }
  onDelete(){
    
    if (confirm("you definitely want to delete this product ")){
      console.log(this.product.id)
      if (this.product.id){this.productservice.removeProduct(this.product.id);
      this.router.navigate(['/products'])
      
      }
    }
    }
  onUpdate(){
      this.router.navigate(['/update-product',this.product.id]);
  }
}


