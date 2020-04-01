// npm node package manager
// module read-line-sync để tạo ra câu hỏi người dùng nhập vào và lấy giá trị
// cách cài đặt module vào hệ thông
// b1 : npm init next và enter đến hết
// b2 : npm install (tên moudle) --save để lưu lại module vào file package.json
// sử dụng thử
var readlineSync = require('readline-sync');
// var userName = readlineSync.question('Enter your username? ');
// console.log("user name is :"+userName)
// var languages = []; // tạo 1 chuỗi trống
// var language = readlineSync.question('Your language ? ');
// languages.push(language);
// console.log(languages);
var pet = {};
var name = readlineSync.question('Pet name ? ');
var weight = readlineSync.question('Pet weight ? ');
var gender = readlineSync.question('Pet gender ? ');
pet.name = name; // tạo ra các thuộc tính của pet để lấy giá trị
pet.weight = weight;
pet.gender = gender;
console.log(pet);
