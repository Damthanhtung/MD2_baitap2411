import {Product} from "./model/Product";
import {ProductManager} from "./service/ProductManager";
let productManager = new ProductManager();
let product = new Product(1, 'IphoneX',100,1,'Apple');
let product1 = new Product(2,'S10',200,2,'Samsung');
let product2 = new Product(3,'reno7',300,3,'Oppo');
let product3 = new Product(4,'1730',400,4,'Nokia');
let product4 = new Product(5,'1380',400,5,'Nokia');
// Thêm sản phẩm
productManager.add(product);
productManager.add(product1);
productManager.add(product2);
productManager.add(product3);
// Xóa sản phẩm
// productManager.remove(1);
console.log('--------Hiển thị sản phẩm---------');
console.log(productManager);
// console.log('--------Xóa sản phẩm-----------');
// console.log(productManager);
// console.log('---------Hiển thị theo giá---------');
// console.log(productManager.findByPrice(300,400));
console.log('------Sửa sản phẩm-------');
productManager.edit(1,product4);
console.log(productManager);
console.log('-------Tìm kiếm sản phẩm bằng giá-----------');
console.log(productManager.findByPrice(300, 400));
console.log('---------Tìm kiếm sản phẩm theo hãng----------');
console.log(productManager.findByCompany('Samsung'));
console.log('-------Sắp xếp giá tăng dần--------');
console.log(productManager.sortPriceUp());
console.log('-------Sắp xếp giá giảm dần--------');
console.log(productManager.sortPriceDown());
console.log('-------Sắp xếp số lượng giảm dần--------');
console.log(productManager.sortAmountDown());
console.log('-------Tìm kiếm theo tên gần nhất -------');
console.log(productManager.findTheApproximateName('re'))

