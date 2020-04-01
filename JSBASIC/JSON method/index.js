// các method của object JSON trong javascript
// 1: stringify //  chuyển đổi 1 object sang kiểu json string
// 2 : parse // chuyển đổi 1 json string sang 1 object
var myDog = {
    name : 'dog1',
    age : 2,
    dead : false
};
// console.log(myDog);
// tiến hành convert ra json string
// var mydogString = JSON.stringify(myDog);
// console.log(mydogString); // sẽ chuyển ra kiểu là 1 string sẽ có dấu "" ở mỗi key
// console.log(typeof mydogString)
var catString = '{"name": "haha" , "age" : 2}';
console.log(catString);
// convert sang object
var cat = JSON.parse(catString);
console.log(cat);