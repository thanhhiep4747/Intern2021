import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSize } from '../model/product-size';
import { CreateProductDto } from '../model/create-product-dto';
import { ProductDetail } from '../model/product-detail';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }
  product: ProductDetail = new ProductDetail(0, "", 0, 0, "https://ctagency.vn/wp-content/uploads/2020/05/404.png", []);
  updateProductForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let productId = this.route.snapshot.paramMap.get('id');
      if (productId === null){
        productId = "0";
      }
      console.log(productId);
      this.getCurrentProductInfo(productId);
      //this.product.id = parseInt(productId);
      
    });
  }
  getCurrentProductInfo(id: string){
    this.updateProductForm = new FormGroup({
      name: new FormControl(this.product.name, Validators.required),
      price: new FormControl(this.product.price, Validators.required),
      imageUrl: new FormControl(this.product.imageUrl),
      sizes: new FormControl(Array(this.sizes.length).fill(0)),
      category: new FormControl(this.product.category)
    });
    this.productService.getProduct(parseInt(id)).subscribe(data => {
      this.product = data;
      this.updateProductForm.controls["name"].setValue(this.product.name);
      this.updateProductForm.controls["price"].setValue(this.product.price);
      this.updateProductForm.controls["category"].setValue(this.product.category);
    });
    
  }
  fillCurrentData(){
    //this.addProductForm.controls["name"].value = this.product.name;
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
  

  addSize(values: MatCheckboxChange, id: number){
    if (values.checked)
      this.updateProductForm.controls["sizes"].value[id-1] = 1;
    else
      this.updateProductForm.controls["sizes"].value[id-1] = 0;
  }

  onSubmit(){
    let totalSizeTypes = this.updateProductForm.controls["sizes"].value.reduce((a: number, b: number) => a + b);
    if (this.updateProductForm.valid && totalSizeTypes > 0) {
      console.log(this.updateProductForm.value);
      const formInput = this.updateProductForm.value;

      const selectedSizes = this.mapSelectedSize(formInput.sizes);
      
      //console.log(formInput.sizes);
      this.productService.updateProduct(this.product.id, new CreateProductDto(
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