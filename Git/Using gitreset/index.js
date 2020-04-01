// sử dụng nâng cao git reset để undo commit không vừa ý vừa mới commit lên staging
// gồm 3 method
// git reset --soft <to_commit>
// git reset --mixed <to_commit>
// git reset --hard <to_commit>

// nếu cảm thấy commit vừa mới tạo và muốn undo lại để viết lại commit thì sẽ sử dụng git reset soft
// cú pháp git reset --soft và truyền vào mã commit không vừa ý để mở đóng gói commit ra và sẽ quay lại commit cũ và commit cũ sẽ trở lại thành commit mới nhất
// và sau đó có thể sử dụng commit lại commit mới
// cũng có thể dùng mixed và truyền vào commit id tương tự như soft nhưng file sẽ trở thành modifide và sẽ không được chuyển lên staging area mà chuyển về working directory
// git reset --hard thì sẽ làm việc là sẽ bỏ đi commit trước đó và quay lại vào commit đang chỉ định truyền vào và bỏ đi tất cả cấc commit trên đường đi sẽ xóa đi tất cả kể cả status của file
