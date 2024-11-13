// /*
//     Ôn tập kiến thức Js cơ bản
//     1. Function
//         - khởi tạo hàm
//             Cú pháp: function <tên_hàm>(){}
//         - các kiểu hàm trong js
//             - hàm không có tham số và không có giá trị trả về
//             - hàm không có tham số và  có giá trị trả về
//             - hàm  có tham số và không có giá trị trả về
//                 tham số: giống như biến, được truyền vào trong hàm khi khởi tạo hàm
//                 đối số: là giá trị truyền vào hàm khi gọi hàm ra thực thi
//             - hàm  có tham số và có giá trị trả về
//         - arrow function
//         - default params
    
// */

// function hello() {
//   console.log("Xin chao cac ban!");
// }
// hello();

// // function sum() {
// //   const a = 50;
// //   const b = 100;
// //   const result = a + b;
// //   return result;
// // }

// // const tienDanhDe = sum() * 70;
// // console.log(tienDanhDe);

// // function sum(a, b) {
// //   const result = a + b;
// //   return result;
// // }
// // console.log(sum(10, 20));

// const sum = (a = 1, b = 2) => a + b;

// console.log(sum(100, 200));




// Khởi tạo mảng products
let products = ["iphone", "xiaomi", "vinsmart"];

// Hàm thêm mới sản phẩm
function addProduct() {
    const newProduct = prompt("Nhập tên sản phẩm mới:");
    if (newProduct) {
        products.push(newProduct);
        console.log(`Sản phẩm "${newProduct}" đã được thêm vào mảng.`);
    } else {
        console.log("Tên sản phẩm không được để trống.");
    }
    console.log("Mảng hiện tại:", products);
}

// Hàm cập nhật sản phẩm
function updateProduct() {
    const oldProduct = prompt("Nhập tên sản phẩm cần cập nhật:");
    const newProduct = prompt("Nhập tên sản phẩm mới:");

    if (products.includes(oldProduct)) {
        const index = products.indexOf(oldProduct);
        products[index] = newProduct;
        console.log(`Sản phẩm "${oldProduct}" đã được cập nhật thành "${newProduct}".`);
    } else {
        console.log("Sản phẩm không tồn tại.");
    }
    console.log("Mảng hiện tại:", products);
}

// Hàm xóa sản phẩm
function deleteProduct() {
    const productToDelete = prompt("Nhập tên sản phẩm muốn xóa:");

    if (products.includes(productToDelete)) {
        products = products.filter(product => product !== productToDelete);
        console.log(`Sản phẩm "${productToDelete}" đã được xóa.`);
    } else {
        console.log("Sản phẩm không tồn tại.");
    }
    console.log("Mảng hiện tại:", products);
}

// Ví dụ cách gọi các hàm
addProduct();   // Gọi hàm thêm mới
updateProduct(); // Gọi hàm cập nhật
deleteProduct(); // Gọi hàm xóa