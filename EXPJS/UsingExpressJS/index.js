var express = require('express'); // require module
// tạo ra 1 app mới sử dụng express js
var app = express();
// tạo post
// sử dụng get để gửi get request để lấy dữ liệu về và hiển trị trên trình duyệt
app.get('/',function (request,response) { // request là thứ người dùng gửi lên reqponse là thứ được trả về
    response.send('<h1>Hello,world</h1>');
});
var port = 3000;
app.listen(port,function () { // hàm listen để thông báo khi app hoạt động
    console.log('Sever listening on port 3000');
});
// chạy sever sử dụng localhost:3000