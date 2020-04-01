// Sync và Async
var fs = require('fs');
// console.log('Start');
// var song1 = fs.readFileSync('song1.txt',{encoding : 'utf8'});
// console.log(song1);
// var song2 = fs.readFileSync('song2.txt',{encoding : 'utf8'});
// console.log(song2);
// console.log('end');

// sử dụng readFile là hàm đồng bộ
// console.log('Start');
// fs.readFile('song1.txt',{encoding: 'utf8'},function (err,data) { //  hàm readfile sẽ nhận vào 2 tham số err data
//     // data chính là nội dung còn err là các lỗi khi không load được file
//     console.log(data);
// });
// console.log('End');