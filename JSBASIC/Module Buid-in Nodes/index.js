// các module đã có sẵn trong máy khi cài nodejs
var fs = require('fs'); // require module có sẵn fs và không cần ./ vì nó là module của nodejs
var text = fs.readFileSync('./song.txt',{encoding : 'utf8'}); // encoding là để convert ra chữ
console.log(text); // readFileSync dùng để đọc file
// ghi file
fs.writeFileSync('./song2.txt','Hello World'); // sẽ tạo 1 file mới trong thư mục có nội dung là helloworld