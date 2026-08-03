function calculate(a, b, operation) {
  return operation(a, b);
}

const result = calculate(10, 5, (a, b) => {
  return a * b;
});

console.log(result); 

//////
const result = calculate(10, 5, (a, b) => a * b);

console.log(result);