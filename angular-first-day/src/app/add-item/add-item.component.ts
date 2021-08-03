import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  addItemForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addItemForm = this.fb.group({
      productname: ['', Validators.required],
      price: ['', Validators.required],
      image: '',
      size35: false,
      size4: false,
      size45: false,
      size5: false,
      size55: false,
      size6: false,
      size65: false,
      size7: false
    });

  }

}
