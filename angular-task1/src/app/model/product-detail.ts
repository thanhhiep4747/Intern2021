import { ProductSize } from "./product-size";

export interface ProductDetail {
    id: number;
    name: string;
    price: number;
    category: number;
    imageUrl: string;
    sizes: ProductSize[];
}
export class ProductDetail {
    constructor(id: number, name: string, price: number, category: number, imageUrl: string, sizes: ProductSize[]){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
        this.sizes = sizes;
    }
}
