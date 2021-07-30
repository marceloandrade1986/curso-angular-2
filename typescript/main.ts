let message = 'Hello World!';

message.toLowerCase();

console.log(message);

function sum(x, y) {
    return x+y;
}

//functions / Arrays
let res = sum(5, 2);

console.log(res);


let array  = [1, 2, 3];

array.map(function(value) {
    return value * 2;
});

array.map(value => value * 2);


//Classes

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

//Typing vars

let string:string = 'Variavel do tipo string';

string = '256';

