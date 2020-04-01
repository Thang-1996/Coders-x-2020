// object thường dùng để mô tả vật thông qua các thuộc tính
// object gồm các cặp key : value cách nhau bởi dấu ,
// các key là các string cũng có thể là kiểu symbol
// value nhận các giá trị như number cho tới string hoặc object function
// empty object là object trống không có thuộc tính náo
// nested object là object nằm trong 1 object khác
// khi muốn sử dụng giá trị của biến làm key của 1 thuộc tính thì phải để key đó or tên biến trong []
// còn khi sử dụng giá trị của biến thì có thể khai báo tên biến đó vào value như bình thường
// lấy giá trị của 1 property ta sử dụng dấu . cú pháp object.key hoặc sử dụng object['key']
// khi 1 key không tồn tại giá trị của nó sẽ là undefined tuy nhiên vẫn có thể gán giá trị cho 1 property là undefined
// có thể gán lại giá trị khác cho property bằng cách gọi dến property đó và dùng dấu =
// để xóa 1 property ta dùng toán tử delete object.key việc thay đổi hay xóa sẽ gọi là hành động mutate
// dùng toán tử in để kiểm tra xem 1 property có tồn tại hay không
// // vd
// var you = {
//     name : 'thang'
// };
// console.log('name' in you); trả về giá trị là true
var a = {
    name : 'thang'
};
