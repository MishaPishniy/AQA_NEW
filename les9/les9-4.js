const person = {
  "name person": "John",
  age: 30,
  adress: {
    street: "123 Main St",
    city: "New York",
  },
  sayHello() {
    console.log(`Hello ${this.age}`)
  }
};

person.sayHello();

const user = {
    age: 25,
    sayHello: person.sayHello,
}

person.sayHello();
user.sayHello();