class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} eat`);
  }

  Golos() {
    console.log(`Тварини дають голос`);
  }
}

class Dog extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  brak() {
    console.log(`${this.name} це собака`);
  }

  Golos() {
    console.log(`Собака гавкає`);
  }
}
const dogs = new Dog("Rexs", "Blak");
console.log(dogs.name);
console.log(dogs.color);

class Cat extends Animal {
  brak() {
    console.log(`${this.name} це кіт`);
  }

  Golos() {
    console.log(`Кішка мявкає`);
  }
}

const dogs = new Dog("Rexs");
const animals = new Animal("Тварини");

animals.eat();
animals.brak();

dogs.brak();
dogs.eat();


const Animals = [
    new Animal(),
    new Dog(),
    new Cat()
]

for ( const zvyk of Animals) {
    Animals.Golos()
}