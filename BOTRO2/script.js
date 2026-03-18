// 1. Cú pháp khai báo mảng
// các kiểu dữ liệu trong js string number boolean object undifine null NaN
const numbers = [1, 2, 3, 4, 5, 6];
const studens = ["Nguyên Văn A", "Nguyễn Văn B"]; //'', "", ``
const products = [
  { id: 1, name: "Cam", price: 400000 },
  { id: 2, name: "Xoài", price: 500000 },
  { id: 3, name: "Ổi", price: 900000 },
  { id: 4, name: "Dưa", price: 100000 },
];

// 2. Truy cập phần tử trong mảng

// chỉ số trong mảng vị trí 0
// độ dài của mảng sử dụng phương thức lengh
products.length;
//lấy ra phần tử của mảng
products[0];

// 3. Thao tác làm việc với mảng

// duyệt mảng cần biết độ dài mảng , điều kiện kết thúc, giá trị khởi tạo, bước nhảy
for (let i = 0; i < numbers.length; i++) {
    console.log(`Vị trí ${i+1} là: ${i}`);
    
}

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}


// 4. Thao tác làm việc với mảng

// thêm phần tử vào đầu mảng 
numbers.unshift(10,20)
console.log(`Mảng number sau khi thêm phần tử vào đầu mảng: ${numbers}`);

// thêm phần tử vào cuối mảng 
numbers.push(10,20)
console.log(`Mảng number sau khi thêm phần tử vào cuối mảng: ${numbers}`);

// thêm phần tử vào vị trí cụ thể
numbers.splice(4,0,100) // thao tác trựuc tiếp vào mảng xoá mảng
console.log(`Mảng sau khi thêm vào vị trí bất kì ${numbers}`);

// thao tác sửa(xác định vị trí cần sửa trong mảng và gắn lại giá trị mới )
numbers[2]=30

// thao tác xoá phần tử của mảng 
// xoá phần tử đầu
numbers.shift()

// xoá cuối s
numbers.pop()

// cắt mảng lọc mảng ở vị trí cụ thể (không thay đổi mảng gốc)
let result =numbers.slice(0,3)
console.log(`Mảng sau khi cắt ${result}`);




