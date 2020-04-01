// 1: Math.abs(); trả về giá trị tuyệt đối của 1 số
// vd:
// var a = -3; // kể cả a = 3 hoặc -3 thì giá trị tuyệt đối của nó là =3
// console.log(Math.abs(a));
//2 :Math.ceil trả về số nguyên nhỏ nhất có giá trị lớn hơn hoặc bằng số đã cho
// vd:
// var a = 7.1;
// console.log(Math.ceil(a)); // a =8
// 3 : Math.max() Math.min() trả về giá trị lớn nhất và bé nhất của 1 tâp hợp số
//4 : trả về phép tính lũy thừa của 1 số x
// //vd :
// var a = 3;
// console.log(Math.pow(3,2)); // == 9
// 5: Math.random() trả về 1 số random nằm giữa khoảng 0 và 1
// 6: Math.round() trả về số nguyên được làm tròn với sô nguyên gần nhất
// vd:
// var a = 3.5;
// var b = 3.4;
// console.log(Math.round(a),Math.round(b)); //  a sẽ là 4 b sẽ là 3 gần số nguyên nào hơn sẽ làm tròn về số đó
// 7: Math.sign() trả về giá trị -1 hoặc 1 nếu số đó là dương trả về 1 nếu là âm trả về -1 nếu là số 0 dương trả về 0 nếu là số 0 âm trả về -0
// 8 : Math.sqrl trả về căn bậc 2 của 1 số
// function powerup(arr) {
//     return arr.map(function (a) {
//         if(a%2===0){
//             return Math.pow(a,2);
//         }else{
//             return a;
//         }
//     })
// }
// console.log(powerup([0, 3, 6, 7, 4]));
// function positiveNumber(arr) {
//     return arr.map(function (a) {
//         return Math.abs(a);
//     })
// }
// function average(arr) {
//     var sum = 0 ;
//     for(var ar of arr){
//         sum += ar;
//     }
//     return Math.round(sum/arr.length);
// }
// console.log(average([8, 8 , 6.75]));
function trigonim(number) {
    var arr = [];
    arr.push(Math.sin(number).toFixed(3),Math.cos(number).toFixed(3),Math.tan(number).toFixed(3));
    return arr;
}
console.log(trigonim(0));







