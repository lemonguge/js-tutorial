function Student(name) {
    this.name = name;
    this.hello = function () {
        console.log('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
var xiaohong = new Student('小红');

console.log(xiaoming.name); // '小明'
console.log(xiaohong.name); // '小红'
console.log(xiaoming.hello); // function: Student.hello()
console.log(xiaohong.hello); // function: Student.hello()
console.log(xiaoming.hello === xiaohong.hello); // false

function StudentC(name) {
    this.name = name;
}

// 在原型上共享同一个函数，可以节省很多内存
StudentC.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

xiaoming = new StudentC('小明');
xiaohong = new StudentC('小红');

console.log(xiaoming.hello === xiaohong.hello); // true

function f1() {
};
console.log(f1.prototype); // f1 {}
console.log(typeof f1.prototype); // object
console.log(typeof Function.prototype); // function
console.log(typeof Object.prototype); // object
console.log(typeof Function.prototype.prototype); // undefined