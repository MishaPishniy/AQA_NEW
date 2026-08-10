function calculateSum(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

function showResult(result) {
  console.log(`Результат: ${result}`);
}

const numbers = [10, 20, 30];

const result = calculateSum(numbers);

showResult(result);