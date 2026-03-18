// id
// Tên
// Giá
// Số lượng
// mô tả

let products = [
  {
    id: 1,
    name: "đồng hồ",
    price: 50000,
    quantity: 5,
    description: "đồng hồ thuỵ sĩ",
  },
  {
    id: 2,
    name: "máy giặt",
    price: 70000,
    quantity: 2,
    description: "máy giặt thuỵ sĩ",
  },
  {
    id: 3,
    name: "máy tính",
    price: 100000,
    quantity: 4,
    description: "máy tính thuỵ sĩ",
  },
  {
    id: 4,
    name: "ô tô",
    price: 500000,
    quantity: 11,
    description: "ô tô thuỵ sĩ",
  },
  {
    id: 5,
    name: "xe máy",
    price: 150000,
    quantity: 10,
    description: "xe máy thuỵ sĩ",
  },
];

// for (let i = 0; i < products.length; i++) {
//   const element = products[i];
//   console.log(element);
// }
// foreach
let result = [];
products.forEach((value, index) => {
  result.unshift(
    `id:${value.id}-name:${value.name}-price:${value.price}-quantity:${value.quantity}-desc:${value.description}`,
  );
});
console.log(result);

// map
let resultMap = products.map((value, index) => {
  return `id:${value.id}-name:${value.name}-price:${value.price}-quantity:${value.quantity}-desc:${value.description}`;
});
console.log(resultMap);

// Thêm

// let idNew = +prompt("nhập id mới ");
// let nameNew = prompt("nhập tên mới ");
// let priceNew = +prompt("nhập giá tiền mới ");
// let quantityNew =+prompt("nhập số lượng mới ");
// let descriptionNew = prompt("nhập chi tiết của sản phẩm ");

// let newProducts = {
//     id: idNew,
//     name: nameNew,
//     price: priceNew,
//     quantity: quantityNew,
//     description: descriptionNew,
// }

// console.log(products);

// products.push(newProducts);

// console.log(products);

// Xoá

// let deleteId = +prompt(`Nhập id sản phẩm cần xoá`);

// tự làm xoá splice

// let searchProduct = products.filter((product) => {
//   return product.id !== deleteId;
// });
// console.log(searchProduct);

// let index = products.findIndex((product) => product.id === deleteId);//findIndex trả về -1 nếu không tìm thấy và tả vể kết quả của index 2 (nếu nằm ở vị trí thứ 3).
// console.log(`Đây là kết quả của index ${index}`);

// products.splice(index, 1);// cắt vị trí muốn xoá đang lỗi 
// console.log(products);

Sửa
let updateId = +prompt(`Nhập id sản phẩm cần sửa`);
let index = products.findIndex((product) => product.id === updateId);

let newName = prompt(`Nhập lại tên `);
let newPrice = +prompt(`Nhập giá mới: `);
let newQuantity = +prompt(`Nhập số lượng: `);
let newDescription = prompt(`Nhập chi tiết sản phẩm`);

console.log(products[index]);

products[index].name = newName;
products[index].price = newPrice;
products[index].quantity = newQuantity;
products[index].description = newDescription;

console.log(products[index]);

// Sort

products = products.sort((a, b) => a.price - b.price);
console.log(products);

products = products.sort((a, b) => b.price - a.price);
console.log(products);

// Filter by price

// Tìm các sản phẩm có mức giá >= 100000

let filterProduct = products.filter((item) => item.price >= 100000);
console.log(filterProduct);

// Tổng số vốn

let totalRevenue = products.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);
console.log(totalRevenue);