function divide(a, b) {
  if (b === 0) {
    throw new Error("На нуль ділити не можна");
  }

  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log(error.message);
}

function checkAge(age) {
  if (age < 0) {
    throw new Error("Вік не може бути від’ємним");
  }

  console.log("Перевірку пройдено");
  return age;
}

try {
  const age = checkAge(25);
  console.log(age);
} catch (error) {
  console.log(error.message);
}