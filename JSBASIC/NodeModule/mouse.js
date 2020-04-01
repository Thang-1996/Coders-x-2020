// code để tạo contructor và các method của mouse
function Mouse(color) {
    this.color = color;
    this.dead = false;
}
Mouse.prototype.die = function () {
    this.dead = true;
};
// tạo module mouse
module.exports = Mouse;
