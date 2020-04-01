// Student Manager With Nodejs
// cách hoạt động
// 1 . show all student
// 2. create a new student
//3 . save and exit
// khi nhập 1 sẽ hiển thị ra sinh viên
// 2 thì sẽ hiển thị ra câu hỏi dùng read-line-sync để hỏi name và age
// ấn 3 sẽ thoát
// hàm để hiện thị ra menu đơn giản
var readlineSync = require('readline-sync'); // require để tạo ra câu hỏi và lấy giá trị
var fs = require('fs'); // require để đọc ghi file
var student = []; // arrray trống để lưu dữ liệu đọc ra vào
function loadData() {// để load ra data và lưu vào biến student
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent); // chuyển sang object
}

function showMenu() {
    console.log("1 . Show Student :")
    console.log("2 . Create a new Student :")
    console.log("3 . Save and Exit :")
    var option = readlineSync.question('Chose please ? '); // tạo ra câu hỏi để người dùng nhập lựa chon
    switch (option) {
        case '1' :
            showStudent();
            showMenu();
            break;
        case '2' :
            showCreateStudent();
            showMenu();
            break;
        case '3' :
            saveAndExit();
            break;
        default:
            console.log('Wrong option');
            showMenu();
            break;
    }
}
function showStudent() {
    for(var student of students){
        console.log(student.name,student.age);
    }
}
function showCreateStudent() {
    var name = readlineSync.question('Name : ? ');
    var age = readlineSync.question('Age : ? ');
    // tạo ra 1 object mới để lưu value lấy về
    var student = {
        name : name,
        age : parseInt(age) // vì là nhận vào value từ câu hỏi là kiểu chuỗi nên phải parseInt
    }
    students.push(student); // push vào chuỗi student ở trên
}
function saveAndExit() {
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json',content,{encoding : 'utf8'});
}
function Main() { // hàm main sẽ dùng để chạy chương trình chính
    loadData();
    showMenu();
}
Main();
