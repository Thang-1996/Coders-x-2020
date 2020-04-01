// tạo file .gitignore để ignore 1 cái module cụ thể hoặc file cụ thể để ignore module hoặc file đó vào project của mình
// chỉ được ignore khi chưa commit lần nào

// git config credentials sẽ không cần phải ghi lại username và passworld mỗi lần đăng nhập
// cú pháp
//git config --global credential.helper store ghi lại thông tin username và passworld và file cụ thể
// bảo mật hơn
// git config --global credential.helper "cache --timeout=18000" /
// sẽ lưu thông tin đăng nhập vào ram và sẽ phải gõ lại username và pass sau 5 tiếng