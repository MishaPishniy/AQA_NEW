const addOne = (number) => number + 1;
const multiplyByTwo = (number) => number * 2;
const firstResult = addOne(5);

console.log(firstResult); 

const finalResult = multiplyByTwo(firstResult);

console.log(finalResult); 

///
const result = multiplyByTwo(addOne(5));

console.log(result); 