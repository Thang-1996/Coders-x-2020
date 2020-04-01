// kiểu Number gồm giá trị số nguyên và số thực ngoài ra còn có các kiểu
// Infinity : đại diện cho số vô cực lớn hơn mọi số khác
// NAN : xảy ra khi thực hiện các phép toán trên giá trị không phải là số vd như chia String cho 1 số
// kiểu String đại diện cho 1 chuỗi ký tự bao quanh dấu nháy đơn single quote hoặc nháy kép hoặc backsick `` chúng ta sẽ thường dùng '
// backstick thường dùng khi muốn chèn 1 string trong 1 string khác
// nếu trong chuỗi có dấu ' thì phải chuyển ' trong câu sang \' để tránh javascript hiểu nhầm tương tự với dấu "
// kiểu Boolean gồm 2 giá trị true or false\
// kiểu BigInt sinh ra để lưu các giá trị lớn hơn phạm trù cho phép của kiểu Number lớn hơn 2 mũ 53
// giá trị null là đại diện cho giá trị rỗng và nó là 1 kiểu object được bug của javascript tạo ra
// giá trị undefined là giá trị khi được khai báo nhưng chưa được gán
// kiểu symbol được dùng để tạo ra các giá trị unique dùng để làm ID cho các object khác
// kiểu object khác với các kiểu dữ liệu nói trên là primitive vì giá trị chúng chỉ chứa 1 biến duy nhất
// object có thể chứa nhiều kiểu dữ liệu bên trong và thậm chi object có thể chứa 1 object khác bên trong nó
// toán tử type of: dùng để trả về kiểu dữ liệu hoặc check kiểu dữ liệu của biến
var a = [];
console.log(typeof a); // array co kieu du lieu la 1 object
