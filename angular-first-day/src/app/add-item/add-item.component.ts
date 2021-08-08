import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product/product/product.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  addItemForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.addItemForm = this.fb.group({
      productname: ['', Validators.required],
      price: ['', Validators.required],
      image:'',
      size1: false,
      size2: false,
      size3: false,
      size4: false,
      size5: false,
      size6: false,
      size7: false,
      size8: false
    });

  }





}
