// brand là để tạo 1 nhánh mới trong git
// merger thì để ghép các nhánh trong git lại với nhau
// git branch
// sẽ hiện ra nhánh hiện tại của git repo đang được trỏ đến thường sẽ xuất hiện ra nhánh chính nơi sẽ được lưu các phiên bản của code để sau đó có thể deployed lên server
// tạo nhánh mới sử dụng branch dùng để chia nhỏ các component của trang web mới để không ảnh hưởng đến nhánh chính của nhánh master sau đó có thể dùng để ghép lại vào nhánh chính master sử dụng merger
// cách cũ sử dụng tạo nhánh mới git checkout -b và sau đó là tên của nhánh mới đó
// và checkout cũng để sử dụng để chuyển sang nhánh mới đó làm việc và khi đó cả 2 nhánh là nhánh mới vừa mới tạo và nhánh master đều cùng trỏ đến file đang làm việc
// nếu muốn chuyển lại sang nhánh master làm việc sử dụng git checkout master để quay lại về nhánh master
// sau khi thực hiện xong toàn bộ công việc với nhánh mới thì sẽ sử dụng git merger để kéo những thay đổi của 1 brand mới vào branch master sử dụng cú pháp
// sử dụng làm 2 bước
// bước 1 sẽ git checck out để chuyển về branch A trước
// bước 2 sử dụng git merger để merge b vào A và sau đó 2 nhánh sẽ được merger lại với nhau
// và sau đó có thể sử dụng git branch -D tên branch để delete ra branch thừa sau khi đã merge lại với master
// mục đích sử dụng tạo nhánh mới và làm việc với nhánh đó sau khi làm xong tất cả công việc sẽ merger lại vói nhánh chính và sau cùng sử dụng delete để xóa đi nhánh mới đó

