import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/data/products';
import { Router } from '@angular/router';
// import { ConsoleReporter } from 'jasmine';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  FormUpdate :FormGroup=new FormGroup({
    productname:new FormControl("",[Validators.required]),
    productprice:new FormControl (0,[Validators.required,Validators.min(1)]),
    productimage:new FormControl ("",[Validators.required]),
    productdetail:new FormControl("",[Validators.required])
  })
  list_size?:number[]
  product?:product;
  constructor(private route:ActivatedRoute,
    private router: Router,private productservice:ProductsService) {

   }

  ngOnInit(): void {
    const routerParam=this.route.snapshot.paramMap;
    const productId=Number(routerParam.get('Id'))
    console.log(productId);
    let  tmp_product=this.productservice.findProduct(productId)
    console.log(this.product);
    
    if (tmp_product===undefined){
this.router.navigate(['/products'])
    }else
    this.product=tmp_product
    this.FormUpdate.setValue({productname:this.product?.name,
      productprice:this.product?.price,
      productimage:this.product?.img,
      productdetail:this.product?.detail})
      this.list_size=this.product?.size
  }
  checkCheckBoxvalue(event:any,size:number){
    console.log(event.checked)
    if (event.checked)this.list_size?.push(size);
    else {
      this.list_size?.forEach((item,index)=>{
        if (item==size){
          this.list_size?.splice(index,1);
        }
  
      });
    }
    console.log(this.list_size)
  }
  submitFormUpdate(){
    if (!this.list_size){alert("please choose size");return;}
    console.log(this.product?.id)
    if (this.product?.id!=undefined){
this.productservice.updateProduct(this.product.id,
  this.FormUpdate.value.productname,
  this.FormUpdate.value.productprice,this.FormUpdate.value.productimage,this.list_size,this.FormUpdate.value.productdetail)
    
    this.product=this.productservice.findProduct(this.product.id)
    this.router.navigate(['/products'])
}
  }

  checkSize(size:number){
    return this.list_size?.find(i=>i==size)!=undefined
  }

}
