// export interface ProductOverView {
//     id: number;
//     name: string;
//     price: number;
//     category: number;
//     imageUrl: string;
//     quantity: number;
// }
export class ProductOverview {
    id: number;
    name: string;
    price: number;
    category: number;
    imageUrl: string;
    quantity: number;
    constructor(id: number, name: string, price: number, category: number, imageUrl: string, quantity: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.imageUrl = imageUrl;
        this.quantity = quantity;
    }
}
