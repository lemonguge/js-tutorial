console.log(2 && 3); // 3
console.log(('' && 1) === ''); // true

console.log(false == 0); // true
console.log(false == ''); // true

console.log('-----');

console.log(false == null); // false
console.log(false == NaN); // false
console.log(false == undefined); // false
console.log(false === 0); // false

console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

console.log(Infinity === Infinity); // true

console.log(1 / 3 === (1 - 2 / 3)); // false
console.log(Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001); // true