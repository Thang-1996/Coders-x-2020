//setInterval
//clearInterval

// cú pháp
// setInterval(fn,ms); // nhận vào 2 tham số ms sau mỗi khoảng ms sẽ thực hiện hàm này liên tuc

//vd :
// var i = 0;
// var intervalID = setInterval(function () {
//     i++;
//     console.log(i)
//     if(i===3){
//         clearInterval(intervalID);
//     }
// },1000);

// nếu muốn dừng giữa chừng phải đặt điều kiện và setClearInterval

    // function countFrom(a,b) {
    //     return new Promise(function (resolve,reject) {
    //         var intervalID = setInterval(function () {
    //              console.log(a);
    //                 a++;
    //             if(a>b){
    //                 clearInterval(intervalID);
    //                 resolve();
    //             }
    //         },1000);
    //     })
    // }
    // countFrom(1,10).then(function () {
    // console.log('Done');
    // });
// function countDown(x) {
//     return new Promise(function (resolve,reject) {
//         var intervalID = setInterval(function () {
//             console.log(x);
//             x--;
//             if(x===0){
//                 resolve(clearInterval(intervalID));
//             }
//         },1000);
//     })
// }
// countDown(10).then(function () {
//     console.log('Happy new year');
// });
