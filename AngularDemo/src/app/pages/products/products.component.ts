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
    {
      id: 13,
      type: 0,
      name: 'American Foxhound',
      img: 'https://bowwowinsurance.com.au/wp-content/uploads/2021/02/shutterstock_1444833281-American-Foxhound-in-a-public-park-thumbnail-Bow-Wow-Meow-Pet-Insurance.jpg',
      liked: false
    },
    {
      id: 14,
      type: 0,
      name: 'American Eskimo',
      img: 'https://vuongquocloaivat.com/wp-content/uploads/2018/09/cho-american-eskimo.jpg',
      liked: false
    },
    {
      id: 15,
      type: 0,
      name: 'Appenzeller Sennenhunde',
      img: 'https://einfachtierisch.de/media/cache/article_main_image/cms/2016/12/Appenzeller-Sennenhund-MyImages-Micha-Shutterstock-306804173.jpg?266705',
      liked: false
    },
    {
      id: 16,
      type: 0,
      name: 'Golden Retriever',
      img: 'https://bompets.com/wp-content/uploads/2021/01/cho-golden-retriever-2-413x400.jpg',
      liked: false
    },
    {
      id: 17,
      type: 0,
      name: 'German Shepherd',
      img: 'https://dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg',
      liked: false
    },
    {
      id: 18,
      type: 0,
      name: 'Beagle',
      img: 'http://file.hstatic.net/1000238938/file/beagle_e42519e11ec64c208e57e0b9dbf4487d_grande.jpg',
      liked: false
    },
    {
      id: 19,
      type: 2,
      name: 'Eclectus',
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Eclectus_roratus-20030511.jpg',
      liked: false
    },
    {
      id: 20,
      type: 2,
      name: 'Umbrella Cockatoo',
      img: 'https://i.pinimg.com/originals/f7/f5/bb/f7f5bb6e7004cea84efa90d8908c7fdb.jpg',
      liked: false
    },
    {
      id: 21,
      type: 2,
      name: 'Blue-and-Gold Macaw',
      img: 'https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2017-11/0qNtddiaSo.jpg',
      liked: false
    },
    {
      id: 22,
      type: 1,
      name: 'British Shorthair',
      img: 'https://cdn.britannica.com/q:60/92/181392-050-08187DB5/cat-British-Shorthair-grey.jpg',
      liked: false
    },
    {
      id: 23,
      type: 1,
      name: 'Persian',
      img: 'https://cdn.britannica.com/q:60/47/168047-050-874ABD37/cat-hair-growl-teeth-snarl.jpg',
      liked: false
    },
    {
      id: 24,
      type: 2,
      name: 'Dwarf Roborovski',
      img: 'https://www.thesprucepets.com/thmb/jnfvnG0Z8e-iUAY_iQ5I5ADt4Aw=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1157798585-41025aa3b70f4615b234fd9fb30d7d1b.jpg',
      liked: false
    },
    {
      id: 25,
      type: 2,
      name: 'Syrian (Golden) Hamster',
      img: 'https://www.thesprucepets.com/thmb/bTrscdxxz1RNO7qlidG6SecWK8U=/2119x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-525140239-8808998be45e4bfa9140ae9dbcfe2d79.jpg',
      liked: false
    },
    {
      id: 26,
      type: 2,
      name: 'Koi',
      img: 'https://lh3.googleusercontent.com/proxy/5vzRrmiVerjbckwccXPi2ELZCkD79t1cOAzXG0rkfTO1ZFgSN5VES-KsW0KqLEMp0z34Rb2HQndofrTsqgvZKXH6RbYwN9dXC1aBjrPLhC3iGrY7Bcea_zrgwU_jEG60',
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
