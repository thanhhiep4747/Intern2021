import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  newProduct = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
    color: new FormControl(''),
    sizes: new FormControl(''),
    imgUrl: new FormControl(''),
    note: new FormControl(''),
    noteDetails: new FormControl('')
  });

  sizes = [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct() {
    console.log(this.newProduct.value);
    console.log(this.productService);
    let imgUrl = 'asdas';
    if(this.newProduct.value.imgUrl !== '') {
      imgUrl = this.newProduct.value.imgUrl;
    }
    else {
      imgUrl = "https://upload.wikimedia.org/wikipedia/commons/c/c9/-Insert_image_here-.svg"
    }
    this.productService.addProduct(new Product(
      this.productService.getProduct().length+1, 
      this.newProduct.value.name,
      this.newProduct.value.price,
      this.newProduct.value.description,
      this.newProduct.value.color,
      this.newProduct.value.sizes,
      imgUrl,
      this.newProduct.value.note,
      this.newProduct.value.noteDetails,
      ));
  }

}
