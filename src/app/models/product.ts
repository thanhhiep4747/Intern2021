import { NumericLiteral } from "typescript";

export class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    color: string;
    size: number;
    imgUrl: string;
    note: string;
    noteDetails: string

    constructor(id = 0, name = '', price = 0, description = '', color = '', size = 0, imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/-Insert_image_here-.svg/1280px--Insert_image_here-.svg.png', note = '', noteDetails = '') {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.color = color;
        this.size = size;
        this.imgUrl = imgUrl;
        this.note = note;
        this.noteDetails = noteDetails;
    }
}
