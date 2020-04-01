// //Scope
// //1. Global Scope
// // 2. local Scope
// // scope là phạm vi hoạt động của 1 biến
// var a = 1;
// function random() {
// var b = Math.random();
// console.log(b);
// a = 3;
// }
// function doSomething() {
//     a = 5;
// }
// // console.log(b); //  không thể log b vì b đang chỉ là local scope
// // console.log(a); // a có thể log ra vì a là global scope
// doSomething(); // a sẽ thay đổi theo thứ tự gọi hàm
// random(); //  khi chạy hàm thì a sẽ bị tác động và a global lúc này sẽ thay đổi theo giá trị local scope
// console.log(a);
//
var a = -6;
var b = 3;
console.log(a*b);