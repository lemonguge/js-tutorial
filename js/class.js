class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
var xiaohong = new Student('小红');

xiaoming.hello();

console.log(xiaoming.hello === xiaohong.hello); // true