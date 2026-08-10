const person = {
  name: "Jhon",
  age: 30,
};
for (const key in person) {
    console.log(`This ${key} is ${person[key]}`);
}

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// person[key] = person.name or person.age