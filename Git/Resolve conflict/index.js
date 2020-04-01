// xử lý xung đột giữa các conflict
// khi có cùng file cùng line khi cùng thay đổi cùng 1 file 1 line
// trường hợp khi a xóa file x mà b sửa lại nội dung của x thì sẽ xuất hiện conflict

// cách giải quyết
// dùng git rebase
// giải quyết conflict bằng merger
// b1 : quay lại branch brand master
// b2 : update lại master
// merger master vào brand đc tạo ra
// xóa các dòng gạch đó conflict
// tiếp theo git add . và commit lại như bt và push lại lên github như bt