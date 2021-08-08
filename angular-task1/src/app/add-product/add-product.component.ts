import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductDetail } from '../model/product-detail';
import { CreateProductDto } from '../model/create-product-dto';
import { ProductSize } from '../model/product-size';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productService: ProductService;
  router: Router;

  constructor(productService: ProductService, router: Router) {
    this.productService = productService;
    this.router = router;
   }

  ngOnInit(): void {
  }

  categories: Category[] = [
    {id: 1, value: "Nam Chạy"},
    {id: 2, value: "Originals"},
    {id: 3, value: "Nam Originals"},
    {id: 4, value: "Colors"},
    {id: 5, value: "Đánh gôn"}];
  sizes: Size[] = [
    {id: 1, value: "3.5 UK"},
    {id: 2, value: "4 UK"},
    {id: 3, value: "4.5 UK"},
    {id: 4, value: "5 UK"},
    {id: 5, value: "5.5 UK"},
    {id: 6, value: "6 UK"},
    {id: 7, value: "6.5 UK"},
    {id: 8, value: "7 UK"}
  ]
  addProductForm = new FormGroup({
    name: new FormControl("", Validators.required),
    price: new FormControl(0, Validators.required),
    imageUrl: new FormControl(""),
    sizes: new FormControl(Array(this.sizes.length).fill(0)),
    category: new FormControl(this.categories[0].id)
  });

  addSize(values: MatCheckboxChange, id: number){
    if (values.checked)
      this.addProductForm.controls["sizes"].value[id-1] = 1;
    else
      this.addProductForm.controls["sizes"].value[id-1] = 0;
  }

  onSubmit(){
    let totalSizeTypes = this.addProductForm.controls["sizes"].value.reduce((a: number, b: number) => a + b);
    if (this.addProductForm.valid && totalSizeTypes > 0) {
      console.log(this.addProductForm.value);
      const formInput = this.addProductForm.value;

      const selectedSizes = this.mapSelectedSize(formInput.sizes);
      
      //console.log(formInput.sizes);
      this.productService.addProduct(new CreateProductDto(
        formInput.name,
        formInput.price,
        formInput.category,
        formInput.imageUrl,
        selectedSizes,
      )).subscribe(data => {
        //console.log(data);
        this.back();
      });

    }
  }
  mapSelectedSize(arr: number[]){
    let selectedSizes: ProductSize[] = [];
    for (let i in arr){
      if (arr[i] == 1)
        selectedSizes.push({sizeId: parseInt(i)+1, quantity: 1});
    }
    return selectedSizes;
  }
  back(){
    this.router.navigateByUrl("products");
  }
}
interface Category {
  id: number;
  value: string;
}
interface Size {
  id: number;
  value: string;
}