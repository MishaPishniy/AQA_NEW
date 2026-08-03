function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
const multiplyByTwo = createMultiplier(2);

console.log(multiplyByTwo(5));
console.log(multiplyByTwo(10));
