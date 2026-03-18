//  Object
let product = [
  { id: 1, name: "Đồng hồ", price: 50000, quantity: 6, description: "Mới 92%" },
  { id: 2, name: "Đồng hồ", price: 70000, quantity: 4, description: "Mới 93%" },
  { id: 3, name: "Đồng hồ", price: 60000, quantity: 2, description: "Mới 96%" },
  { id: 4, name: "Đồng hồ", price: 10000, quantity: 7, description: "Mới 99%" },
  {
    id: 5,
    name: "Đồng hồ",
    price: 30000,
    quantity: 9,
    description: "Mới 100%",
  },
];

//ĐỌC:READ
//foreach để in qua từng object
product.forEach((item) => {
  console.log(
    item['name']// có thể dùng item.name
    // `${item.id}-${item.name}-${item.price}-${item.quantity}-${item.description}`,
  );
});
// map trả về mảng mới
let result = product.map((item) => {
  return `${item.id}-${item.name}-${item.price}-${item.quantity}-${item.description}`;
});
console.log(result);

//THÊM:CREATE
// let newId = +prompt("Mời bạn nhập id mới");
// let newName = prompt("Mời bạn nhập tên mới");
// let newPrice = +prompt("Mời bạn nhập giá mới");
// let newQuantity = +prompt("Mời bạn nhập số lượng mới");
// let newDescription = prompt("Mời bạn nhập mô tả mới");

// let newProduct = {
//   id: newId,
//   name: newName,
//   price: newPrice,
//   quantity: newQuantity,
//   description: newDescription,
// };

// product.push(newProduct);

// console.log(product);

// XOÁ:DELETE
let deleteId = +prompt("Nhập id cần xoá");

// trả về mảng mưới không có id người dùng nhập tươn đương đã xoá filter
// let searchProduct = product.filter((product) => {
//   return product.id != deleteId;
// });
// console.log(searchProduct);

// dùng findIndex
let find = product.findIndex((product) => {
  return product.id === deleteId;
});
console.log(`Đây là kết quả dùng ${find}`);


// SỬA : UPDATE
// let updateId = +prompt("Nhập id muốn thêm");
// let index = product.findIndex((product) => {
//   product.id = updateId;
// });
