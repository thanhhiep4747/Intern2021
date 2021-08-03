import { Product } from "./Iproduct";

export let PRODUCTS: Array<Product> = [
    {id: 1, name: 'Giày adidas Ultraboost x LEGO Colors', imgUrl:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/6a0d6246e26a4852825dad3900baddfd_9366/Giay_adidas_Ultraboost_x_LEGO(r)_Colors_trang_FZ3983_01_standard.jpg', price: 5000000, size: [3.5, 4, 4.5, 5, 5.5, 6]},
    {id: 2, name: 'Giày Forum Low Nam Originals', imgUrl:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f64a0e3176364556aa83ad220006023a_9366/Giay_Forum_Low_trang_GZ9112_01_standard.jpg', price: 2500000, size: [3.5, 4, 4.5, 5, 5.5, 6]},
    {id: 3, name: 'Giày adidas Ultraboost DNA x LEGO Colors', imgUrl:'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b22f9d0d3fd54d279acbad1d00b4ddc5_9366/gi%C3%A0y-adidas-ultraboost-dna-x-lego-colors.jpg', price: 5000000, size: [3.5, 4, 4.5, 5, 5.5, 6]},
    {id: 4, name: 'Giày Đá Bóng Sân Cỏ Nhân Tạo Predator Freak.3', imgUrl:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/091edb21f798400195cbad26007b059d_9366/Giay_DJa_Bong_San_Co_Nhan_Tao_Predator_Freak.3_DJo_FY6311_01_standard.jpg', price: 2400000, size: [3.5, 4, 4.5, 5, 5.5, 6]},
    {id: 5, name: 'HU NMD N.E.R.D. Nam Originals', imgUrl:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ca4f935f2e8347ce941aac84011ec008_9366/HU_NMD_N.E.R.D._trang_GW0246_01_standard.jpg', price: 6000000, size: [3.5, 4, 4.5, 5, 5.5, 6]},
    {id: 6, name: 'Giày Đá Bóng Sân Cỏ Nhân Tạo X Speedflow.4', imgUrl:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0d62d56ed23a4c4e83f6ad0a00b26bfd_9366/Giay_DJa_Bong_San_Co_Nhan_Tao_X_Speedflow.4_DJen_FY3333_01_standard.jpg', price: 1500000, size: [3.5, 4, 4.5, 5, 5.5, 6]},
    {id: 7, name: 'Giày Forum Low Donovan Mitchell Nam Originals', imgUrl:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1bf4aadbff104009b8b5ad41000f7758_9366/Giay_Forum_Low_Donovan_Mitchell_trang_GY8287_01_standard.jpg', price: 2800000, size: [3.5, 4, 4.5, 5, 5.5, 6]},
    {id: 8, name: 'Giày adidas Superstar x LEGO Originals', imgUrl:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3c4067b13da442efba23ad1e01567a30_9366/Giay_adidas_Superstar_x_LEGO(r)_trang_GW5270_01_standard.jpg', price: 3500000, size: [3.5, 4, 4.5, 5, 5.5, 6]},
    {id: 9, name: 'Giày X9000L3 Nam Chạy', imgUrl:'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ad9bc0a8c4e94561b8f3ad2c00c33265_9366/gi%C3%A0y-x9000l3.jpg', price: 3500000, size: [3.5, 4, 4.5, 5, 5.5, 6]},
    {id: 10, name: 'Giày NMD_R1 Nam Originals', imgUrl:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/82b9b2a940004241a7c7ad2f00dbeb44_9366/Giay_NMD_R1_trang_GZ7947_01_standard.jpg', price: 3600000, size: [3.5, 4, 4.5, 5, 5.5, 6]}

];

export function _addProduct(newProduct:Product) {
    PRODUCTS.push(newProduct)
    return PRODUCTS
}

export function _removeProduct(id: number){
    PRODUCTS = PRODUCTS.filter(item => item.id != id)
    return PRODUCTS
}