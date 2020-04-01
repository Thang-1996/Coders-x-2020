// Promise
// Promise cũng là 1 contructor function
// module sử dụng promise là promise fs
// requires promise
// var fs = require('promise-fs');
// sử dụng then
// function onDone(song){
//     console.log(song); // truyền vào hàm callback để gọi lại vào
// }
// function onError(error){
//     console.log(error);
// }
// function readFile(path){ // truyền vào đường dẫn
//     return fs.readFile(path ,{encoding : 'utf8'});
// }
// readFile('song1.txt').then(onDone).then(function () {
//     // truyền vào trong function 1 promise
//             return readFile('song2.txt');
// }).then(onDone).catch(onError);

// sử dụng promise
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
// });
// load 1 đường dẫn dùng module request
// var request = require('request');
// var fs = require('fs');
// function load(path) {
//     return new Promise(function (resolve,reject) {
//         request(path,function (error,response,body) {
//             if(error){
//                 reject(error);
//             }else{
//                 resolve(body);
//             }
//         });
//     });
// }
// load('https://jsonplaceholder.typicode.com/todos/1')
// .then(function (body) {
//     console.log('Done',body);
// }).catch(function (error) {
//     console.log(error)
// });