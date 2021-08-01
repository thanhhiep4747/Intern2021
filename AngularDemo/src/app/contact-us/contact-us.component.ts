import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name! : string;
  email = '';
  phone = '';
  message = '';


  constructor() {
    
   }

  ngOnInit(): void {
  }

  submitForm(): void {
    alert()
  }

}
