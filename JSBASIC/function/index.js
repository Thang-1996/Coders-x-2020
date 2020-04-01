// function có thể không có tên
// pure function
// là hàm mà với bất kỳ đầu vào giống nhau thì đầu ra cũng giống nhau còn gọi là determennictic function
// built in function là các hàm có thể dùng luôn vd như hàm parseInt để chuyển kiểu dữ liệu sang number số nguyên
//
// function show(a) {
//     console.log(arguments[1]);
// }
// show(1,2); //  lay argument vi tri so 1

// (function (a,b) {
//     console.log(b+arguments[2]-a); 3+3-2
// })(1,2,3);

// function createAdder(num) {
// return function (x) {
// return x+num;
// }
// }
// var plus3 = createAdder(3);
// console.log(plus3(10,2));

// function stayHome() {
// var temperature = 35;
// if(temperature > 35){
//     stayHome();
// }
// }
// console.log(stayHome());
// while(true){
//     console.log(1000);
// }

var arr = ['a','b','c'];
for(var i=0;i<arr.length;++i){
    setTimeout(function () {
        console.log(arr[i]);
    },100);
}