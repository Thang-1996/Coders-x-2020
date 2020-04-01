// // LẬP TRÌNH ỨNG DỤNG VƠI NODE CO ĐỂ TỐI GIẢN CODE
// var fs = require('fs');
var co = require('co');
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
// // cách dùng co thứ 1
// // co là 1 function
// co(function *() { // * là generator function
//     // từ khóa sử dụng la yield .1 promise thì sẽ trả về giá trị khi đã resolve xong
//    // var song1 = yield readFilePromise('./song1.txt');
//    //  var song1 = yield readFilePromise('./song2.txt');
//    //  var song1 = yield readFilePromise('./song3.txt');
//     // cũng có thể sử dụng yeild như 1 array của nhiều promise
//     var values = [
//         readFilePromise('./song1.txt'),
//     readFilePromise('./song1.txt')
//     ];
//
//     // return cuối cùng sẽ trả về 1 promise gồm 3 giá trị có thể gán vào array dùng như promiseALL
//     // return [song1,song2,song3];
//     return values;
// }).then(function (values) {
//     console.log(values)
// }).catch(function (error) {
//     console.log(error);
// });
// // cách dùng co thứ 2 khai baos để dùng sau
// // dùng method wrap sex trả về 1 hàm như như co bình thường
// var readFiles = co.wrap(function *(files) {
//     var values = yield files.map(function (a) {
//        return readFilePromise(a);
//     });
//     // sẽ chuyển arrayfile thành array gồm nhiều promise
//     return values;
// });
// readFiles(['song1.txt','song2.txt']) // hàm để truyền vào cấc path or url
// .then(function (values) {
//     console.log(values)
// });
/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */

var axios = require('axios');
var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
];
// Cách 1: Sử dụng vòng lặp for
    function loadLink(url) {
        return new Promise(function (resolve,reject) {
            axios.get(url).then(function (res,err) {
                if(err){
                    reject(err);
                }else{
                    resolve(res.data);
                }
            });
        });
    }
    // co(function *() {
    //     var values = [];
    //     for(url of urls){
    //         var value = yield loadLink(url);
    //         values.push(value);
    //     }
    //     return values;
    // }).then(function (values) {
    //     console.log(values);
    // }).catch(function (error) {
    //     console.log(error);
    // });
// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise
var load = co.wrap(function *(links) {
    var values = yield links.map(function (link) {
        return loadLink(link);
    });
    return values;
});
load(urls).then(function (values) {
    console.log(values);
});