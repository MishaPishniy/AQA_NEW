export class Animal {
  constructor(name) {
    this.name = name;
  }

  Golos() {
    console.log("Тварини дають голос");
  }
}


export class Cat extends Animal {
  Golos() {
    console.log(`Кішка мявкає`);
  }
}
