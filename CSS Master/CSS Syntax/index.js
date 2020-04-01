// cú pháp viết css
// selector { attribule : value thuoc tinh atribute các thuộc tính cách nhau bởi dấu ;}
// // vd:
// h1{
//     color:blue;
//     font-size: 12px;
// }
// selector thường là điểm được chọn để style css
// CSS selector
// select by group thì các element sẽ cách nhau bởi dấu phẩy
// các cách chèn css vào 1 file
// cách 1 : Internal CSS là dùng 1 thẻ style và bỏ trực tiếp vào thẻ head để cho thẻ css được load trước
// cách 2: Inline css viết trực tiếp vào tag html bằng cách dùng thẻ style làm thuộc tính
// cách 3 : include external css tạo file css và chèn vào thẻ head bằng cú pháp : <link rel="stylesheet" type="text/css" href="filecss"/>
// CSS combinator
// cách kết hợp các css  tag html với nhau
// sử dụng dấu cách để select các tag con của tag chính vd tag class item là con của tag class list thì cú pháp sẽ là
// .list .item{ cái này gọi là descendant selector và cả 2 select này sẽ cùng thay đổi
// child selector (sử dụng >) thì những thằng con khi dùng dấu > thì mới bị thay đổi css
// adjacent sibling selector sử dụng dấu + rồi viết tiếp class cha để tìm ra anh em của class con hiện tại và sẽ chỉ select selector tiếp theo
// general sibling selector sử dụng dấu ~ sẽ select tất cả anh em của class con tiếp theo
// }

