// module node // chia nhỏ các module ra để dễ quản lý
// cách dùng lại để lấy module mouse
// var Mouse = require('./mouse'); // sử dụng để gọi lại module mouse vào ./ là dùng để xác định file trong cùng 1 thư mục
// var Cat = require('./Cat');
// var mouse1 = new Mouse("red");
// var mouse2 = new Mouse("orange");
// var cat1 = new Cat();
// cat1.eat(mouse1);
// console.log(mouse1);
// console.log(cat1);
//
//
// * 1. Thêm method `sum` cho module `math`, nhận vào 1 array các số, trả về tổng các số
// * 2. Require module math và sử dụng method sum để tính tổng 1 array các số bất kì
// * 3. Log kết quả
//
// *  1. Tạo module `circle.js` export 1 constructor function tên là Circle
// *  2. Circle có 3 property là x, y, radius (toạ độ x, y và bán kính)
// *  3. Circle có 1 method là isOverlapped (overlap là chồng lấn, đè lên nhau), trả về -1 nếu 2 hình tròn này đè lên nhau, trả về 1 nếu 2 hình tròn không đụng nhau, trả về 0 nếu 2 hình tròn tiếp xúc nhau.
// *  4. Test thử
//
// function Circle(x,y,radius) {
// this.x =x;
// this.y =y;
// this.radius =radius;
// }
// Circle.prototype.isOverlapped = function (c) {
//     var d = Math.sqrt(Math.pow(this.x - c.x, 2) + Math.pow(this.y - c.y, 2));
//     if (d == this.r + c.r) {
//         return 0;
//     }
//     if (d < this.r + c.r) {
//         return -1;
//     }
//     return 1;
// };