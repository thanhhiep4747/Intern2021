export class Product {
    id: number;
    name: string;
    imgUrl: string;
    price: number;
    size: number[];

    constructor(id: number, name: string, imgUrl: string, price: number, size: number[]){
        this.id = id;
        this.name = name;
        this.imgUrl = imgUrl;
        this.price = price;
        this.size = size;
    }
}