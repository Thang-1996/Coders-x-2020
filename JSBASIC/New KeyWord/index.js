// // từ khóa new trong js
// //vd :
// // var today = new Date();
// // console.log(today);
// var mouse = {
//     weight : 0.2,
//     getWeight : function () {
//         return this.weight;
//     }
// };
// // constructor function hàm dùng để xây dựng đối tượng
// function Mouse(name,color) { // có thể nhận vào nhiều tham số là các thuộc tính của đối tượng muốn truyền
//     this.type = 'mouse'; // this dùng trong method của object
//     // sẽ thêm thuộc tính của đối tượng ở đây
//     this.color = color;
//     this.name = name;
// }
// // tạo object từ hàm tạo
// var mouse1 = new Mouse('red'); // có thể tạo ra nhiều đối tượng // truyền vào value của các tham số thuộc tính truyền vào ở hàm tạo trong dấu ()
// // sẽ tạo ra 1 đối tượng có thuộc tính type = mouse
// var mouse2 = {type : 'mouse'};
// // console.log(mouse1); // khi tạo bằng contructor sẽ có cả tên ở trước
// // console.log(mouse2);
// // tạo ra 1 object khác để tương tác với object ở trên
// var tom = {
//     name :'tom',
//     stomach : [],
//     eat : function (mouse) {
//         this.stomach.push(mouse);
//         return this;
//     }
// };
// var m1 = new Mouse("m1","red");
// var m2 = new Mouse("m2","blue");
// tom.eat(m1);
// console.log(tom);
// bài tập lấy độ dài của 1 object
// function countProperty(obj) {
//     var count = 0;
//    for(key in obj){
//        count++;
//    }
//    return count;
// }
// console.log(countProperty({ name: "Herry", age: 10 }));
//
// function removeProp(prop) {
//     var student = {
//         name: "David Rayy",
//         class: "VI",
//         rollno: 12
//     };
//     // chỉ viết code ở dưới dòng này
//     for(key in student){
//         if(prop === key){
//             delete student.key;
//         }
//     }
//     return student;
// }
// console.log(removeProp("name"));
var student = {
        name: "David Rayy",
        class: "VI",
        rollno: 12
    };
for(key in student){
    delete student[key]; // trong vòng lặp for muốn xóa sử dụng dấu []
}
console.log(student);