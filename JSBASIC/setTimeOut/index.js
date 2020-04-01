// //setTimeOut
// // setTimeout(fn,ms); // nhận vào 2 tham số là 1 hàm và 1 thời gian chờ 1 khoảng thời gian xong rồi mới chạy function ở trong
// var done = function(){
//     console.log('Finish');
// }
// console.log('Done'); // thứ tự sẽ là chạy done trước xong rồi sẽ đợi 1000ms và chạy hàm trong function
// // hàm setTimeOut sẻ trả về 1 ID
// var timeoutID = setTimeout(done,100); // truyền vào tên hamnf
// // muốn hủy timeout giữa chừng thì dùng clearTimeout sẽ xóa liên ngay timeout và không thực hiện việc làm trong function nữa
// clearTimeout(timeoutID);
//

// function doAfter(f,ms) {
//     return new Promise(function (resolve,reject) {
//         setTimeout(function () {
//             resolve(f())
//         },ms);
//     })
// }
// function sayHello() {
//     console.log('Hello');
// }
// function sayGoodbye() {
//     console.log('Goodbye');
// }
//
// doAfter(sayHello, 1000).then(sayGoodbye);
function Hello() {
    console.log("Hello")
}
function doAfter(f,ms) {
    setTimeout(f,ms);
}
doAfter(Hello,1000);
