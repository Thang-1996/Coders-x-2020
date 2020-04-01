//prototype
var mouse = {
    weight : 0.2,
    getWeight: function () {
        return this.weight;
    }
};
function Mouse(color,weight) {
    this.type = 'mouse';
    this.color = color;
    this.weight = weight;
    // không nên viết method thẳng vào contructor mà phải sử dụng qua prototype vì viết ở trong contructor sẽ không được chia sẻ như prototype và khi so sánh 2 object với nhau thì sẽ khác nhau
    // và sẽ không cùng trỏ về 1 prototype được chia sẻ và giúp giảm thiểu bộ nhớ
}
// var mickey = new Mouse("red",2);
// console.log(mickey.weight);
// prototype có nghĩa là nguyên mẫu của 1 function đề tham chiếu đến 1 thuộc tính của 1 object
// vd:
console.log(Mouse.prototype);
// prototype được chia sẽ giữa các object được khởi tạo bằng new có thể truy cập vào prototype của nhau
// có thể thêm thuộc tính bằng prototype
Mouse.prototype.sleep = function () {
    // trong prototype cũng có thể tham chiếu được đến this
console.log(this.color+'Sleeping...')
};
var mickey = new Mouse('orange',20);
console.log(mickey); // khi log ra vẫn có 3 thuộc tính
// nhưng đồng thời vì là prototype được tạo ra method mới qua thuộc tính object mouse tạo bằng new nên sẽ truy cập được vào method sleep
mickey.sleep();
