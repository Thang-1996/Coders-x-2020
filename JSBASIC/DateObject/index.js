//Date object
// moment.js

// tao 1 object ngày tháng mới
// var now = new Date();
// // có thể chỉ định ngày nhất định
// var myBirthDay = new Date(1996,1,11); // chỉ số ngày tháng năm ngày giờ
// // console.log(myBirthDay);
// // mỗi object date sẽ lưu 1 giá trị là milisecond từ 1-1-1970
// // cách lấy giá trị ra là
// console.log(now.getTime()); // đây là giá trị milisecond
// console.log(myBirthDay.getTime());
// moment js // 1 package của nodejs
// cách sử dụng
// var moment = require('moment');
// var now = moment('2020-03-13 12:40'); // trả về object là thời điểm hiện tại
// console.log(now.fromNow()); // trả về khoảng thời gian từ thời điểm trong moment đến now
// console.log(now.format('YYYY/MM/DD')); // trả về định dạng format
// var fromDate = new Date('2019/10/17');
// var toDate = new Date('2019/10/21');
//
// function diff(fromDate, toDate) {
//     return toDate.getDate() - fromDate.getDate();
// }
// console.log(diff(fromDate,toDate));
//
var date = new Date("06/10/2019");

function subtractDays(date, n) {
    return (date.getTime() - n*24*60*60*1000);
}
console.log(subtractDays(date, 5));
