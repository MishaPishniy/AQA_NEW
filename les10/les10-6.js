class Animal {
  constructor(name) {
    this.name = name;
  }

  Golos() {
    console.log("Тварини дають голос");
  }
}

class Dog extends Animal {
  Golos() {
    console.log(`Собака гавкає`);
  }
}

class Cat extends Animal {
  Golos() {
    console.log(`Кішка мявкає`);
  }
}

const animals = [new Animal(), new Dog(), new Cat()];

for (const zvyk of animals) {
  zvyk.Golos();
}
