/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

var readlineSync = require('readline-sync');
var fs = require('fs');
var contacts = [];
function showMenu(){
    console.log('1: Show Contact : ');
    console.log('2 : Enter Contact : ');
    console.log('3 : UpdateContact : ');
    console.log('4 : DeleteContact : ');
    console.log('5: Find Contact ');
    var option = readlineSync.question("Choose Option : ");
    switch(option){
        case '1' :
            showContact();
            showMenu();
            break;
        case '2' :
            createContact();
            showMenu();
            break;
        case '3' :
            updateContact();
            showMenu();
            break;
        case '4' :
            deleteContact();
            showMenu();
            break;
        case '5' :
            findContact();
            showMenu();
            break;
        default :
            console.log('Wrong option :')
            break;
    }
}
function loadContact(){
    var fileContent = fs.readFileSync('./data.json');
    contacts = JSON.parse(fileContent);
}
function showContact(){
    for(contact of contacts){
        console.log(contact.name,contact.phonenumber);
    }
}
function createContact(){
    var name = readlineSync.question('Name : ?');
    var phonenumber = readlineSync.question('Phone Number: ?');
    var contact = {
        name : name,
        phonenumber : phonenumber
    }
    contacts.push(contact);
    var content = JSON.stringify(contacts);
    fs.writeFileSync('./data.json',content,{encoding : 'utf8'});
}
function main(){
    loadContact();
    showMenu();
}
function updateContact(){
    var indexEdit = readlineSync.question('Enter id to edit : ');
    var index = parseInt(indexEdit);
    var newName = readlineSync.question('Enter new Name: ');
    var newPhone = readlineSync.question('Enter new Phone: ');
    contacts[index].name = newName;
    contacts[index].phonenumber = newPhone;
    var content = JSON.stringify(contacts);
    fs.writeFileSync('./data.json',content,{encoding : 'utf8'});
    console.log(contacts[index]);
}
function deleteContact(){
    var indexDelete = readlineSync.question('Enter id to delete : ');
    var index = parseInt(indexDelete);
    contacts.splice(index,1); // xoa di 1 phan tu o vi tri index
    var content = JSON.stringify(contacts);
    fs.writeFileSync('./data.json',content,{encoding : 'utf8'});
    console.log(contacts);
}
function findContact(){
    var nameFind = readlineSync.question('Enter name to find : ');
    for(var contact of contacts){
        if(contact.name === nameFind){
            console.log('Contact is avalible');
            console.log(contact.name,contact.phonenumber);
        }
    }
}
main();