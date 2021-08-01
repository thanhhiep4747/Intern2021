import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// type FakeData = Array<{
//   title: string,
//   content: string
// }>

export class HomeComponent implements OnInit {

  constructor() {
    
  }

  // data : FakeData = [
  //   {
  //     title: 'The Flight',
  //     content: ''
  //   },
  //   {
  //     title: 'The City',
  //     content: 'Chania is the capital of the Chania region on the island of Crete. The city can be divided into two parts, the old town and the modern city. You will learn more about web layout and responsive web pages in a later chapter.'
  //   },
  //   {
  //     title: 'The Island',
  //     content: ''
  //   },
  //   {
  //     title: 'The Food',
  //     content: ''
  //   },
  // ]

  ngOnInit(): void {
  }

}
