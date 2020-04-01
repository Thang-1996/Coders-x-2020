// var employess = [
//     { name : 'thang', age : 23},
//     { name : 'tuan', age : 25},
//     { name : 'huyen', age : 22}
// ];
// for of // tạo ra 1 biến employee để đại diện cho 1 phần tử trong employee
// for(var employee of employess){ lặp qua các phần tử của 1 array
//     console.log(employee.name,employee.age);
// }
// for in dùng để lặp qua các key của 1 object key để đại diện cho tất cả key;
var student = {
    name : 'thang',
    age : 23,
    gender : 'male'
};
for(var key in student){
    console.log(key);
    console.log(student[key]); //  dùng để lấy riêng value
}
