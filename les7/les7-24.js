function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("На нуль ділити не можна");
    }

    console.log(a / b);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Функція завершила роботу");
  }
}

divide(10, 0);