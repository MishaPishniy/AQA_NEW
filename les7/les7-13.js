function outer() {
  const message = "Привіт";

  function inner() {
    console.log(message);
  }

  return inner;
}

const showMessage = outer();

showMessage();