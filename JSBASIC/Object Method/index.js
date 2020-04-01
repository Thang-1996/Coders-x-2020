// vd:
var myDog = {
    weight : 5,
    name : 'Dan',
    age : 1,
    bark : function () {
        console.log('haha my name is',this.name)
    }
};
// console.log(myDog.bark());
// this là tượng trung cho object mà object đó thuộc về
// method :
//Object.assign() được sử dụng để sao chép nhiều đối tượng nguồn vào 1 đối tượng mới
var a = {
    a : 1,b:2
};
var b = {
    b : 4,c:5
};
console.log(Object.assign(a,b));