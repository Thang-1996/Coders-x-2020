// git revert <tên commit>
// dùng để trả lại trạng thái lúc trước hoàn lại 1 thay đổi của 1 dòng code nhất định và xóa đi dòng code đó
// dùng trong trường hợp 1 commit cụ thể cũ cảm thấy sai và muốn bỏ commit ấy đi và sẽ xóa đi các dòng code khi mình commit từ trước
// tránh dùng vì nguy hiểm hơn reset
// git revert sẽ tạo ra 1 commit mới ở trên và đảo lại toàn bộ trạng thái của commit cũ
// và xóa đi tất cả các dòng code đã thay đổi ở commit trước đó và sau đó có thể viết lại các dòng code và commit lại từ đầu 