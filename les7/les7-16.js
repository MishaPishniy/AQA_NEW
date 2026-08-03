function multiplyBy(number) {
  return function (value) {
    return value * number;
  };
}

const multiplyBy2 = multiplyBy(2);
const multiplyBy5 = multiplyBy(5);

console.log(multiplyBy2(10));
console.log(multiplyBy5(10));