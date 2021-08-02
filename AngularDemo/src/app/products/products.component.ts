import { Component, OnInit } from '@angular/core';

type FakeData = Array<{
  id: number,
  name: string,
  img: string
}>

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data : FakeData = [
    {
      id: 0,
      name: 'Shiba Inu',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
    },
    {
      id: 1,
      name: 'Chihuahua',
      img: 'https://tunglocpet.com/wp-content/uploads/2019/11/chihuahua-puppy-01.jpg'
    },
    {
      id: 2,
      name: 'Husky',
      img: 'https://sieupet.com/sites/default/files/pictures/images/cho-Husky.jpg'
    },
    {
      id: 3,
      name: 'Alaska',
      img: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/5/1/802529/5-Ly-Do-Thu-Vi-Khien-01.jpg'
    },
    {
      id: 4,
      name: 'Poodle',
      img: 'https://sieupet.com/sites/default/files/5_2_0.jpg'
    },
    {
      id: 5,
      name: 'Corgi',
      img: 'https://agrion.vn/content/uploads/photos/2019/11/beta_baa5c38d3aa2d12cf327a7d9c6b1204c.jpg'
    },
    {
      id: 6,
      name: 'Pug',
      img: 'https://tunglocpet.com/wp-content/uploads/2017/07/ban_cho_pug_con_01.jpg'
    },
    {
      id: 7,
      name: 'Pitpull',
      img: 'https://thucanh.vn/wp-content/uploads/2018/05/cho-pitbull-1.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
