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
// // sử dụng async await
// // tạo ra 1 hàm mới để gọi các async method
// // gọi hàm async bằng cách viết async ở trước hàm
// // async function run() {
// //     // dùng await và truyền vào 1 promise
// //     var song1 = await readFilePromise('./song1.txt');
// //     var song2 = await readFilePromise('./song1.txt');
// //     return [song1,song2];
// // }
// // run().then(function (values) {
// // console.log(values);
// // });
//
// function readFilePromise(path) {
//     return new Promise(function (resolve,reject) {
//         fs.readFile(path,{encoding: 'utf8'},function (err,data) {
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         });
//     });
// }
// function getLink(link) {
//     return new Promise(function (resolve,reject) {
//         axios.get(link).then(function (res,err) {
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(res.data);
//             }
//         })
//     })
// }
// async function run() {
//     var readFile = await readFilePromise('./data.json');
//     var loadlink = await getLink('https://jsonplaceholder.typicode.com/todos/1');
//     return [readFile,loadlink];
// }
// run().then(function (values) {
//     console.log(values);
// });
