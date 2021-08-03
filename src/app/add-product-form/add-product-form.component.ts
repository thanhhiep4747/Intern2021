import { identifierModuleUrl, sanitizeIdentifier } from '@angular/compiler';
import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormArray, FormArrayName, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Product } from '../list-product/Iproduct';


@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  sizeForm: FormGroup;
  productForm = new FormGroup({});
  sizeList: number[] = [3.5,4,4.5,5,5.5,6];
  editProduct: Product= {id:0, name:'', imgUrl: '', price: 0, size: []};

  constructor(
    private dialogRef: MatDialogRef<AddProductFormComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data:any
  ) {
    if(data != null){
    this.editProduct = data;}
    this.sizeForm = this.fb.group({
      selectedSizes: this.fb.array([])
    });
    

  }

  ngOnInit() {
    console.log(this.editProduct)
    this.productForm = this.fb.group({
      name: new FormControl(this.editProduct.name, [Validators.required]),
      imgUrl: new FormControl(this.editProduct.imgUrl,[Validators.required]),
      price: new FormControl(this.editProduct.price, [Validators.required]),
    })
  }

  
  onCheckboxChange(event:any) {
    const selectedSizes: FormArray = this.sizeForm?.get('selectedSizes') as FormArray;
    
    if(event.target.checked) {
      selectedSizes.push(new FormControl(event.target.value));
    } else{
      let i: number = 0;
      selectedSizes.controls.forEach((item: AbstractControl)=>{
        if (item.value == event.target.value){
          selectedSizes.removeAt(i);
          return;
        }
        i++;
      });
    }

  }

  save() {
    this.dialogRef.close({id:this.editProduct.id,...this.productForm.value,...this.sizeForm.value});
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
