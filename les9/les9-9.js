const person = {
  name: "Jhon",
  age: 30,
  adress: {
    city: "New York",
  }
};
console.log(person)
//const user = {...person};
const user = structuredClone(person);

user.name = "Alice"
user.adress.city = "Los Angeles"
console.log(user)
console.log(person)

