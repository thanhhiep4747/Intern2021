import { Component, OnInit,Output,EventEmitter } from '@angular/core';
// import { product,products } from 'src/data/products';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addForm :FormGroup=new FormGroup({
    productname:new FormControl("",[Validators.required]),
    productprice:new FormControl (0,[Validators.required,Validators.min(1)]),
    productimage:new FormControl ("",[Validators.required]),
    productdetail:new FormControl("",[Validators.required])
  })
  list_size!:number[]
  constructor(private router:Router,private productservice:ProductsService) { }

  ngOnInit(): void {
    this.list_size=[]
  }
checkCheckBoxvalue(event:any,size:number){
  console.log(event.checked)
  if (event.checked)this.list_size.push(size);
  else {
    this.list_size.forEach((item,index)=>{
      if (item==size){
        this.list_size.splice(index,1);
      }

    });
  }
  console.log(this.list_size)
}

submitFormAdd(){
  if (this.addForm.invalid){
    alert(this.addForm.errors);
    return ;
  }
  if(this.list_size.length===0){
    alert("please choose more than 1 size");
    return ;
  }
  
  // alert(this.addForm.value.productname)
  this.productservice.addProduct({id:this.productservice.getLenghtProducts(),name:this.addForm.value.productname,
    price:this.addForm.value.productprice,
    img:this.addForm.value.productimage,size:this.list_size,detail:this.addForm.value.productdetail})
    this.router.navigate(['/products'])
}
}
