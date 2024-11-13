// 1. Vòng Lặp
// - for
// Vòng lặp for cho phép bạn thực hiện một khối mã một số lần nhất định. Nó thường được sử dụng khi bạn biết trước số lần lặp.

// Cú pháp:

// javascript

// Copier
// for (initialization; condition; increment) {
//     // code to be executed
// }
// Ví dụ:

// javascript

// Copier
for (let i = 0; i < 5; i++) {
    console.log(i); // In ra các số từ 0 đến 4
}
// - forEach
// forEach là một phương thức của mảng, cho phép bạn lặp qua từng phần tử trong mảng và thực hiện một hàm đối với mỗi phần tử.

// Cú pháp:

// javascript

// Copier
// array.forEach(function(currentValue, index, array) {
//     // code to be executed
// });
// Ví dụ:

// javascript

// Copier
const numbers = [1, 2, 3];
numbers.forEach(num => {
    console.log(num); // In ra 1, 2, 3
});
// - for...of
// for...of cho phép bạn lặp qua các giá trị của một iterable (như mảng, chuỗi, hoặc các đối tượng iterable khác) mà không cần biết về chỉ số.

// Cú pháp:

// javascript

// Copier
// for (const item of iterable) {
//     // code to be executed
// }
// Ví dụ:

// javascript

// Copier
// const fruits = ['apple', 'banana', 'orange'];
// for (const fruit of fruits) {
//     console.log(fruit); // In ra từng loại trái cây
// }
// 2. Object
// - Khởi Tạo Object
// Object trong JavaScript là một tập hợp các cặp khóa-giá trị. Nó cho phép bạn lưu trữ dữ liệu và hành vi liên quan.

// Cú pháp:

// javascript

// Copier
// const obj = {
//     key1: value1,
//     key2: value2
// };
// Ví dụ:

// javascript

// Copier
// const car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2020
// };
// - Object Properties
// Properties (thuộc tính) là các cặp khóa-giá trị trong object. Bạn có thể truy cập chúng bằng cách sử dụng dấu chấm hoặc dấu ngoặc vuông.

// Ví dụ:

// javascript

// Copier
// console.log(car.brand); // "Toyota"
// console.log(car['model']); // "Camry"
// - Object Method
// Methods là các hàm được định nghĩa trong object. Chúng có thể truy cập các thuộc tính của object thông qua từ khóa this.

// Ví dụ:

// javascript

// Copier
// const person = {
//     name: 'Alice',
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// person.greet(); // "Hello, my name is Alice"
// 3. DOM (Document Object Model)
// DOM là một đại diện cho tài liệu HTML hoặc XML dưới dạng một cây cấu trúc. Bạn có thể truy cập và thay đổi các phần tử trong trang web bằng JavaScript.

// Ví dụ:
// javascript

// Copier
// const heading = document.getElementById('myHeading');
// heading.textContent = "Welcome to My Website"; // Thay đổi nội dung của phần tử
// 4. Events
// Events là các hành động hoặc xảy ra trong tài liệu HTML (như nhấn nút, di chuột, gõ phím, v.v.). Bạn có thể lắng nghe các sự kiện này và thực hiện các hành động khi chúng xảy ra.

// Ví dụ:
// javascript

// Copier
// const button = document.getElementById('myButton');
// button.addEventListener('click', function() {
//     alert('Button clicked!');
// });
// 5. Import/Export
// - Export
// export cho phép bạn xuất các biến, hàm hoặc lớp từ một module để sử dụng ở nơi khác.

// Ví dụ:

// javascript

// Copier
// // myModule.js
// export const myVariable = 42;
// export function myFunction() {
//     console.log('Hello from myFunction');
// }
// - Export Default
// export default cho phép bạn xuất một giá trị mặc định từ một module. Mỗi module chỉ có thể có một giá trị mặc định.

// Ví dụ:

// javascript

// Copier
// // myModule.js
// const myDefaultFunction = () => {
//     console.log('This is the default function');
// };

// export default myDefaultFunction;
// - Import
// import cho phép bạn nhập các giá trị đã được xuất từ một module khác.

// Ví dụ:

// javascript

// Copier
// // app.js
// import { myVariable, myFunction } from './myModule.js';
// import myDefaultFunction from './myModule.js'; // Nhập giá trị mặc định
// Tóm Tắt
// Vòng lặp cho phép bạn lặp qua các phần tử trong mảng hoặc thực hiện một khối mã nhiều lần.
// Object là cách lưu trữ dữ liệu và hành vi liên quan với nhau.
// DOM cho phép bạn truy cập và thay đổi nội dung của tài liệu HTML.
// Events cho phép bạn lắng nghe các tương tác người dùng và phản hồi lại chúng.
// Import/Export cho phép bạn tổ chức mã trong các module, giúp tái sử dụng và quản lý mã dễ dàng hơn.