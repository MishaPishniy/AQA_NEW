const person = {
    " first Name ": "Misha",
    city: "new york",
    name: {
       " first Name ": "jone"
    }
}
console.log(person.age)
console.log(person.name[" first Name "])
console.log(person.name.age)
console.log(person.firstName)
console.log(person[" first Name "])


function person1(name , age) {
    this.name = name
    this.age = age
}

const jonh = new person1("jonh" , 30)
console.log(jonh)
console.log(jonh.name)
console.log(jonh.age)