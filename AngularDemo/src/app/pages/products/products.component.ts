import { Component, OnInit } from '@angular/core';

type Data = {
  id: number,
  type: number,
  name: string,
  img: string,
  liked: boolean
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  list : Array<Data> = [
    {
      id: 0,
      type: 1,
      name: 'Balinese-Javanese',
      img: 'https://i1.wp.com/pawesomecats.com/wp-content/uploads/2016/01/Javanese-cat-breed-profile.jpg?fit=740%2C529&ssl=1',
      liked: false
    },
    {
      id: 1,
      type: 0,
      name: 'Shiba Inu',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      liked: false
    },
    {
      id: 2,
      type: 0,
      name: 'Chihuahua',
      img: 'https://tunglocpet.com/wp-content/uploads/2019/11/chihuahua-puppy-01.jpg',
      liked: false
    },
    {
      id: 3,
      type: 0,
      name: 'Husky',
      img: 'https://sieupet.com/sites/default/files/pictures/images/cho-Husky.jpg',
      liked: false
    },
    {
      id: 4,
      type: 0,
      name: 'Alaska',
      img: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/5/1/802529/5-Ly-Do-Thu-Vi-Khien-01.jpg',
      liked: false
    },
    {
      id: 5,
      type: 1,
      name: 'Abyssinian',
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Abyssinian_cat_-_Patricia.jpg',
      liked: false
    },
    {
      id: 6,
      type: 0,
      name: 'Poodle',
      img: 'https://sieupet.com/sites/default/files/5_2_0.jpg',
      liked: false
    },
    {
      id: 7,
      type: 0,
      name: 'Corgi',
      img: 'https://agrion.vn/content/uploads/photos/2019/11/beta_baa5c38d3aa2d12cf327a7d9c6b1204c.jpg',
      liked: false
    },
    {
      id: 8,
      type: 1,
      name: 'Birman',
      img: 'https://vuonpet.com/wp-content/gallery/birman/anh-meo-birman-2.jpg',
      liked: false
    },
    {
      id: 9,
      type: 0,
      name: 'Pug',
      img: 'https://tunglocpet.com/wp-content/uploads/2017/07/ban_cho_pug_con_01.jpg',
      liked: false
    },
    {
      id: 10,
      type: 0,
      name: 'Pitpull',
      img: 'https://thucanh.vn/wp-content/uploads/2018/05/cho-pitbull-1.jpg',
      liked: false
    },
    {
      id: 11,
      type: 1,
      name: 'American Bobtail',
      img: 'https://1.bp.blogspot.com/-dKommJG2rkE/X9ewmd9ZhoI/AAAAAAAAAFc/TuVq4HJx3TspXX4smC3QjuZaf-IbaY4WwCLcBGAsYHQ/s16000/093e15425b119c096bf4c1b2993d9efb5f9174c0.jpeg',
      liked: false
    },
    {
      id: 12,
      type: 1,
      name: 'Bombay',
      img: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/burmese-card-medium.jpg?bust=1535569899',
      liked: false
    },
  ]

  type : number = 0;

  onChangeType (value: number) : void {
    this.type = value;
  }

  like (item : Data) : void {
    this.list[item.id] = {
      ...item,
      liked: !item.liked
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
