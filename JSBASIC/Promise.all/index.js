// var fs = require('fs');
// // tạo ra 1 promise mới trong function nhận vào tham số là function  và return hàm readfile trong new promise đó
// // tham số của function này sẽ là 2 biến là resolve và reject resolve sẽ được gọi khi đọc xong file và lấy ra data còn nếu lỗi sẽ reject ra lỗi là err
// function readFilePromise(path) {
//     return new Promise(function (resolve,reject) {
//         fs.readFile(path,{encoding : 'utf8'},function (err,data) { // cú pháp readFile
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         });
//     });
// }
// readFilePromise('song2.txt')
// .then(function (song1) {
//     console.log(song1);
// }).catch(function (error) {
//     console.log(error);
// });  // replace đoạn này bằng promise.all

// sử dụng Promise.all để thu gọn code lúc gọi thực hiện promise
// Promise.all([ // nhận vào 1 mảng gồm nhiều promise
//     readFilePromise('./song1.txt'),
//     readFilePromise('./song2.txt')
// ]).then(function (values) { // promise all sẽ resolve ra mảng values nếu các promise resolve
//     console.log(values);
// }).catch(function (error) {
//     console.log(error);
// });

/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */
// var  axios = require("axios");
// function load(path) {
//     return new Promise(function(resolve,reject) {
//         axios.get(path).then(function(res,err){
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(res.data);
//             }
//         });
//     });
// }
//
// Promise.all([
//     load('https://jsonplaceholder.typicode.com/todos/1'),
//     load('https://jsonplaceholder.typicode.com/todos/2'),
//     load('https://jsonplaceholder.typicode.com/todos/3'),
// ]).then(function(response) {
//     console.log(response);
// }).catch(function(error) {
//     console.log(error);
// });