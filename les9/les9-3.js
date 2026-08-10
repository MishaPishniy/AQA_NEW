function sayHello() {
  console.log(`Hello ${this.age} ${this.name}`);
}

const person1 = {
  age: 30,
  name: "Jhon",
  sayHello : sayHello
};

const person2 = {
  age: 25,
  name: "Jane",
  sayHello : sayHello
};


person1.sayHello();
person2.sayHello();
