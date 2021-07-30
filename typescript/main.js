var message = 'Hello World!';
message.toLowerCase();
console.log(message);
function sum(x, y) {
    return x + y;
}
var res = sum(5, 2);
console.log(res);
var array = [1, 2, 3];
array.map(function (value) {
    return value * 2;
});
array.map(function (value) { return value * 2; });
//Classes
var Shape = /** @class */ (function () {
    function Shape(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    Shape.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return Shape;
}());
