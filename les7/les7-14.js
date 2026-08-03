function createGreeting(name) {
  return function () {
    console.log(`Привіт, ${name}!`);
  };
}

const greetingMisha = createGreeting("Міша");
const greetingAnna = createGreeting("Анна");

greetingMisha();
greetingAnna();