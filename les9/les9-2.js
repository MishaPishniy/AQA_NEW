const person = {
  "name person": "John",
  age: 30,
  adress: {
    street: "123 Main St",
    city: "New York",
  },
  sayHello() {
    console.log(`Hello ${this.age} ${this.name}`)
  }
};
// this.age === person.age

person.sayHello();

console.log(person.age)
console.log(person["name person"]);

console.log(person["name person"]);
console.log(person["age"]);
console.log(person["adress"]["street"]);
console.log(person["adress"]["city"]);

person.age = 31;
console.log(person.age)
person.lastName = "Doe"
console.log(person)
delete person.age
console.log(person)