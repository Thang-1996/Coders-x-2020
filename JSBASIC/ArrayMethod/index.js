// Array Method
// 1: Array.length : trả về độ dài của mảng
// 2: Array.isArray : xác định xem giá trị truyền vào có phải là 1 array hay không
// 3: Array.from : tạo ra 1 thực thể array mới được sao chép cạn từ các đối tượng giống mnagr hoặc các đối tượng khả duyệt
// vd:
// var arr = [1,2,3,4];
// console.log(Array.from((arr),x => x*2)); // viết tắt của map function sử dụng dấu =>
// 4: Array.of(element1,2,3); // tạo ra 1 mảng dựa vào các element truyền vào
// 5: concat() // dùng để kết nối 2 mảng với nhau không làm thay đổi các mảng đã có và trả về giá trị là 1 mảng mới
// vd:
// var arr1 = [1, 2, 3, 4];
// var arr2 = [5, 6, 7, 8];
// console.log(arr2.concat(arr1)); // arr2 sẽ nằm trước >> mảng 1 sẽ được nối vào mảng 2 tạo ra mảng mới
// 6: fill() sửa đổi 1 mảng dựa vào giá trị truyền vào từ vị trí nhất định đến vị trí kết thúc
// // vd:
// var arr1 = [1,2,3,4];
// console.log(arr1.fill(5,0,2));// vị trí 0 và 1 sễ được thay đổi thành 5
// 7: filter() trả về 1 mảng mới với các phần tử thỏa mãn điều kiện của 1 hàm test
// vd:
// var arr1 = [2,3,4,6,8];
// var result = arr1.filter(function (s) { // s tượng trưng cho toàn bộ phần tử trong mảng
//     return s%2===0; // truyền vào 1 điều kiện
// });
// console.log(result);
// 8 : find() trả về giá trị đầu tiên được tìm thấy trong mảng và sau đó dừng tìm kiếm có thể trả về undefined nếu không tìm thấy
// vd:
// var arr1  = [2,3,4,6,7];
// var result = arr1.find(function (s) {
//         return s%2===0; // trả về giá trị đầu tiên thỏa mãn điều kiện được tìm thấy là 2
// });
// console.log(result);
// 9 : findIndex() trả về chỉ số index của phần tử đầu tiên trong mảng thỏa mãn hàm truyền vào nếu không thì sẽ trả về -1
// vd:
// var arr = [1,3,5,4,5,6];
// var result = arr.findIndex(function (s) {
//         // return s%2 === 0 ; // trả về vị trí phần tử số 4 thỏa mãn điều kiện có index = 3;
//     return s > 7; // sẽ trả về -1 vì không có phần tử nào thỏa mãn điều kiện
// });
// console.log(result);
// 10 : includes() kiểm tra xem phần tử nhất định có tồn tại trong mảng hay không trả về giá trị true or false
// vd:
// var arr = [1,2,4,5];
// var result = arr.includes(3); // trả về false
// var result2 = arr.includes(2); // trả về true
// var result3 = arr.includes(2,2); //  bắt đầu tìm kiếm từ index = 2 sẽ trả về false tại vì sau đó index =2 là giá trị 4 vs 5
// // console.log(result);
// // console.log(result2);
// console.log(result3);
// 11: indexOf() trả về giá trị đầu tiên của mảng nơi mà nó được tìm thấy trong mảng nếu không tồn tại trả về -1
// vd:
// var arr = [1,2,3,4,5];
// var result = arr.indexOf(3); // cũng sẽ nhận vào tham số thứ 2 là vị trí bắt đầu tìm kiếm
// console.log(result);
//12 : join() tạo ra 1 string mới từ 1 array bằng cách nối các phần tử lại với nhau
// vd:
// var arr = ['a','b','c'];
// var result = arr.join(''); // có thể truyền vào các dấu '' hoặc - là các chuỗi ngăn cách sử dụng chuỗi '' để các phần tử dính liền với nhau còn mặc định sẽ là dấu ,
// console.log(result);
// 13: map() trả về 1 mảng mới dựa trên 1 phép tính toán hay điều kiện nhất định
//vd:
// var arr = [1,2,3,4];
// var result = arr.map(function (a) {
//     // return a%2 === 0; // thực hiện tính toán chia hết cho 2 trả về true or false
//     return a * 2; // nhân mảng cho 2 trả về mảng mới
// });
// console.log(result);
// 14: pop() xóa phần tử cuối của của mảng và trả về phần tử đó
// vd:
// var arr = [1,2,3,4];
// var result = arr.pop(); // trả về result = 4 và xóa 4 ở arr
// console.log(result);
// console.log(arr);
// 15: push() giúp thêm 1 hay nhiều các phần tử vào cuối mảng trả về 1 chiều dài mới của mảng
// var arr = [1,2,3,4];
// console.log(arr.push(2,3,4,4)); // thêm lần lượt các phần tử vào arr và sẽ trả về độ dài = 8
// console.log(arr);
// // 16: reverse() // đảo ngược toàn bộ phần tử trong mảng cuối lên đầu tiên
// // vd:
// var arr = [1,2,3,4];
// console.log(arr.reverse());
// 17 : shift() xóa phần tử đầu tiên trong mảng và trả về phần tử đó
// // vd:
// var arr = [1,2,3,4];
// console.log(arr.shift()); // trả về 1 và thay đổi arr
// console.log(arr);
//18 : slice() trả về 1 mảng mới gồm các phần tử lọc từ điểm bắt đầu đến điểm kết thúc begin là chỉ số đầu tiên nếu chỉ số này âm thì sẽ được tính từ cuối mảng trở đi vd -2 sẽ lấy từ 2 phần tử cuối mảng end nếu giá trị end không được truyền vào sẽ lọc đến cuối mảng
// vd:
// var arr = [1,2,3,4,5,6];
// console.log(arr.slice(3,5)); // trả về 4-5 là giá trị index 3 và 4
//19 : sort() sắp xếp dựa trên 1 function so sánh
// vd:
// var arr = [4,1,3,2];
// var result = arr.sort(function (a,b) { // a và b tượng trưng cho 2 số bất kỳ trong mảng để sắp xếp
//     // if(a===b){ // trả về mảng dữ nguyên và return 0
//     //     return -0;
//     // }
//     // if(a>b){ // trả về mảng từ lớn đến bé và return -1;
//     //     return -1;
//     // }
//     // if(a<b){ // trả về mảng từ bé đến lớn và return 1;
//     //     return 1;
//     // }
//
// });
// console.log(result);
// 20: splice() thay đổi phần tử của mảng bằng cách xóa phần tử đang tồn tại hoặc thêm phần tử mới
// vd:
// var arr = ['a','b','c','d'];
// // var result = arr.slice(2,3);
// // console.log(result); // trả về mảng mới có giá trị là c và xóa hết phần tử 0-1 và 3 4
// // var result = arr.splice(2,1); // sẽ xóa 1 phần tử từ vị trí số 2
// var result = arr.splice(1,0,'ab'); //thêm vào abc sau khi xóa
// console.log(result);
// 21: unshift() thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài
// vd:
// var arr = [1,2,3,4];
// console.log(arr.unshift(3,4,5)); // >> đầu ra là 3,4,5,1,2,4,5 // length = 7
// console.log(arr); // đồng thời cũng thay đổi mảng cũ
// 22: reduce() trả về 1 mảng mới bằng cách so sánh lần lượt 2 phần tử với nhau và trả về giá trị cuối
// vd:
// var number = [1,2,3,4];
// var result = number.reduce(function (a,b) { // a và b sẽ là 2 phần tử đầu tiên và cứ thế tiếp tục theo điều kiện tính toán ở trong function
//     return a*b; // tính tích của mảng
// },0); // 0 ở đây sẽ là giá trị ban đầu để tính toán thêm tham số đầu tiên và nó sẽ thay cho vị trí a tham số truyền vào sẽ là dựa vào giá trị cuối cùng muốn tính là kiểu dữ liệu nào
// console.log(result);
//
// Bài tập arr.map()
//1 :
// const users = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ];
// function readyToPutInTheDOM(arr) {
//     return arr.map(function (a) {
//         return '<h1>'+a.name+'</h1>'+'<h2>'+a.age+'</h2>';
//     })
// }
// console.log(readyToPutInTheDOM(users));
// function namesOnly(arr) {
//     return arr.map(function (a) {
//         return a.name;
//     })
// }
// console.log(namesOnly(users));
// function tripple(num) {
//     return num*3;
// }
//
// function multiply(numbers) {
//     return numbers.map(function (a) {
//         return tripple(a);
//     })
// }
// console.log(multiply([10, 5, 8]));
 // Bài Tập Filter
// function fiveAndGreaterOnly(arr) {
//     return arr.filter(function (a) {
//         return a >=5;
//     });
// }
// console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// var members = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' }
// ];
// function filterOutFemales(members) {
//     return members.filter(function (a) {
//         return a.gender !== 'female';
//     })
// }
// console.log(filterOutFemales(members));
// function evensOnly(arr) {
//    return arr.filter(function (a) {
//         return a%2===0;
//    })
// }
// console.log(evensOnly([3, 6, 8, 2]));

// Bài Tập find();
// function findDivisibleNum(array, x) {
//     return array.find(function (a) {
//         return a%x === 0;
//     })
// }
// console.log(findDivisibleNum([1, 3, 4], 2));
// function findFirstEvenNumber(array) {
//     return array.find(function (a) {
//         return a%2 === 0;
//     })
// }
// Bài Tập reduce();

// function countOccurrences(arr) {
//     return arr.reduce((crtobj,arrobj) => {
//         console.log(crtobj,arrobj); // log
//         if (crtobj[arrobj])
//             crtobj[arrobj]++;
//         else crtobj[arrobj] = 1;
//         return crtobj;
//     },{});
// }
// console.log(countOccurrences(['a', 'b', 'c', 'b', 'a']));
//
// function flatten(arr) {
//     return arr.reduce(function (a,b) {
//         return a.concat(b);
//     },[])
// }
// console.log(flatten([["1", "2", "3"], [true], [4, 5, 6] ]));
// function totalVotes(arr) {
//     return arr.reduce(function (a,b) {
//         return a+b.voted;
//     },0);
// }
// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];
// //
// // function shoppingSpree(wishlist) {
// //     return wishlist.reduce(function (a,b) {
// //         return a + b.price;
// //     },0)
// // }
// // console.log(shoppingSpree(wishlist));
// function arrayTitle(wishlist) {
//    return wishlist.reduce(function (a,b) {
//         return a.concat(b.title);
//    },[])
// }
// console.log(arrayTitle(wishlist));
// bài tâp filter lọc phần tử
// function removeDuplicate(array) {
//     var newArr = [];
//     return array.filter(function (x) {
//         if(newArr.indexOf(x) === -1){
//             newArr.push(x);
//             return true;
//         }
//         else {
//             return false;
//         }
//     });
// }
// console.log(removeDuplicate([1, 1, 2, 3, 3]));
// bài tập lọc sản phẩm theo id
// var listProducts = [
//     {id: 1, categoryId: 1, name: 'Tivi'},
//     {id: 2, categoryId: 1, name: 'Tủ lạnh'},
//     {id: 3, categoryId: 3, name: 'Ghế sofa'},
//     {id: 4, categoryId: 1, name: 'Máy giặt'},
//     {id: 5, categoryId: 2, name: 'Chén bát'},
//     {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
//     {id: 7, categoryId: 3, name: 'Cửa kính'},
//     {id: 8, categoryId: 1, name: 'Điều hoà'},
//     {id: 9, categoryId: 3, name: 'Bàn tròn'},
//     {id: 10, categoryId: 2, name: 'Lò vi sóng'},
// ]
//
// function filterProductsByCategoryId(products, categoryId) {
//     return products.filter(function (x) {
//         return x.categoryId === categoryId;
//     }).map(function (a) {
//         return a;
//     })
// }
// console.log(filterProductsByCategoryId(listProducts,1));
// function sortNumber(arr) {
//     return arr.sort(function (a,b) {
//         if(a<b){
//             return -1;
//         }
//     })
// }
// console.log(sortNumber([5, 1, 3, 2]));
// var students = [
//     { name: 'A', score: 100 },
//     { name: 'B', score: 10 },
//     { name: 'C', score: 101 },
//     { name: 'D', score: 50 },
//     { name: 'E', score: 75 }
// ];
// function getTopStudents(students) {
//     return students.sort(function (a,b) {
//         return b.score - a.score;
//     }).map(function (a) {
//         return a.name;
//     }).slice(0,3);
// }
// console.log(getTopStudents(students));
// var arr = [
//     {
//         name: "Quiet Samurai",
//         age: 22
//     },
//     {
//         name: "Arrogant Ambassador",
//         age: 100
//     },
//     {
//         name: "Misunderstood Observer",
//         age: 2
//     },
//     {
//         name: "Unlucky Swami",
//         age: 77
//     }
// ]
//
// function byAge(arr){
//     return arr.sort(function (a,b) {
//         return a.age - b.age;
//     });
// }
// console.log(byAge(arr));
// function sortNumber(arr) {
//     return arr.sort(function (a,b) {
//         return b-a;
//     })
// }
// function lengthSort(arr) {
//    return arr.sort(function (a,b) {
//         return a.length - b.length;
//    })
// }
// function alphabetical(arr) {
//     return arr.sort(function (a,b) {
//         return a.charCodeAt() - b.charCodeAt();
//     })
// }
// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));
//
// var a = [1,2].reduce(function (a,b) {
// return a*b;
// },0);
// console.log(a); 0
// var b = [1,2].map(function (x) {
//     return x*x;
// });
// console.log(b);  1,4
// var c = [1,2].filter(function (x) {
// return x%2 === 0;
// });
// console.log(c); [2]
// var d = [1,2,3].find(function (x) {
//     return x%2 === 1;
//
// });
// console.log(d);  //1

// su dung new de tao instance tu contructor function

// var foo = {
//     bar : true,
//     say : function () {
// console.log(this.bar);
//     }
// };
// var say = foo.say;
// say(); // undefinde
function f() {
console.log('haha');
}
var x = setTimeout(f,10);
clearTimeout(x);
console.log(x);