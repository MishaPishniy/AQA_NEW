const number = [11, 1, 8, 3, 10, 7, 9, 50, 70, 100];
console.log(number);
const bigNumbers = number.map((num) => num * 2);
console.log(bigNumbers);

number.unshift(1000);
console.log(number);
console.log('----------');
console.log(bigNumbers);

let a = 10;
const b = a;
console.log(a);
console.log(b);
a = a + 10;
console.log(a);
console.log(b);
